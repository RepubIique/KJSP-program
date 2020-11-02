"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/deduction`, require('./deductionCreate').default);
    app.put(`/tenant/:tenantId/deduction/:id`, require('./deductionUpdate').default);
    app.post(`/tenant/:tenantId/deduction/import`, require('./deductionImport').default);
    app.delete(`/tenant/:tenantId/deduction`, require('./deductionDestroy').default);
    app.get(`/tenant/:tenantId/deduction/autocomplete`, require('./deductionAutocomplete').default);
    app.get(`/tenant/:tenantId/deduction`, require('./deductionList').default);
    app.get(`/tenant/:tenantId/deduction/:id`, require('./deductionFind').default);
};
//# sourceMappingURL=index.js.map