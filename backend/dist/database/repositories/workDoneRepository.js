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
const Op = sequelize_1.default.Op;
/**
 * Handles database operations for the WorkDone.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class WorkDoneRepository {
    /**
     * Creates the WorkDone.
     *
     * @param {Object} data
     * @param {Object} [options]
     */
    static create(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.workDone.create(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'date',
                'block',
                'quantity',
                'remarks',
                'amount',
                'importHash',
            ])), { tenantId: tenant.id, createdById: currentUser.id, updatedById: currentUser.id }), {
                transaction,
            });
            yield record.setLocation(data.location || null, {
                transaction,
            });
            yield record.setWorker(data.worker || null, {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.CREATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    /**
     * Updates the WorkDone.
     *
     * @param {Object} data
     * @param {Object} [options]
     */
    static update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.workDone.findByPk(id, {
                transaction,
            });
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            if (!record ||
                String(record.tenantId) !== String(tenant.id)) {
                throw new Error404_1.default();
            }
            record = yield record.update(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'date',
                'block',
                'quantity',
                'remarks',
                'amount',
                'importHash',
            ])), { updatedById: currentUser.id }), {
                transaction,
            });
            yield record.setLocation(data.location || null, {
                transaction,
            });
            yield record.setWorker(data.worker || null, {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    /**
     * Deletes the WorkDone.
     *
     * @param {string} id
     * @param {Object} [options]
     */
    static destroy(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.workDone.findByPk(id, {
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
     * Finds the WorkDone and its relations.
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
                {
                    model: options.database.workerRegistration,
                    as: 'worker',
                },
            ];
            const record = yield options.database.workDone.findByPk(id, {
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
     * Counts the number of WorkDones based on the filter.
     *
     * @param {Object} filter
     * @param {Object} [options]
     */
    static count(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            return options.database.workDone.count({
                where: Object.assign(Object.assign({}, filter), { tenantId: tenant.id }),
            }, {
                transaction,
            });
        });
    }
    /**
     * Finds the WorkDones based on the query.
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
                {
                    model: options.database.workerRegistration,
                    as: 'worker',
                },
            ];
            if (filter) {
                if (filter.id) {
                    where = Object.assign(Object.assign({}, where), { ['id']: sequelizeFilterUtils_1.default.uuid(filter.id) });
                }
                if (filter.location) {
                    where = Object.assign(Object.assign({}, where), { ['locationId']: sequelizeFilterUtils_1.default.uuid(filter.location) });
                }
                if (filter.dateRange) {
                    const [start, end] = filter.dateRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { date: Object.assign(Object.assign({}, where.date), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { date: Object.assign(Object.assign({}, where.date), { [Op.lte]: end }) });
                    }
                }
                if (filter.worker) {
                    where = Object.assign(Object.assign({}, where), { ['workerId']: sequelizeFilterUtils_1.default.uuid(filter.worker) });
                }
                if (filter.blockRange) {
                    const [start, end] = filter.blockRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { block: Object.assign(Object.assign({}, where.block), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { block: Object.assign(Object.assign({}, where.block), { [Op.lte]: end }) });
                    }
                }
                if (filter.quantityRange) {
                    const [start, end] = filter.quantityRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { quantity: Object.assign(Object.assign({}, where.quantity), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { quantity: Object.assign(Object.assign({}, where.quantity), { [Op.lte]: end }) });
                    }
                }
                if (filter.remarks) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('workDone', 'remarks', filter.remarks) });
                }
                if (filter.amountRange) {
                    const [start, end] = filter.amountRange;
                    if (start !== undefined && start !== null && start !== '') {
                        where = Object.assign(Object.assign({}, where), { amount: Object.assign(Object.assign({}, where.amount), { [Op.gte]: start }) });
                    }
                    if (end !== undefined && end !== null && end !== '') {
                        where = Object.assign(Object.assign({}, where), { amount: Object.assign(Object.assign({}, where.amount), { [Op.lte]: end }) });
                    }
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
            let { rows, count, } = yield options.database.workDone.findAndCountAll({
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
     * Lists the WorkDones to populate the autocomplete.
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
                    ] });
            }
            const records = yield options.database.workDone.findAll({
                attributes: ['id', 'id'],
                where,
                limit: limit ? Number(limit) : undefined,
                orderBy: [['id', 'ASC']],
            });
            return records.map((record) => ({
                id: record.id,
                label: record.id,
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
                values = Object.assign({}, record.get({ plain: true }));
            }
            yield auditLogRepository_1.default.log({
                entityName: 'workDone',
                entityId: record.id,
                action,
                values,
            }, options);
        });
    }
    /**
     * Fills an array of WorkDone with relations and files.
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
     * Fill the WorkDone with the relations and files.
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
            return output;
        });
    }
}
exports.default = WorkDoneRepository;
//# sourceMappingURL=workDoneRepository.js.map