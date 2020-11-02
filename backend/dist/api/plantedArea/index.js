"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/planted-area`, require('./plantedAreaCreate').default);
    app.put(`/tenant/:tenantId/planted-area/:id`, require('./plantedAreaUpdate').default);
    app.post(`/tenant/:tenantId/planted-area/import`, require('./plantedAreaImport').default);
    app.delete(`/tenant/:tenantId/planted-area`, require('./plantedAreaDestroy').default);
    app.get(`/tenant/:tenantId/planted-area/autocomplete`, require('./plantedAreaAutocomplete').default);
    app.get(`/tenant/:tenantId/planted-area`, require('./plantedAreaList').default);
    app.get(`/tenant/:tenantId/planted-area/:id`, require('./plantedAreaFind').default);
};
//# sourceMappingURL=index.js.map