import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Deduction database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const deduction = sequelize.define(
    'deduction',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      bf: {
        type: DataTypes.DECIMAL,
      },
      credit: {
        type: DataTypes.DECIMAL,
      },
      deduction: {
        type: DataTypes.DECIMAL,
      },
      cf: {
        type: DataTypes.DECIMAL,
      },
      date: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('date')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('date'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  deduction.associate = (models) => {
    models.deduction.belongsTo(models.deduction, {
      as: 'worker',
      constraints: false,
    });

    models.deduction.belongsTo(models.location, {
      as: 'location',
      constraints: false,
    });


    
    models.deduction.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.deduction.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.deduction.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return deduction;
}
