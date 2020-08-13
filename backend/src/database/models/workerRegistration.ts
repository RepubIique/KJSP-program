import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * WorkerRegistration database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const workerRegistration = sequelize.define(
    'workerRegistration',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      designation: {
        type: DataTypes.TEXT,
      },
      passport: {
        type: DataTypes.TEXT,
      },
      permitExpiryDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('permitExpiryDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('permitExpiryDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      dateEmployed: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dateEmployed')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dateEmployed'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      gang: {
        type: DataTypes.TEXT,
      },
      superiorName: {
        type: DataTypes.TEXT,
      },
      dob: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('dob')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('dob'))
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
      placeOfBirth: {
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
          "Single",
          "Other"
        ],
      },
      spouse: {
        type: DataTypes.TEXT,
      },
      children: {
        type: DataTypes.INTEGER,
      },
      bank: {
        type: DataTypes.TEXT,
      },
      bankNo: {
        type: DataTypes.TEXT,
      },
      socso: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "Active",
          "On Leave",
          "Resigned",
          "Absconded"
        ],
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,        
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  workerRegistration.associate = (models) => {
    models.workerRegistration.belongsTo(models.location, {
      as: 'location',
      constraints: false,
    });

    models.workerRegistration.hasMany(models.file, {
      as: 'image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.workerRegistration.getTableName(),
        belongsToColumn: 'image',
      },
    });
    
    models.workerRegistration.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.workerRegistration.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.workerRegistration.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return workerRegistration;
}
