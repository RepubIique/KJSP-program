const genericFixture = require('./genericFixture');
const EstateRepository = require('../database/repositories/estateRepository');

const estateFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new EstateRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = estateFixture;
