const genericFixture = require('./genericFixture');
const WeekRepository = require('../database/repositories/weekRepository');

const weekFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new WeekRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = weekFixture;
