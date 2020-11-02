"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
/**
 * WorkerRegistration database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const workerRegistration = sequelize.define('workerRegistration', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        designation: {
            type: sequelize_1.DataTypes.TEXT,
        },
        passport: {
            type: sequelize_1.DataTypes.TEXT,
        },
        permitExpiryDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('permitExpiryDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('permitExpiryDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        dateEmployed: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('dateEmployed')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('dateEmployed'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        gang: {
            type: sequelize_1.DataTypes.TEXT,
        },
        superiorName: {
            type: sequelize_1.DataTypes.TEXT,
        },
        dob: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('dob')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('dob'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        age: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        gender: {
            type: sequelize_1.DataTypes.ENUM,
            values: [
                "Male",
                "Female",
                "Other"
            ],
        },
        placeOfBirth: {
            type: sequelize_1.DataTypes.TEXT,
        },
        nationality: {
            type: sequelize_1.DataTypes.TEXT,
        },
        religion: {
            type: sequelize_1.DataTypes.TEXT,
        },
        race: {
            type: sequelize_1.DataTypes.TEXT,
        },
        maritalStatus: {
            type: sequelize_1.DataTypes.ENUM,
            values: [
                "Married",
                "Divorced",
                "Single",
                "Other"
            ],
        },
        spouse: {
            type: sequelize_1.DataTypes.TEXT,
        },
        children: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        bank: {
            type: sequelize_1.DataTypes.TEXT,
        },
        bankNo: {
            type: sequelize_1.DataTypes.TEXT,
        },
        socso: {
            type: sequelize_1.DataTypes.TEXT,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM,
            values: [
                "Active",
                "On Leave",
                "Resigned",
                "Absconded"
            ],
        },
        importHash: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
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
    });
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
exports.default = default_1;
//# sourceMappingURL=workerRegistration.js.map