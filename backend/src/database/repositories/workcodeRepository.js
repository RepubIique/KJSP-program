const models = require('../models');
const SequelizeRepository = require('./sequelizeRepository');
const AuditLogRepository = require('./auditLogRepository');
const FileRepository = require('./fileRepository');
const lodash = require('lodash');
const SequelizeFilterUtils = require('../utils/sequelizeFilterUtils');

const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

/**
 * Handles database operations for the Workcode.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class WorkcodeRepository {
  /**
   * Creates the Workcode.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await models.workcode.create(
      {
        ...lodash.pick(data, [
          'id',
          'accCode',
          'workCategory',
          'typeofWork',
          'workDescription',
          'rate',
          'importHash',
          'updatedAt',
          'createdAt',
        ]),
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setUom(data.uom || null, {
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
   * Updates the Workcode.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.workcode.findByPk(id, {
      transaction,
    });

    record = await record.update(
      {
        ...lodash.pick(data, [
          'id',
          'accCode',
          'workCategory',
          'typeofWork',
          'workDescription',
          'rate',
          'importHash',
          'updatedAt',
          'createdAt',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );


    await record.setUom(data.uom || null, {
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
   * Deletes the Workcode.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.workcode.findByPk(id, {
      transaction,
    });

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      null,
      options,
    );
  }

  /**
   * Finds the Workcode and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: models.uom,
        as: 'uom',
      },
    ];

    const record = await models.workcode.findByPk(id, {
      include,
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of Workcodes based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    return models.workcode.count(
      {
        where: filter,
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the Workcodes based on the query.
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
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    let where = {};
    let include = [
      {
        model: models.uom,
        as: 'uom',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        };
      }

      if (filter.accCode) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workcode',
            'accCode',
            filter.accCode,
          ),
        };
      }

      if (filter.workCategory) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workcode',
            'workCategory',
            filter.workCategory,
          ),
        };
      }

      if (filter.typeofWork) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workcode',
            'typeofWork',
            filter.typeofWork,
          ),
        };
      }

      if (filter.workDescription) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workcode',
            'workDescription',
            filter.workDescription,
          ),
        };
      }

      if (filter.rateRange) {
        const [start, end] = filter.rateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            rate: {
              ...where.rate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            rate: {
              ...where.rate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.uom) {
        where = {
          ...where,
          ['uomId']: SequelizeFilterUtils.uuid(
            filter.uom,
          ),
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
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
    } = await models.workcode.findAndCountAll({
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
   * Lists the Workcodes to populate the autocomplete.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {string} query
   * @param {number} limit
   */
  async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },
          {
            [Op.and]: SequelizeFilterUtils.ilike(
              'workcode',
              'accCode',
              query,
            ),
          },
        ],
      };
    }

    const records = await models.workcode.findAll({
      attributes: ['id', 'accCode'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['accCode', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.accCode,
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
  async _createAuditLog(action, record, data, options) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'workcode',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of Workcode with relations and files.
   *
   * @param {Array} rows
   * @param {Object} [options]
   */
  async _fillWithRelationsAndFilesForRows(rows, options) {
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
   * Fill the Workcode with the relations and files.
   *
   * @param {Object} record
   * @param {Object} [options]
   */
  async _fillWithRelationsAndFiles(record, options) {
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

module.exports = WorkcodeRepository;
