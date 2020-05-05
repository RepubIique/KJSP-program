const moment = require('moment');

/**
 * Attendance database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const attendance = sequelize.define(
    'attendance',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      totalWorkingDay: {
        type: DataTypes.INTEGER,
      },
      totalWorkingHours: {
        type: DataTypes.INTEGER,
      },
      totalRestDay: {
        type: DataTypes.INTEGER,
      },
      totalPublicHoliday: {
        type: DataTypes.INTEGER,
      },
      totalAbsent: {
        type: DataTypes.INTEGER,
      },
      totalSickLeave: {
        type: DataTypes.INTEGER,
      },
      totalOnLeave: {
        type: DataTypes.DECIMAL,
      },
      totalOvertimeHour: {
        type: DataTypes.DECIMAL,
      },
      month: {
        type: DataTypes.ENUM,
        values: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
      },
      year: {
        type: DataTypes.INTEGER,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  attendance.associate = (models) => {
    models.attendance.belongsTo(models.subdivision, {
      as: 'subDivision',
      constraints: false,
    });

    models.attendance.belongsTo(models.week, {
      as: 'week',
      constraints: false,
    });

    models.attendance.belongsTo(models.workerRegistration, {
      as: 'workerID',
      constraints: false,
    });



    models.attendance.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.attendance.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return attendance;
};
