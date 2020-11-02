"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
/**
 * WorkDone database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const workDone = sequelize.define('workDone', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        date: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('date')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('date'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        block: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        quantity: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
        },
        amount: {
            type: sequelize_1.DataTypes.DECIMAL,
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
    workDone.associate = (models) => {
        models.workDone.belongsTo(models.location, {
            as: 'location',
            constraints: false,
        });
        models.workDone.belongsTo(models.workerRegistration, {
            as: 'worker',
            constraints: false,
        });
        models.workDone.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.workDone.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.workDone.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return workDone;
}
exports.default = default_1;
//# sourceMappingURL=workDone.js.map