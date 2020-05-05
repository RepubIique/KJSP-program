const genericFixture = require('./genericFixture');
const BlocksRepository = require('../database/repositories/blocksRepository');

const blocksFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new BlocksRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = blocksFixture;
