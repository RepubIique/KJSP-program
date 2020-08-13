import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

/**
 * Handles database operations for the Attendance.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class AttendanceRepository {
  /**
   * Creates the Attendance.
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

    const record = await options.database.attendance.create(
      {
        ...lodash.pick(data, [
          'date',
          'type',
          'hours',
          'totalHours',
          'overTime',          
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
    await record.setWorker(data.worker || null, {
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
   * Updates the Attendance.
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

    let record = await options.database.attendance.findByPk(
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
          'type',
          'hours',
          'totalHours',
          'overTime',          
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
    await record.setWorker(data.worker || null, {
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
   * Deletes the Attendance.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.attendance.findByPk(
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
   * Finds the Attendance and its relations.
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
      {
        model: options.database.workerRegistration,
        as: 'worker',
      },
    ];

    const record = await options.database.attendance.findByPk(
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
   * Counts the number of Attendances based on the filter.
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

    return options.database.attendance.count(
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
   * Finds the Attendances based on the query.
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
      {
        model: options.database.workerRegistration,
        as: 'worker',
      },      
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: SequelizeFilterUtils.uuid(filter.id),
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

      if (filter.worker) {
        where = {
          ...where,
          ['workerId']: SequelizeFilterUtils.uuid(
            filter.worker,
          ),
        };
      }

      if (filter.type) {
        where = {
          ...where,
          type: filter.type,
        };
      }

      if (filter.hoursRange) {
        const [start, end] = filter.hoursRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            hours: {
              ...where.hours,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            hours: {
              ...where.hours,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalHoursRange) {
        const [start, end] = filter.totalHoursRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalHours: {
              ...where.totalHours,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalHours: {
              ...where.totalHours,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.overTimeRange) {
        const [start, end] = filter.overTimeRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            overTime: {
              ...where.overTime,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            overTime: {
              ...where.overTime,
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
    } = await options.database.attendance.findAndCountAll({
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
   * Lists the Attendances to populate the autocomplete.
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
              'attendance',
              'type',
              query,
            ),
          },
        ],
      };
    }

    const records = await options.database.attendance.findAll(
      {
        attributes: ['id', 'type'],
        where,
        limit: limit ? Number(limit) : undefined,
        orderBy: [['type', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.type,
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
        entityName: 'attendance',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of Attendance with relations and files.
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
   * Fill the Attendance with the relations and files.
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

export default AttendanceRepository;
