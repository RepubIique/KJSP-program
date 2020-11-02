"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/**
 * Location database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const location = sequelize.define('location', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        location: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
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
    location.associate = (models) => {
        models.location.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.location.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.location.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return location;
}
exports.default = default_1;
//# sourceMappingURL=location.js.map