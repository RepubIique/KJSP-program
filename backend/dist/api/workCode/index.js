"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/work-code`, require('./workCodeCreate').default);
    app.put(`/tenant/:tenantId/work-code/:id`, require('./workCodeUpdate').default);
    app.post(`/tenant/:tenantId/work-code/import`, require('./workCodeImport').default);
    app.delete(`/tenant/:tenantId/work-code`, require('./workCodeDestroy').default);
    app.get(`/tenant/:tenantId/work-code/autocomplete`, require('./workCodeAutocomplete').default);
    app.get(`/tenant/:tenantId/work-code`, require('./workCodeList').default);
    app.get(`/tenant/:tenantId/work-code/:id`, require('./workCodeFind').default);
};
//# sourceMappingURL=index.js.map