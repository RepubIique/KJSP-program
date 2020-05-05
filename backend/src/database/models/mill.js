const moment = require('moment');

/**
 * Mill database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const mill = sequelize.define(
    'mill',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      mill: {
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

  mill.associate = (models) => {




    models.mill.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.mill.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return mill;
};
