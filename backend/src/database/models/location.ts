import { DataTypes } from 'sequelize';

/**
 * Location database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const location = sequelize.define(
    'location',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
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

  location.associate = (models) => {



    
    models.location.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.location.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.location.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return location;
}
