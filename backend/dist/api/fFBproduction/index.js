"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/f-f-bproduction`, require('./fFBproductionCreate').default);
    app.put(`/tenant/:tenantId/f-f-bproduction/:id`, require('./fFBproductionUpdate').default);
    app.post(`/tenant/:tenantId/f-f-bproduction/import`, require('./fFBproductionImport').default);
    app.delete(`/tenant/:tenantId/f-f-bproduction`, require('./fFBproductionDestroy').default);
    app.get(`/tenant/:tenantId/f-f-bproduction/autocomplete`, require('./fFBproductionAutocomplete').default);
    app.get(`/tenant/:tenantId/f-f-bproduction`, require('./fFBproductionList').default);
    app.get(`/tenant/:tenantId/f-f-bproduction/:id`, require('./fFBproductionFind').default);
};
//# sourceMappingURL=index.js.map