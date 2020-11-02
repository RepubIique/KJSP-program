"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Audit Log database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize, DataTypes) {
    const auditLog = sequelize.define('auditLog', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        entityName: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        entityId: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        tenantId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        action: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        createdById: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        createdByEmail: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        timestamp: { type: DataTypes.DATE, allowNull: false },
        values: { type: DataTypes.JSON, allowNull: false },
    }, {
        timestamps: false,
    });
    auditLog.associate = (models) => { };
    return auditLog;
}
exports.default = default_1;
//# sourceMappingURL=auditLog.js.map