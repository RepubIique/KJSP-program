import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import FileRepository from './fileRepository';

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

    const record = await options.database.workerRegistration.create(
      {
        ...lodash.pick(data, [
          'name',
          'designation',
          'passport',
          'permitExpiryDate',
          'dateEmployed',
          'gang',
          'superiorName',
          'dob',
          'age',
          'gender',
          'placeOfBirth',
          'nationality',
          'religion',
          'race',
          'maritalStatus',
          'spouse',
          'children',
          'bank',
          'bankNo',
          'socso',
          'status',          
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
  
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.workerRegistration.getTableName(),
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
  static async update(id, data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.workerRegistration.findByPk(
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
          'name',
          'designation',
          'passport',
          'permitExpiryDate',
          'dateEmployed',
          'gang',
          'superiorName',
          'dob',
          'age',
          'gender',
          'placeOfBirth',
          'nationality',
          'religion',
          'race',
          'maritalStatus',
          'spouse',
          'children',
          'bank',
          'bankNo',
          'socso',
          'status',          
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

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.workerRegistration.getTableName(),
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
  static async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.workerRegistration.findByPk(
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
   * Finds the WorkerRegistration and its relations.
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

    const record = await options.database.workerRegistration.findByPk(
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
   * Counts the number of WorkerRegistrations based on the filter.
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

    return options.database.workerRegistration.count(
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

      if (filter.name) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'name',
            filter.name,
          ),
        };
      }

      if (filter.designation) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'designation',
            filter.designation,
          ),
        };
      }

      if (filter.passport) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'passport',
            filter.passport,
          ),
        };
      }

      if (filter.permitExpiryDateRange) {
        const [start, end] = filter.permitExpiryDateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            permitExpiryDate: {
              ...where.permitExpiryDate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            permitExpiryDate: {
              ...where.permitExpiryDate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.dateEmployedRange) {
        const [start, end] = filter.dateEmployedRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateEmployed: {
              ...where.dateEmployed,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateEmployed: {
              ...where.dateEmployed,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.gang) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'gang',
            filter.gang,
          ),
        };
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

      if (filter.dobRange) {
        const [start, end] = filter.dobRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dob: {
              ...where.dob,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dob: {
              ...where.dob,
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

      if (filter.placeOfBirth) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'placeOfBirth',
            filter.placeOfBirth,
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

      if (filter.spouse) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'spouse',
            filter.spouse,
          ),
        };
      }

      if (filter.childrenRange) {
        const [start, end] = filter.childrenRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            children: {
              ...where.children,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            children: {
              ...where.children,
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

      if (filter.bankNo) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'bankNo',
            filter.bankNo,
          ),
        };
      }

      if (filter.socso) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'workerRegistration',
            'socso',
            filter.socso,
          ),
        };
      }

      if (filter.location) {
        where = {
          ...where,
          ['locationId']: SequelizeFilterUtils.uuid(
            filter.location,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          status: filter.status,
        };
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
    } = await options.database.workerRegistration.findAndCountAll({
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
              'workerRegistration',
              'name',
              query,
            ),
          },
        ],
      };
    }

    const records = await options.database.workerRegistration.findAll(
      {
        attributes: ['id', 'name'],
        where,
        limit: limit ? Number(limit) : undefined,
        orderBy: [['name', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.name,
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
   * Fill the WorkerRegistration with the relations and files.
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

    output.image = await FileRepository.fillDownloadUrl(
      await record.getImage({
        transaction,
      }),
    );

    return output;
  }
}

export default WorkerRegistrationRepository;
