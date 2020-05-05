const moment = require('moment');

/**
 * Uom database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const uom = sequelize.define(
    'uom',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      uom: {
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

  uom.associate = (models) => {




    models.uom.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.uom.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return uom;
};
