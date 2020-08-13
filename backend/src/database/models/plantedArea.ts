import { DataTypes } from 'sequelize';

/**
 * PlantedArea database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const plantedArea = sequelize.define(
    'plantedArea',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      block: {
        type: DataTypes.INTEGER,
      },
      plantedHa: {
        type: DataTypes.DECIMAL,
      },
      totalPalm: {
        type: DataTypes.DECIMAL,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,        
      },
    },
    {
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
    },
  );

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
