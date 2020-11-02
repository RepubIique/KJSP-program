"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/location`, require('./locationCreate').default);
    app.put(`/tenant/:tenantId/location/:id`, require('./locationUpdate').default);
    app.post(`/tenant/:tenantId/location/import`, require('./locationImport').default);
    app.delete(`/tenant/:tenantId/location`, require('./locationDestroy').default);
    app.get(`/tenant/:tenantId/location/autocomplete`, require('./locationAutocomplete').default);
    app.get(`/tenant/:tenantId/location`, require('./locationList').default);
    app.get(`/tenant/:tenantId/location/:id`, require('./locationFind').default);
};
//# sourceMappingURL=index.js.map