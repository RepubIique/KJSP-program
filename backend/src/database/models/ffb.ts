import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * Ffb database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const ffb = sequelize.define(
    'ffb',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      block: {
        type: DataTypes.INTEGER,
      },
      budget: {
        type: DataTypes.DECIMAL,
      },
      date: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('date')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('date'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  ffb.associate = (models) => {
    models.ffb.belongsTo(models.location, {
      as: 'location',
      constraints: false,
    });


    
    models.ffb.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.ffb.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.ffb.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return ffb;
}
