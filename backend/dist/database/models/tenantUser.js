"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
/**
 * Tenant User relation database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize, DataTypes) {
    const tenantUser = sequelize.define('tenantUser', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        roles: {
            type: 
            // MySQL doesn't have Array Field
            config_1.getConfig().DATABASE_DIALECT === 'mysql'
                ? DataTypes.JSON
                : DataTypes.ARRAY(DataTypes.TEXT),
        },
        invitationToken: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['active', 'invited', 'empty-permissions'],
        },
    }, {
        timestamps: true,
        paranoid: true,
    });
    tenantUser.associate = (models) => {
        models.tenantUser.belongsTo(models.tenant);
        models.tenantUser.belongsTo(models.user);
        models.tenantUser.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.tenantUser.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return tenantUser;
}
exports.default = default_1;
//# sourceMappingURL=tenantUser.js.map