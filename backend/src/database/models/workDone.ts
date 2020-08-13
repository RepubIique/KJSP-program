import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * WorkDone database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const workDone = sequelize.define(
    'workDone',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      block: {
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.DECIMAL,
      },
      remarks: {
        type: DataTypes.TEXT,
      },
      amount: {
        type: DataTypes.DECIMAL,
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

  workDone.associate = (models) => {
    models.workDone.belongsTo(models.location, {
      as: 'location',
      constraints: false,
    });

    models.workDone.belongsTo(models.workerRegistration, {
      as: 'worker',
      constraints: false,
    });


    
    models.workDone.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.workDone.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.workDone.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return workDone;
}
