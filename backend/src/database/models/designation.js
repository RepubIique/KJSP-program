const moment = require('moment');

/**
 * Designation database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const designation = sequelize.define(
    'designation',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      designation: {
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

  designation.associate = (models) => {




    models.designation.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.designation.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return designation;
};
