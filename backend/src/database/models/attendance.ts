import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Attendance database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const attendance = sequelize.define(
    'attendance',
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
      type: {
        type: DataTypes.ENUM,
        values: [
          "Working day",
          "rest day",
          "public holiday",
          "Absent",
          "Sick Leave",
          "On leave"
        ],
      },
      hours: {
        type: DataTypes.DECIMAL,
      },
      totalHours: {
        type: DataTypes.DECIMAL,
      },
      overTime: {
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

  attendance.associate = (models) => {
    models.attendance.belongsTo(models.location, {
      as: 'location',
      constraints: false,
    });

    models.attendance.belongsTo(models.workerRegistration, {
      as: 'worker',
      constraints: false,
    });


    
    models.attendance.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.attendance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.attendance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return attendance;
}
