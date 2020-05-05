const moment = require('moment');

/**
 * Blocks database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const blocks = sequelize.define(
    'blocks',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      blocks: {
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

  blocks.associate = (models) => {




    models.blocks.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.blocks.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return blocks;
};
