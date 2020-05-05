const moment = require('moment');

/**
 * Deduction database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const deduction = sequelize.define(
    'deduction',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      deductfor: {
        type: DataTypes.TEXT,
      },
      bfrm: {
        type: DataTypes.DECIMAL,
      },
      currentRM: {
        type: DataTypes.DECIMAL,
      },
      deductionRM: {
        type: DataTypes.DECIMAL,
      },
      cfrm: {
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

  deduction.associate = (models) => {
    models.deduction.belongsTo(models.workerRegistration, {
      as: 'workersID',
      constraints: false,
    });



    models.deduction.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.deduction.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return deduction;
};
