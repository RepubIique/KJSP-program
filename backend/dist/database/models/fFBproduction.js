"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
/**
 * FFBproduction database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const fFBproduction = sequelize.define('fFBproduction', {
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
        mill: {
            type: sequelize_1.DataTypes.TEXT,
        },
        block: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        bunches: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        mt: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        looseFruit: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        bunchWeight: {
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
    fFBproduction.associate = (models) => {
        models.fFBproduction.belongsTo(models.location, {
            as: 'location',
            constraints: false,
        });
        models.fFBproduction.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.fFBproduction.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.fFBproduction.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return fFBproduction;
}
exports.default = default_1;
//# sourceMappingURL=fFBproduction.js.map