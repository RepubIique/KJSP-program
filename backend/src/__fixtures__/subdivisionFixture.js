const genericFixture = require('./genericFixture');
const SubdivisionRepository = require('../database/repositories/subdivisionRepository');

const subdivisionFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SubdivisionRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = subdivisionFixture;
