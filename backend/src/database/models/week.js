const moment = require('moment');

/**
 * Week database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const week = sequelize.define(
    'week',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      week: {
        type: DataTypes.TEXT,
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

  week.associate = (models) => {




    models.week.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.week.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return week;
};
