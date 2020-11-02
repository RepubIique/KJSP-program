"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/worker-registration`, require('./workerRegistrationCreate').default);
    app.put(`/tenant/:tenantId/worker-registration/:id`, require('./workerRegistrationUpdate').default);
    app.post(`/tenant/:tenantId/worker-registration/import`, require('./workerRegistrationImport').default);
    app.delete(`/tenant/:tenantId/worker-registration`, require('./workerRegistrationDestroy').default);
    app.get(`/tenant/:tenantId/worker-registration/autocomplete`, require('./workerRegistrationAutocomplete').default);
    app.get(`/tenant/:tenantId/worker-registration`, require('./workerRegistrationList').default);
    app.get(`/tenant/:tenantId/worker-registration/:id`, require('./workerRegistrationFind').default);
};
//# sourceMappingURL=index.js.map