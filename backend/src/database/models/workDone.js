const moment = require('moment');

/**
 * WorkDone database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const workDone = sequelize.define(
    'workDone',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.DECIMAL,
      },
      block: {
        type: DataTypes.INTEGER,
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

  workDone.associate = (models) => {
    models.workDone.belongsTo(models.workerRegistration, {
      as: 'workerID',
      constraints: false,
    });

    models.workDone.belongsTo(models.workcode, {
      as: 'workcode',
      constraints: false,
    });

    models.workDone.belongsTo(models.week, {
      as: 'week',
      constraints: false,
    });



    models.workDone.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.workDone.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return workDone;
};
