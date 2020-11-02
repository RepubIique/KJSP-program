"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
/**
 * Deduction database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const deduction = sequelize.define('deduction', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        bf: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        credit: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        deduction: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        cf: {
            type: sequelize_1.DataTypes.DECIMAL,
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
    deduction.associate = (models) => {
        models.deduction.belongsTo(models.deduction, {
            as: 'worker',
            constraints: false,
        });
        models.deduction.belongsTo(models.location, {
            as: 'location',
            constraints: false,
        });
        models.deduction.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.deduction.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.deduction.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return deduction;
}
exports.default = default_1;
//# sourceMappingURL=deduction.js.map