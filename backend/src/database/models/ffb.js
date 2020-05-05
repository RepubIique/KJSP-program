const moment = require('moment');

/**
 * Ffb database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const ffb = sequelize.define(
    'ffb',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        get: function() {
          return this.getDataValue('date')
            ? moment
                .utc(this.getDataValue('date'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      fFBTonnageMT: {
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
        type: DataTypes.TEXT,
      },
      company: {
        type: DataTypes.TEXT,
      },
      millticketNo: {
        type: DataTypes.TEXT,
      },
      sealNo: {
        type: DataTypes.INTEGER,
      },
      deliverynoteno: {
        type: DataTypes.INTEGER,
      },
      lorryNo: {
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

  ffb.associate = (models) => {
    models.ffb.belongsTo(models.estate, {
      as: 'estate',
      constraints: false,
    });

    models.ffb.belongsTo(models.subdivision, {
      as: 'subdivision',
      constraints: false,
    });

    models.ffb.belongsTo(models.mill, {
      as: 'mill',
      constraints: false,
    });

    models.ffb.belongsTo(models.workcode, {
      as: 'block',
      constraints: false,
    });



    models.ffb.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.ffb.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return ffb;
};
