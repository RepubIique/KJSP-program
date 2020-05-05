const moment = require('moment');

/**
 * Estate database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const estate = sequelize.define(
    'estate',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      estate: {
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

  estate.associate = (models) => {




    models.estate.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.estate.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return estate;
};
