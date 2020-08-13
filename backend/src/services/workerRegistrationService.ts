import WorkerRegistrationRepository from '../database/repositories/workerRegistrationRepository';
import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';

/**
 * Handles WorkerRegistration operations
 */
export default class WorkerRegistrationService {
  options;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a WorkerRegistration.
   *
   * @param {*} data
   */
  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      const record = await WorkerRegistrationRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'workerRegistration',
      );

      throw error;
    }
  }

  /**
   * Updates a WorkerRegistration.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      const record = await WorkerRegistrationRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
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

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'workerRegistration',
      );

      throw error;
    }
  }

  /**
   * Destroy all WorkerRegistrations with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await WorkerRegistrationRepository.destroy(id, {
          ...this.options,
          transaction,
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
   * Finds the WorkerRegistration by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return WorkerRegistrationRepository.findById(id, this.options);
  }

  /**
   * Finds WorkerRegistrations for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return WorkerRegistrationRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds WorkerRegistrations based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return WorkerRegistrationRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  /**
   * Imports a list of WorkerRegistrations.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
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
    const count = await WorkerRegistrationRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
