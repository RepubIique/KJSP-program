const genericFixture = require('./genericFixture');
const DeductionRepository = require('../database/repositories/deductionRepository');

const deductionFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DeductionRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = deductionFixture;
