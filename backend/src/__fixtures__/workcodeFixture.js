const genericFixture = require('./genericFixture');
const WorkcodeRepository = require('../database/repositories/workcodeRepository');

const workcodeFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new WorkcodeRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = workcodeFixture;
