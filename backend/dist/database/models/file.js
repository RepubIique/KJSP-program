"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * File database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
function default_1(sequelize, DataTypes) {
    const file = sequelize.define('file', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        belongsTo: DataTypes.STRING(255),
        belongsToId: DataTypes.STRING(255),
        belongsToColumn: DataTypes.STRING(255),
        name: {
            type: DataTypes.STRING(2083),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        sizeInBytes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        privateUrl: {
            type: DataTypes.STRING(2083),
            allowNull: true,
        },
        publicUrl: {
            type: DataTypes.STRING(2083),
            allowNull: true,
        },
    }, {
        timestamps: true,
        paranoid: true,
    });
    file.associate = (models) => {
        models.file.belongsTo(models.tenant, {
            as: 'tenant',
        });
        models.file.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.file.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return file;
}
exports.default = default_1;
//# sourceMappingURL=file.js.map