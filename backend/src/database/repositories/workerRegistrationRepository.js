const models = require('../models');
const SequelizeRepository = require('./sequelizeRepository');
const AuditLogRepository = require('./auditLogRepository');
const FileRepository = require('./fileRepository');
const lodash = require('lodash');
const SequelizeFilterUtils = require('../utils/sequelizeFilterUtils');

const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

/**
 * Handles database operations for the WorkerRegistration.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class WorkerRegistrationRepository {
  /**
   * Creates the WorkerRegistration.
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

    const record = await models.workerRegistration.create(
      {
        ...lodash.pick(data, [
          'id',
          'workerID',
          'workerName',
          'passportICNo',
          'passportExpireddate',
          'dateofEmployment',
          'superiorName',
          'dateofBirth',
          'age',
          'gender',
          'placeofBirth',
          'nationality',
          'religion',
          'race',
          'maritalStatus',
          'spouseName',
          'noofchild',
          'bank',
          'bankAccountNo',
          'socsoNo',
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

    await record.setDesignation(data.designation || null, {
      transaction,
    });
    await record.setSubdivision(data.subdivision || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: models.workerRegistration.getTableName(),
        belongsToColumn: 'image',
        belongsToId: record.id,
      },
      data.image,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the WorkerRegistration.
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

    let record = await models.workerRegistration.findByPk(id, {
      transaction,
    });

    record = await record.update(
      {
        ...lodash.pick(data, [
          'id',
          'workerID',
          'workerName',
          'passportICNo',
          'passportExpireddate',
          'dateofEmployment',
          'superiorName',
          'dateofBirth',
          'age',
          'gender',
          'placeofBirth',
          'nationality',
          'religion',
          'race',
          'maritalStatus',
          'spouseName',
          'noofchild',
          'bank',
          'bankAccountNo',
          'socsoNo',
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


    await record.setDesignation(data.designation || null, {
      transaction,
    });
    await record.setSubdivision(data.subdivision || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: models.workerRegistration.getTableName(),
        belongsToColumn: 'image',
        belongsToId: record.id,
      },
      data.image,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Deletes the WorkerRegistration.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.workerRegistration.findByPk(id, {
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
   * Finds the WorkerRegistration and its relations.
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
        model: models.designation,
        as: 'designation',
      },
      {
        model: models.subdivision,
        as: 'subdivision',
      },
    ];

    const record = await models.workerRegistration.findByPk(id, {
      include,
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of WorkerRegistrations based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    return models.workerRegistration.count(
      {
        where: filter,
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the WorkerRegistrations based on the query.
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
        model: models.designation,
        as: 'designation',
      },
      {
        model: models.subdivision,
        as: 'subdivision',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        };
      }

      if (filter.workerID) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'workerID',
            filter.workerID,
          ),
        };
      }

      if (filter.workerName) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'workerName',
            filter.workerName,
          ),
        };
      }

      if (filter.designation) {
        where = {
          ...where,
          ['designationId']: SequelizeFilterUtils.uuid(
            filter.designation,
          ),
        };
      }

      if (filter.passportICNo) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'passportICNo',
            filter.passportICNo,
          ),
        };
      }

      if (filter.passportExpireddateRange) {
        const [start, end] = filter.passportExpireddateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            passportExpireddate: {
              ...where.passportExpireddate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            passportExpireddate: {
              ...where.passportExpireddate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.dateofEmploymentRange) {
        const [start, end] = filter.dateofEmploymentRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofEmployment: {
              ...where.dateofEmployment,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofEmployment: {
              ...where.dateofEmployment,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.superiorName) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'superiorName',
            filter.superiorName,
          ),
        };
      }

      if (filter.dateofBirthRange) {
        const [start, end] = filter.dateofBirthRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofBirth: {
              ...where.dateofBirth,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofBirth: {
              ...where.dateofBirth,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.ageRange) {
        const [start, end] = filter.ageRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            age: {
              ...where.age,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            age: {
              ...where.age,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.gender) {
        where = {
          ...where,
          gender: filter.gender,
        };
      }

      if (filter.placeofBirth) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'placeofBirth',
            filter.placeofBirth,
          ),
        };
      }

      if (filter.nationality) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'nationality',
            filter.nationality,
          ),
        };
      }

      if (filter.religion) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'religion',
            filter.religion,
          ),
        };
      }

      if (filter.race) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'race',
            filter.race,
          ),
        };
      }

      if (filter.maritalStatus) {
        where = {
          ...where,
          maritalStatus: filter.maritalStatus,
        };
      }

      if (filter.spouseName) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'spouseName',
            filter.spouseName,
          ),
        };
      }

      if (filter.noofchildRange) {
        const [start, end] = filter.noofchildRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            noofchild: {
              ...where.noofchild,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            noofchild: {
              ...where.noofchild,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.bank) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'bank',
            filter.bank,
          ),
        };
      }

      if (filter.bankAccountNoRange) {
        const [start, end] = filter.bankAccountNoRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            bankAccountNo: {
              ...where.bankAccountNo,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            bankAccountNo: {
              ...where.bankAccountNo,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.socsoNoRange) {
        const [start, end] = filter.socsoNoRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            socsoNo: {
              ...where.socsoNo,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            socsoNo: {
              ...where.socsoNo,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.subdivision) {
        where = {
          ...where,
          ['subdivisionId']: SequelizeFilterUtils.uuid(
            filter.subdivision,
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
    } = await models.workerRegistration.findAndCountAll({
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
   * Lists the WorkerRegistrations to populate the autocomplete.
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
              'workerRegistration',
              'workerName',
              query,
            ),
          },
        ],
      };
    }

    const records = await models.workerRegistration.findAll({
      attributes: ['id', 'workerName'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['workerName', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.workerName,
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
        image: data.image,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'workerRegistration',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of WorkerRegistration with relations and files.
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
   * Fill the WorkerRegistration with the relations and files.
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

    output.image = await record.getImage({
      transaction,
    });

    return output;
  }
}

module.exports = WorkerRegistrationRepository;
