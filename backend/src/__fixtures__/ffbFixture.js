const genericFixture = require('./genericFixture');
const FfbRepository = require('../database/repositories/ffbRepository');

const ffbFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new FfbRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = ffbFixture;
