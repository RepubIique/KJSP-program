"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/work-done`, require('./workDoneCreate').default);
    app.put(`/tenant/:tenantId/work-done/:id`, require('./workDoneUpdate').default);
    app.post(`/tenant/:tenantId/work-done/import`, require('./workDoneImport').default);
    app.delete(`/tenant/:tenantId/work-done`, require('./workDoneDestroy').default);
    app.get(`/tenant/:tenantId/work-done/autocomplete`, require('./workDoneAutocomplete').default);
    app.get(`/tenant/:tenantId/work-done`, require('./workDoneList').default);
    app.get(`/tenant/:tenantId/work-done/:id`, require('./workDoneFind').default);
};
//# sourceMappingURL=index.js.map