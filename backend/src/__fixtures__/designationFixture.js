const genericFixture = require('./genericFixture');
const DesignationRepository = require('../database/repositories/designationRepository');

const designationFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DesignationRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = designationFixture;
