const moment = require('moment');

/**
 * WorkerRegistration database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const workerRegistration = sequelize.define(
    'workerRegistration',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      workerID: {
        type: DataTypes.TEXT,
      },
      workerName: {
        type: DataTypes.TEXT,
      },
      passportICNo: {
        type: DataTypes.TEXT,
      },
      passportExpireddate: {
        type: DataTypes.DATEONLY,
        get: function() {
          return this.getDataValue('passportExpireddate')
            ? moment
                .utc(this.getDataValue('passportExpireddate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      dateofEmployment: {
        type: DataTypes.DATEONLY,
        get: function() {
          return this.getDataValue('dateofEmployment')
            ? moment
                .utc(this.getDataValue('dateofEmployment'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      superiorName: {
        type: DataTypes.TEXT,
      },
      dateofBirth: {
        type: DataTypes.DATEONLY,
        get: function() {
          return this.getDataValue('dateofBirth')
            ? moment
                .utc(this.getDataValue('dateofBirth'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      age: {
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.ENUM,
        values: [
          "Male",
          "Female",
          "Other"
        ],
      },
      placeofBirth: {
        type: DataTypes.TEXT,
      },
      nationality: {
        type: DataTypes.TEXT,
      },
      religion: {
        type: DataTypes.TEXT,
      },
      race: {
        type: DataTypes.TEXT,
      },
      maritalStatus: {
        type: DataTypes.ENUM,
        values: [
          "Married",
          "Divorced",
          "Single"
        ],
      },
      spouseName: {
        type: DataTypes.TEXT,
      },
      noofchild: {
        type: DataTypes.INTEGER,
      },
      bank: {
        type: DataTypes.TEXT,
      },
      bankAccountNo: {
        type: DataTypes.INTEGER,
      },
      socsoNo: {
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

  workerRegistration.associate = (models) => {
    models.workerRegistration.belongsTo(models.designation, {
      as: 'designation',
      constraints: false,
    });

    models.workerRegistration.belongsTo(models.subdivision, {
      as: 'subdivision',
      constraints: false,
    });



    models.workerRegistration.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.workerRegistration.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return workerRegistration;
};
