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
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
const auditLogRepository_1 = __importDefault(require("../../database/repositories/auditLogRepository"));
const lodash_1 = __importDefault(require("lodash"));
const sequelizeFilterUtils_1 = __importDefault(require("../../database/utils/sequelizeFilterUtils"));
const Error404_1 = __importDefault(require("../../errors/Error404"));
const sequelize_1 = __importDefault(require("sequelize"));
const fileRepository_1 = __importDefault(require("./fileRepository"));
const Op = sequelize_1.default.Op;
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
    static create(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.workerRegistration.create(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
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
            ])), { tenantId: tenant.id, createdById: currentUser.id, updatedById: currentUser.id }), {
                transaction,
            });
            yield record.setLocation(data.location || null, {
                transaction,
            });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.workerRegistration.getTableName(),
                belongsToColumn: 'image',
                belongsToId: record.id,
            }, data.image, options);
            yield this._createAuditLog(auditLogRepository_1.default.CREATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    /**
     * Updates the WorkerRegistration.
     *
     * @param {Object} data
     * @param {Object} [options]
     */
    static update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.workerRegistration.findByPk(id, {
                transaction,
            });
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            if (!record ||
                String(record.tenantId) !== String(tenant.id)) {
                throw new Error404_1.default();
            }
            record = yield record.update(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
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
            ])), { updatedById: currentUser.id }), {
                transaction,
            });
            yield record.setLocation(data.location || null, {
                transaction,
            });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.workerRegistration.getTableName(),
                belongsToColumn: 'image',
                belongsToId: record.id,
            }, data.image, options);
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    /**
     * Deletes the WorkerRegistration.
     *
     * @param {string} id
     * @param {Object} [options]
     */
    static destroy(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.workerRegistration.findByPk(id, {
                transaction,
            });
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            if (!record ||
                String(record.tenantId) !== String(tenant.id)) {
                throw new Error404_1.default();
            }
            yield record.destroy({
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.DELETE, record, record, options);
        });
    }
    /**
     * Finds the WorkerRegistration and its relations.
     *
     * @param {string} id
     * @param {Object} [options]
     */
    static findById(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const include = [
                {
                    model: options.database.location,
                    as: 'location',
                },
            ];
            const record = yield options.database.workerRegistration.findByPk(id, {
                include,
                transaction,
            });
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            if (!record ||
                String(record.tenantId) !== String(tenant.id)) {
                throw new Error404_1.default();
            }
            return this._fillWithRelationsAndFiles(record, options);
        });
    }
    /**
     * Counts the number of WorkerRegistrations based on the filter.
     *
     * @param {Object} filter
     * @param {Object} [options]
     */
    static count(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            return options.database.workerRegistration.count({
                where: Object.assign(Object.assign({}, filter), { tenantId: tenant.id }),
            }, {
                transaction,
            });
        });
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
    static findAndCountAll({ filter, limit = 0, offset = 0, orderBy = '' }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let where = {
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
                    where = Object.assign(Object.assign({}, where), { ['id']: sequelizeFilterUtils_1.default.uuid(filter.id) });
                }
                if (filter.name) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'name', filter.name) });
                }
                if (filter.designation) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'designation', filter.designation) });
                }
                if (filter.passport) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'passport', filter.passport) });
                }
                if (filter.permitExpiryDateRange) {
                    const [start, end] = filter.permitExpiryDateRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { permitExpiryDate: Object.assign(Object.assign({}, where.permitExpiryDate), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { permitExpiryDate: Object.assign(Object.assign({}, where.permitExpiryDate), { [Op.lte]: end }) });
                    }
                }
                if (filter.dateEmployedRange) {
                    const [start, end] = filter.dateEmployedRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { dateEmployed: Object.assign(Object.assign({}, where.dateEmployed), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { dateEmployed: Object.assign(Object.assign({}, where.dateEmployed), { [Op.lte]: end }) });
                    }
                }
                if (filter.gang) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'gang', filter.gang) });
                }
                if (filter.superiorName) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'superiorName', filter.superiorName) });
                }
                if (filter.dobRange) {
                    const [start, end] = filter.dobRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { dob: Object.assign(Object.assign({}, where.dob), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { dob: Object.assign(Object.assign({}, where.dob), { [Op.lte]: end }) });
                    }
                }
                if (filter.ageRange) {
                    const [start, end] = filter.ageRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { age: Object.assign(Object.assign({}, where.age), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { age: Object.assign(Object.assign({}, where.age), { [Op.lte]: end }) });
                    }
                }
                if (filter.gender) {
                    where = Object.assign(Object.assign({}, where), { gender: filter.gender });
                }
                if (filter.placeOfBirth) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'placeOfBirth', filter.placeOfBirth) });
                }
                if (filter.nationality) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'nationality', filter.nationality) });
                }
                if (filter.religion) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'religion', filter.religion) });
                }
                if (filter.race) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'race', filter.race) });
                }
                if (filter.maritalStatus) {
                    where = Object.assign(Object.assign({}, where), { maritalStatus: filter.maritalStatus });
                }
                if (filter.spouse) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'spouse', filter.spouse) });
                }
                if (filter.childrenRange) {
                    const [start, end] = filter.childrenRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { children: Object.assign(Object.assign({}, where.children), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { children: Object.assign(Object.assign({}, where.children), { [Op.lte]: end }) });
                    }
                }
                if (filter.bank) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'bank', filter.bank) });
                }
                if (filter.bankNo) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'bankNo', filter.bankNo) });
                }
                if (filter.socso) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'socso', filter.socso) });
                }
                if (filter.location) {
                    where = Object.assign(Object.assign({}, where), { ['locationId']: sequelizeFilterUtils_1.default.uuid(filter.location) });
                }
                if (filter.status) {
                    where = Object.assign(Object.assign({}, where), { status: filter.status });
                }
                if (filter.createdAtRange) {
                    const [start, end] = filter.createdAtRange;
                    if (start !== undefined &&
                        start !== null &&
                        start !== '') {
                        where = Object.assign(Object.assign({}, where), { ['createdAt']: Object.assign(Object.assign({}, where.createdAt), { [Op.gte]: start }) });
                    }
                    if (end !== undefined &&
                        end !== null &&
                        end !== '') {
                        where = Object.assign(Object.assign({}, where), { ['createdAt']: Object.assign(Object.assign({}, where.createdAt), { [Op.lte]: end }) });
                    }
                }
            }
            let { rows, count, } = yield options.database.workerRegistration.findAndCountAll({
                where,
                include,
                limit: limit ? Number(limit) : undefined,
                offset: offset ? Number(offset) : undefined,
                order: orderBy
                    ? [orderBy.split('_')]
                    : [['createdAt', 'DESC']],
                transaction: sequelizeRepository_1.default.getTransaction(options),
            });
            rows = yield this._fillWithRelationsAndFilesForRows(rows, options);
            return { rows, count };
        });
    }
    /**
     * Lists the WorkerRegistrations to populate the autocomplete.
     * See https://sequelize.org/v5/manual/querying.html to learn how to
     * customize the query.
     *
     * @param {Object} query
     * @param {number} limit
     */
    static findAllAutocomplete(query, limit, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let where = {
                tenantId: tenant.id,
            };
            if (query) {
                where = Object.assign(Object.assign({}, where), { [Op.or]: [
                        { ['id']: sequelizeFilterUtils_1.default.uuid(query) },
                        {
                            [Op.and]: sequelizeFilterUtils_1.default.ilike('workerRegistration', 'name', query),
                        },
                    ] });
            }
            const records = yield options.database.workerRegistration.findAll({
                attributes: ['id', 'name'],
                where,
                limit: limit ? Number(limit) : undefined,
                orderBy: [['name', 'ASC']],
            });
            return records.map((record) => ({
                id: record.id,
                label: record.name,
            }));
        });
    }
    /**
     * Creates an audit log of the operation.
     *
     * @param {string} action - The action [create, update or delete].
     * @param {object} record - The sequelize record
     * @param {object} data - The new data passed on the request
     * @param {object} options
     */
    static _createAuditLog(action, record, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = {};
            if (data) {
                values = Object.assign(Object.assign({}, record.get({ plain: true })), { image: data.image });
            }
            yield auditLogRepository_1.default.log({
                entityName: 'workerRegistration',
                entityId: record.id,
                action,
                values,
            }, options);
        });
    }
    /**
     * Fills an array of WorkerRegistration with relations and files.
     *
     * @param {Array} rows
     * @param {Object} [options]
     */
    static _fillWithRelationsAndFilesForRows(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!rows) {
                return rows;
            }
            return Promise.all(rows.map((record) => this._fillWithRelationsAndFiles(record, options)));
        });
    }
    /**
     * Fill the WorkerRegistration with the relations and files.
     *
     * @param {Object} record
     * @param {Object} [options]
     */
    static _fillWithRelationsAndFiles(record, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record) {
                return record;
            }
            const output = record.get({ plain: true });
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            output.image = yield fileRepository_1.default.fillDownloadUrl(yield record.getImage({
                transaction,
            }));
            return output;
        });
    }
}
exports.default = WorkerRegistrationRepository;
//# sourceMappingURL=workerRegistrationRepository.js.map