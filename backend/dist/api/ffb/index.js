"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/ffb`, require('./ffbCreate').default);
    app.put(`/tenant/:tenantId/ffb/:id`, require('./ffbUpdate').default);
    app.post(`/tenant/:tenantId/ffb/import`, require('./ffbImport').default);
    app.delete(`/tenant/:tenantId/ffb`, require('./ffbDestroy').default);
    app.get(`/tenant/:tenantId/ffb/autocomplete`, require('./ffbAutocomplete').default);
    app.get(`/tenant/:tenantId/ffb`, require('./ffbList').default);
    app.get(`/tenant/:tenantId/ffb/:id`, require('./ffbFind').default);
};
//# sourceMappingURL=index.js.map