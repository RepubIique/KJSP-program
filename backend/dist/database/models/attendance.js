"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
/**
 * Attendance database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const attendance = sequelize.define('attendance', {
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
        type: {
            type: sequelize_1.DataTypes.ENUM,
            values: [
                "Working day",
                "rest day",
                "public holiday",
                "Absent",
                "Sick Leave",
                "On leave"
            ],
        },
        hours: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        totalHours: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        overTime: {
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
    attendance.associate = (models) => {
        models.attendance.belongsTo(models.location, {
            as: 'location',
            constraints: false,
        });
        models.attendance.belongsTo(models.workerRegistration, {
            as: 'worker',
            constraints: false,
        });
        models.attendance.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.attendance.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.attendance.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return attendance;
}
exports.default = default_1;
//# sourceMappingURL=attendance.js.map