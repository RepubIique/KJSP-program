"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/**
 * PlantedArea database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize) {
    const plantedArea = sequelize.define('plantedArea', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        block: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        plantedHa: {
            type: sequelize_1.DataTypes.DECIMAL,
        },
        totalPalm: {
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
    plantedArea.associate = (models) => {
        models.plantedArea.belongsTo(models.location, {
            as: 'location',
            constraints: false,
        });
        models.plantedArea.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.plantedArea.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.plantedArea.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return plantedArea;
}
exports.default = default_1;
//# sourceMappingURL=plantedArea.js.map