"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const locationRepository_1 = __importDefault(require("../database/repositories/locationRepository"));
const Error400_1 = __importDefault(require("../errors/Error400"));
const sequelizeRepository_1 = __importDefault(require("../database/repositories/sequelizeRepository"));
/**
 * Handles Location operations
 */
class LocationService {
    constructor(options) {
        this.options = options;
    }
    /**
     * Creates a Location.
     *
     * @param {*} data
     */
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
            try {
                const record = yield locationRepository_1.default.create(data, Object.assign(Object.assign({}, this.options), { transaction }));
                yield sequelizeRepository_1.default.commitTransaction(transaction);
                return record;
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                sequelizeRepository_1.default.handleUniqueFieldError(error, this.options.language, 'location');
                throw error;
            }
        });
    }
    /**
     * Updates a Location.
     *
     * @param {*} id
     * @param {*} data
     */
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
            try {
                const record = yield locationRepository_1.default.update(id, data, Object.assign(Object.assign({}, this.options), { transaction }));
                yield sequelizeRepository_1.default.commitTransaction(transaction);
                return record;
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                sequelizeRepository_1.default.handleUniqueFieldError(error, this.options.language, 'location');
                throw error;
            }
        });
    }
    /**
     * Destroy all Locations with those ids.
     *
     * @param {*} ids
     */
    destroyAll(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield sequelizeRepository_1.default.createTransaction(this.options.database);
            try {
                for (const id of ids) {
                    yield locationRepository_1.default.destroy(id, Object.assign(Object.assign({}, this.options), { transaction }));
                }
                yield sequelizeRepository_1.default.commitTransaction(transaction);
            }
            catch (error) {
                yield sequelizeRepository_1.default.rollbackTransaction(transaction);
                throw error;
            }
        });
    }
    /**
     * Finds the Location by Id.
     *
     * @param {*} id
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return locationRepository_1.default.findById(id, this.options);
        });
    }
    /**
     * Finds Locations for Autocomplete.
     *
     * @param {*} search
     * @param {*} limit
     */
    findAllAutocomplete(search, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return locationRepository_1.default.findAllAutocomplete(search, limit, this.options);
        });
    }
    /**
     * Finds Locations based on the query.
     *
     * @param {*} args
     */
    findAndCountAll(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return locationRepository_1.default.findAndCountAll(args, this.options);
        });
    }
    /**
     * Imports a list of Locations.
     *
     * @param {*} data
     * @param {*} importHash
     */
    import(data, importHash) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!importHash) {
                throw new Error400_1.default(this.options.language, 'importer.errors.importHashRequired');
            }
            if (yield this._isImportHashExistent(importHash)) {
                throw new Error400_1.default(this.options.language, 'importer.errors.importHashExistent');
            }
            const dataToCreate = Object.assign(Object.assign({}, data), { importHash });
            return this.create(dataToCreate);
        });
    }
    /**
     * Checks if the import hash already exists.
     * Every item imported has a unique hash.
     *
     * @param {*} importHash
     */
    _isImportHashExistent(importHash) {
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield locationRepository_1.default.count({
                importHash,
            }, this.options);
            return count > 0;
        });
    }
}
exports.default = LocationService;
//# sourceMappingURL=locationService.js.map