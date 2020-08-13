import { DataTypes } from 'sequelize';

/**
 * WorkCode database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const workCode = sequelize.define(
    'workCode',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      category: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      uom: {
        type: DataTypes.TEXT,
      },
      rate: {
        type: DataTypes.DECIMAL,
      },
      remarks: {
        type: DataTypes.TEXT,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,        
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  workCode.associate = (models) => {



    
    models.workCode.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.workCode.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.workCode.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return workCode;
}
