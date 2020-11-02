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
const auditLogRepository_1 = __importDefault(require("./auditLogRepository"));
const lodash_1 = __importDefault(require("lodash"));
const sequelizeFilterUtils_1 = __importDefault(require("../../database/utils/sequelizeFilterUtils"));
const Error404_1 = __importDefault(require("../../errors/Error404"));
const sequelize_1 = __importDefault(require("sequelize"));
const Error400_1 = __importDefault(require("../../errors/Error400"));
const uuid_1 = require("uuid");
const userTenantUtils_1 = require("../utils/userTenantUtils");
const Op = sequelize_1.default.Op;
const forbiddenTenantUrls = ['www'];
/**
 * Handles database operations for the Tenant.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class TenantRepository {
    /**
     * Creates the Tenant.
     *
     * @param {Object} data
     * @param {Object} [options]
     */
    static create(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            // URL is required,
            // in case of multi tenant without subdomain
            // set a random uuid
            data.url = data.url || uuid_1.v4();
            const existsUrl = Boolean(yield options.database.tenant.count({
                where: { url: data.url },
                transaction,
            }));
            if (forbiddenTenantUrls.includes(data.url) ||
                existsUrl) {
                throw new Error400_1.default(options.language, 'tenant.url.exists');
            }
            const record = yield options.database.tenant.create(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'id',
                'name',
                'url',
                'importHash',
            ])), { createdById: currentUser.id, updatedById: currentUser.id }), {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.CREATE, record, data, Object.assign(Object.assign({}, options), { currentTenant: record }));
            return this.findById(record.id, Object.assign({}, options));
        });
    }
    /**
     * Updates the Tenant.
     *
     * @param {Object} data
     * @param {Object} [options]
     */
    static update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.tenant.findByPk(id, {
                transaction,
            });
            if (!userTenantUtils_1.isUserInTenant(currentUser, record)) {
                throw new Error404_1.default();
            }
            // When not multi-with-subdomain, the
            // from passes the URL as undefined.
            // This way it's ensured that the URL will
            // remain the old one
            data.url = data.url || record.url;
            const existsUrl = Boolean(yield options.database.tenant.count({
                where: {
                    url: data.url,
                    id: { [Op.ne]: id },
                },
                transaction,
            }));
            if (forbiddenTenantUrls.includes(data.url) ||
                existsUrl) {
                throw new Error400_1.default(options.language, 'tenant.url.exists');
            }
            record = yield record.update(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'id',
                'name',
                'url',
                'importHash',
            ])), { updatedById: currentUser.id }), {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    /**
     * Updates the Tenant Plan User.
     */
    static updatePlanUser(id, planStripeCustomerId, planUserId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.tenant.findByPk(id, {
                transaction,
            });
            const data = {
                planStripeCustomerId,
                planUserId,
                updatedById: currentUser.id,
            };
            record = yield record.update(data, {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    /**
   * Updates the Tenant Plan User.
   */
    static updatePlanStatus(planStripeCustomerId, plan, planStatus, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            let record = yield options.database.tenant.findOne({
                where: {
                    planStripeCustomerId
                },
                transaction,
            });
            const data = {
                plan,
                planStatus,
                updatedById: null,
            };
            record = yield record.update(data, {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    /**
     * Deletes the Tenant.
     *
     * @param {string} id
     * @param {Object} [options]
     */
    static destroy(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            let record = yield options.database.tenant.findByPk(id, {
                transaction,
            });
            if (!userTenantUtils_1.isUserInTenant(currentUser, record)) {
                throw new Error404_1.default();
            }
            yield record.destroy({
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.DELETE, record, record, options);
        });
    }
    /**
     * Finds the Tenant and its relations.
     *
     * @param {string} id
     * @param {Object} [options]
     */
    static findById(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const include = ['settings'];
            const record = yield options.database.tenant.findByPk(id, {
                include,
                transaction,
            });
            return record;
        });
    }
    /**
     * Finds the Tenant and its relations by url.
     *
     * @param {string} url
     * @param {Object} [options]
     */
    static findByUrl(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const include = ['settings'];
            const record = yield options.database.tenant.findOne({
                where: { url },
                include,
                transaction,
            });
            return record;
        });
    }
    /**
     * Counts the number of Tenants based on the filter.
     *
     * @param {Object} filter
     * @param {Object} [options]
     */
    static count(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            return options.database.tenant.count({
                where: filter,
            }, {
                transaction,
            });
        });
    }
    /**
     * Finds the first/default tenant.
     */
    static findDefault(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return options.database.tenant.findOne({
                transaction: sequelizeRepository_1.default.getTransaction(options),
            });
        });
    }
    /**
     * Finds the Tenants based on the query.
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
            let where = {};
            let include = [];
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            // Fetch only tenant that the current user has access
            where = Object.assign(Object.assign({}, where), { id: {
                    [Op.in]: currentUser.tenants.map((tenantUser) => tenantUser.tenant.id),
                } });
            if (filter) {
                if (filter.id) {
                    where = Object.assign(Object.assign({}, where), { ['id']: filter.id });
                }
                if (filter.name) {
                    where = Object.assign(Object.assign({}, where), { [Op.and]: sequelizeFilterUtils_1.default.ilike('tenant', 'name', filter.name) });
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
            let { rows, count, } = yield options.database.tenant.findAndCountAll({
                where,
                include,
                limit: limit ? Number(limit) : undefined,
                offset: offset ? Number(offset) : undefined,
                order: orderBy
                    ? [orderBy.split('_')]
                    : [['name', 'ASC']],
                transaction: sequelizeRepository_1.default.getTransaction(options),
            });
            return { rows, count };
        });
    }
    /**
     * Lists the Tenants to populate the autocomplete.
     * See https://sequelize.org/v5/manual/querying.html to learn how to
     * customize the query.
     *
     * @param {Object} query
     * @param {number} limit
     * @param {Object} options
     */
    static findAllAutocomplete(query, limit, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let where = {};
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            // Fetch only tenant that the current user has access
            where = Object.assign(Object.assign({}, where), { id: {
                    [Op.in]: currentUser.tenants.map((tenantUser) => tenantUser.tenant.id),
                } });
            if (query) {
                where = {
                    [Op.or]: [
                        { ['id']: query.id },
                        {
                            [Op.and]: sequelizeFilterUtils_1.default.ilike('tenant', 'name', query.name),
                        },
                    ],
                };
            }
            const records = yield options.database.tenant.findAll({
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
                values = Object.assign({}, record.get({ plain: true }));
            }
            yield auditLogRepository_1.default.log({
                entityName: 'tenant',
                entityId: record.id,
                action,
                values,
            }, options);
        });
    }
}
exports.default = TenantRepository;
//# sourceMappingURL=tenantRepository.js.map