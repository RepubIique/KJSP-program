const models = require('../models');
const SequelizeRepository = require('./sequelizeRepository');
const AuditLogRepository = require('./auditLogRepository');
const FileRepository = require('./fileRepository');
const lodash = require('lodash');
const SequelizeFilterUtils = require('../utils/sequelizeFilterUtils');

const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

/**
 * Handles database operations for the Ffb.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class FfbRepository {
  /**
   * Creates the Ffb.
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

    const record = await models.ffb.create(
      {
        ...lodash.pick(data, [
          'id',
          'date',
          'fFBTonnageMT',
          'month',
          'year',
          'company',
          'millticketNo',
          'sealNo',
          'deliverynoteno',
          'lorryNo',
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

    await record.setEstate(data.estate || null, {
      transaction,
    });
    await record.setSubdivision(data.subdivision || null, {
      transaction,
    });
    await record.setMill(data.mill || null, {
      transaction,
    });
    await record.setBlock(data.block || null, {
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
   * Updates the Ffb.
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

    let record = await models.ffb.findByPk(id, {
      transaction,
    });

    record = await record.update(
      {
        ...lodash.pick(data, [
          'id',
          'date',
          'fFBTonnageMT',
          'month',
          'year',
          'company',
          'millticketNo',
          'sealNo',
          'deliverynoteno',
          'lorryNo',
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


    await record.setEstate(data.estate || null, {
      transaction,
    });
    await record.setSubdivision(data.subdivision || null, {
      transaction,
    });
    await record.setMill(data.mill || null, {
      transaction,
    });
    await record.setBlock(data.block || null, {
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
   * Deletes the Ffb.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.ffb.findByPk(id, {
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
   * Finds the Ffb and its relations.
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
        model: models.estate,
        as: 'estate',
      },
      {
        model: models.subdivision,
        as: 'subdivision',
      },
      {
        model: models.mill,
        as: 'mill',
      },
      {
        model: models.workcode,
        as: 'block',
      },
    ];

    const record = await models.ffb.findByPk(id, {
      include,
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of Ffbs based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    return models.ffb.count(
      {
        where: filter,
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the Ffbs based on the query.
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
        model: models.estate,
        as: 'estate',
      },
      {
        model: models.subdivision,
        as: 'subdivision',
      },
      {
        model: models.mill,
        as: 'mill',
      },
      {
        model: models.workcode,
        as: 'block',
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

      if (filter.estate) {
        where = {
          ...where,
          ['estateId']: SequelizeFilterUtils.uuid(
            filter.estate,
          ),
        };
      }

      if (filter.subdivision) {
        where = {
          ...where,
          ['subdivisionId']: SequelizeFilterUtils.uuid(
            filter.subdivision,
          ),
        };
      }

      if (filter.mill) {
        where = {
          ...where,
          ['millId']: SequelizeFilterUtils.uuid(
            filter.mill,
          ),
        };
      }

      if (filter.fFBTonnageMTRange) {
        const [start, end] = filter.fFBTonnageMTRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            fFBTonnageMT: {
              ...where.fFBTonnageMT,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            fFBTonnageMT: {
              ...where.fFBTonnageMT,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.month) {
        where = {
          ...where,
          month: filter.month,
        };
      }

      if (filter.year) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'ffb',
            'year',
            filter.year,
          ),
        };
      }

      if (filter.company) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'ffb',
            'company',
            filter.company,
          ),
        };
      }

      if (filter.millticketNo) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'ffb',
            'millticketNo',
            filter.millticketNo,
          ),
        };
      }

      if (filter.sealNoRange) {
        const [start, end] = filter.sealNoRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            sealNo: {
              ...where.sealNo,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            sealNo: {
              ...where.sealNo,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.deliverynotenoRange) {
        const [start, end] = filter.deliverynotenoRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            deliverynoteno: {
              ...where.deliverynoteno,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            deliverynoteno: {
              ...where.deliverynoteno,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.lorryNo) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'ffb',
            'lorryNo',
            filter.lorryNo,
          ),
        };
      }

      if (filter.block) {
        where = {
          ...where,
          ['blockId']: SequelizeFilterUtils.uuid(
            filter.block,
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
    } = await models.ffb.findAndCountAll({
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
   * Lists the Ffbs to populate the autocomplete.
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

        ],
      };
    }

    const records = await models.ffb.findAll({
      attributes: ['id', 'id'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['id', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.id,
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
        entityName: 'ffb',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of Ffb with relations and files.
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
   * Fill the Ffb with the relations and files.
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

module.exports = FfbRepository;
