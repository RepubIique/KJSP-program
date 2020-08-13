import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * FFBproduction database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const fFBproduction = sequelize.define(
    'fFBproduction',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      mill: {
        type: DataTypes.TEXT,
      },
      block: {
        type: DataTypes.INTEGER,
      },
      bunches: {
        type: DataTypes.DECIMAL,
      },
      mt: {
        type: DataTypes.DECIMAL,
      },
      looseFruit: {
        type: DataTypes.DECIMAL,
      },
      bunchWeight: {
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
