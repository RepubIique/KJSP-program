const genericFixture = require('./genericFixture');
const UomRepository = require('../database/repositories/uomRepository');

const uomFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new UomRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = uomFixture;
