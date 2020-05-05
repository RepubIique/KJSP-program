const genericFixture = require('./genericFixture');
const WorkerRegistrationRepository = require('../database/repositories/workerRegistrationRepository');

const workerRegistrationFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new WorkerRegistrationRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = workerRegistrationFixture;
