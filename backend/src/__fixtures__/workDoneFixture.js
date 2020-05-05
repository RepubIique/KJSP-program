const genericFixture = require('./genericFixture');
const WorkDoneRepository = require('../database/repositories/workDoneRepository');

const workDoneFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new WorkDoneRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = workDoneFixture;
