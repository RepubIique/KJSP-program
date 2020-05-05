const moment = require('moment');

/**
 * Subdivision database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const subdivision = sequelize.define(
    'subdivision',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      subdivision: {
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

  subdivision.associate = (models) => {




    models.subdivision.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.subdivision.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return subdivision;
};
