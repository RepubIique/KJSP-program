const moment = require('moment');

/**
 * Checkroll database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const checkroll = sequelize.define(
    'checkroll',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      no: {
        type: DataTypes.INTEGER,
      },
      quantity: {
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

  checkroll.associate = (models) => {
    models.checkroll.belongsTo(models.workerRegistration, {
      as: 'workerID',
      constraints: false,
    });

    models.checkroll.belongsTo(models.workcode, {
      as: 'workcode',
      constraints: false,
    });

    models.checkroll.belongsTo(models.blocks, {
      as: 'block',
      constraints: false,
    });

    models.checkroll.belongsTo(models.week, {
      as: 'week',
      constraints: false,
    });



    models.checkroll.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.checkroll.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return checkroll;
};
