const moment = require('moment');

/**
 * Workcode database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const workcode = sequelize.define(
    'workcode',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      accCode: {
        type: DataTypes.TEXT,
      },
      workCategory: {
        type: DataTypes.TEXT,
      },
      typeofWork: {
        type: DataTypes.TEXT,
      },
      workDescription: {
        type: DataTypes.TEXT,
      },
      rate: {
        type: DataTypes.DECIMAL,
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

  workcode.associate = (models) => {




    models.workcode.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.workcode.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return workcode;
};
