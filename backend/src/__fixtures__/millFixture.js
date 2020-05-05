const genericFixture = require('./genericFixture');
const MillRepository = require('../database/repositories/millRepository');

const millFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new MillRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = millFixture;
