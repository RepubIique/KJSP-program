import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

/**
 * Handles database operations for the FFBproduction.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class FFBproductionRepository {
  /**
   * Creates the FFBproduction.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async create(data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.fFBproduction.create(
      {
        ...lodash.pick(data, [
          'date',
          'mill',
          'block',
          'bunches',
          'mt',
          'looseFruit',
          'bunchWeight',          
          'importHash',
        ]),
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setLocation(data.location || null, {
      transaction,
    });
  

  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the FFBproduction.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async update(id, data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.fFBproduction.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'date',
          'mill',
          'block',
          'bunches',
          'mt',
          'looseFruit',
          'bunchWeight',          
          'importHash',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setLocation(data.location || null, {
      transaction,
    });



    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Deletes the FFBproduction.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.fFBproduction.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  /**
   * Finds the FFBproduction and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async findById(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.location,
        as: 'location',
      },
    ];

    const record = await options.database.fFBproduction.findByPk(
      id,
      {
        include,
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of FFBproductions based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  static async count(filter, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.fFBproduction.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the FFBproductions based on the query.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   * @param {Object} [options]
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let where: any = {
      tenantId: tenant.id,
    };

    let include = [
      {
        model: options.database.location,
        as: 'location',
      },      
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        };
      }

      if (filter.dateRange) {
        const [start, end] = filter.dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            date: {
              ...where.date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            date: {
              ...where.date,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.location) {
        where = {
          ...where,
          ['locationId']: SequelizeFilterUtils.uuid(
            filter.location,
          ),
        };
      }

      if (filter.mill) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'fFBproduction',
            'mill',
            filter.mill,
          ),
        };
      }

      if (filter.blockRange) {
        const [start, end] = filter.blockRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            block: {
              ...where.block,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            block: {
              ...where.block,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.bunchesRange) {
        const [start, end] = filter.bunchesRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            bunches: {
              ...where.bunches,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            bunches: {
              ...where.bunches,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.mtRange) {
        const [start, end] = filter.mtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            mt: {
              ...where.mt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            mt: {
              ...where.mt,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.looseFruitRange) {
        const [start, end] = filter.looseFruitRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            looseFruit: {
              ...where.looseFruit,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            looseFruit: {
              ...where.looseFruit,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.bunchWeightRange) {
        const [start, end] = filter.bunchWeightRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            bunchWeight: {
              ...where.bunchWeight,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            bunchWeight: {
              ...where.bunchWeight,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let {
      rows,
      count,
    } = await options.database.fFBproduction.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  /**
   * Lists the FFBproductions to populate the autocomplete.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {number} limit
   */
  static async findAllAutocomplete(query, limit, options) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let where: any = {
      tenantId: tenant.id,
    };

    if (query) {
      where = {
        ...where,
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },
          {
            [Op.and]: SequelizeFilterUtils.ilike(
              'fFBproduction',
              'mill',
              query,
            ),
          },
        ],
      };
    }

    const records = await options.database.fFBproduction.findAll(
      {
        attributes: ['id', 'mill'],
        where,
        limit: limit ? Number(limit) : undefined,
        orderBy: [['mill', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.mill,
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} record - The sequelize record
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  static async _createAuditLog(
    action,
    record,
    data,
    options,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'fFBproduction',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of FFBproduction with relations and files.
   *
   * @param {Array} rows
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFilesForRows(
    rows,
    options,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  /**
   * Fill the FFBproduction with the relations and files.
   *
   * @param {Object} record
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFiles(record, options) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );



    return output;
  }
}

export default FFBproductionRepository;
