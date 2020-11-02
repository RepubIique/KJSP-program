"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/**
 * WorkCode database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const workCode = sequelize.define('workCode', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        category: {
            type: sequelize_1.DataTypes.TEXT,
        },
        type: {
            type: sequelize_1.DataTypes.TEXT,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
        },
        uom: {
            type: sequelize_1.DataTypes.TEXT,
        },
        rate: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
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
    workCode.associate = (models) => {
        models.workCode.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.workCode.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.workCode.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return workCode;
}
exports.default = default_1;
//# sourceMappingURL=workCode.js.map