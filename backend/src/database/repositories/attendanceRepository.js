const models = require('../models');
const SequelizeRepository = require('./sequelizeRepository');
const AuditLogRepository = require('./auditLogRepository');
const FileRepository = require('./fileRepository');
const lodash = require('lodash');
const SequelizeFilterUtils = require('../utils/sequelizeFilterUtils');

const Sequelize = models.Sequelize;
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
  async create(data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await models.attendance.create(
      {
        ...lodash.pick(data, [
          'id',
          'totalWorkingDay',
          'totalWorkingHours',
          'totalRestDay',
          'totalPublicHoliday',
          'totalAbsent',
          'totalSickLeave',
          'totalOnLeave',
          'totalOvertimeHour',
          'month',
          'year',
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

    await record.setSubDivision(data.subDivision || null, {
      transaction,
    });
    await record.setWeek(data.week || null, {
      transaction,
    });
    await record.setWorkerID(data.workerID || null, {
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
  async update(id, data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.attendance.findByPk(id, {
      transaction,
    });

    record = await record.update(
      {
        ...lodash.pick(data, [
          'id',
          'totalWorkingDay',
          'totalWorkingHours',
          'totalRestDay',
          'totalPublicHoliday',
          'totalAbsent',
          'totalSickLeave',
          'totalOnLeave',
          'totalOvertimeHour',
          'month',
          'year',
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


    await record.setSubDivision(data.subDivision || null, {
      transaction,
    });
    await record.setWeek(data.week || null, {
      transaction,
    });
    await record.setWorkerID(data.workerID || null, {
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
  async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await models.attendance.findByPk(id, {
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
   * Finds the Attendance and its relations.
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
        model: models.subdivision,
        as: 'subDivision',
      },
      {
        model: models.week,
        as: 'week',
      },
      {
        model: models.workerRegistration,
        as: 'workerID',
      },
    ];

    const record = await models.attendance.findByPk(id, {
      include,
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of Attendances based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    return models.attendance.count(
      {
        where: filter,
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
        model: models.subdivision,
        as: 'subDivision',
      },
      {
        model: models.week,
        as: 'week',
      },
      {
        model: models.workerRegistration,
        as: 'workerID',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        };
      }

      if (filter.subDivision) {
        where = {
          ...where,
          ['subDivisionId']: SequelizeFilterUtils.uuid(
            filter.subDivision,
          ),
        };
      }

      if (filter.week) {
        where = {
          ...where,
          ['weekId']: SequelizeFilterUtils.uuid(
            filter.week,
          ),
        };
      }

      if (filter.workerID) {
        where = {
          ...where,
          ['workerIDId']: SequelizeFilterUtils.uuid(
            filter.workerID,
          ),
        };
      }

      if (filter.totalWorkingDayRange) {
        const [start, end] = filter.totalWorkingDayRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalWorkingDay: {
              ...where.totalWorkingDay,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalWorkingDay: {
              ...where.totalWorkingDay,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalWorkingHoursRange) {
        const [start, end] = filter.totalWorkingHoursRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalWorkingHours: {
              ...where.totalWorkingHours,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalWorkingHours: {
              ...where.totalWorkingHours,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalRestDayRange) {
        const [start, end] = filter.totalRestDayRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalRestDay: {
              ...where.totalRestDay,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalRestDay: {
              ...where.totalRestDay,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalPublicHolidayRange) {
        const [start, end] = filter.totalPublicHolidayRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalPublicHoliday: {
              ...where.totalPublicHoliday,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalPublicHoliday: {
              ...where.totalPublicHoliday,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalAbsentRange) {
        const [start, end] = filter.totalAbsentRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalAbsent: {
              ...where.totalAbsent,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalAbsent: {
              ...where.totalAbsent,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalSickLeaveRange) {
        const [start, end] = filter.totalSickLeaveRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalSickLeave: {
              ...where.totalSickLeave,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalSickLeave: {
              ...where.totalSickLeave,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalOnLeaveRange) {
        const [start, end] = filter.totalOnLeaveRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalOnLeave: {
              ...where.totalOnLeave,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalOnLeave: {
              ...where.totalOnLeave,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalOvertimeHourRange) {
        const [start, end] = filter.totalOvertimeHourRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalOvertimeHour: {
              ...where.totalOvertimeHour,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalOvertimeHour: {
              ...where.totalOvertimeHour,
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

      if (filter.yearRange) {
        const [start, end] = filter.yearRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            year: {
              ...where.year,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            year: {
              ...where.year,
              [Op.lte]: end,
            },
          };
        }
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
    } = await models.attendance.findAndCountAll({
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

    const records = await models.attendance.findAll({
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
   * Fill the Attendance with the relations and files.
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

module.exports = AttendanceRepository;
