const AttendanceRepository = require('../database/repositories/attendanceRepository');
const ValidationError = require('../errors/validationError');
const SequelizeRepository = require('../database/repositories/sequelizeRepository');

/**
 * Handles Attendance operations
 */
module.exports = class AttendanceService {
  constructor({ currentUser, language }) {
    this.repository = new AttendanceRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  /**
   * Creates a Attendance.
   *
   * @param {*} data
   */
  async create(data) {
    const transaction = await SequelizeRepository.createTransaction();

    try {
      const record = await this.repository.create(data, {
        transaction,
        currentUser: this.currentUser,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  /**
   * Updates a Attendance.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction();

    try {
      const record = await this.repository.update(
        id,
        data,
        {
          transaction,
          currentUser: this.currentUser,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  /**
   * Destroy all Attendances with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction();

    try {
      for (const id of ids) {
        await this.repository.destroy(id, {
          transaction,
          currentUser: this.currentUser,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  /**
   * Finds the Attendance by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return this.repository.findById(id);
  }

  /**
   * Finds Attendances for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return this.repository.findAllAutocomplete(
      search,
      limit,
    );
  }

  /**
   * Finds Attendances based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return this.repository.findAndCountAll(args);
  }

  /**
   * Imports a list of Attendances.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  /**
   * Checks if the import hash already exists.
   * Every item imported has a unique hash.
   *
   * @param {*} importHash
   */
  async _isImportHashExistent(importHash) {
    const count = await this.repository.count({
      importHash,
    });

    return count > 0;
  }
};
