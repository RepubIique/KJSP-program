const genericFixture = require('./genericFixture');
const CheckrollRepository = require('../database/repositories/checkrollRepository');

const checkrollFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CheckrollRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = checkrollFixture;
