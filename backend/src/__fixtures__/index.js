const userFixture = require('./userFixture');
const workerRegistrationFixture = require('./workerRegistrationFixture');
const attendanceFixture = require('./attendanceFixture');
const deductionFixture = require('./deductionFixture');
const workDoneFixture = require('./workDoneFixture');
const ffbFixture = require('./ffbFixture');
const checkrollFixture = require('./checkrollFixture');
const subdivisionFixture = require('./subdivisionFixture');
const workcodeFixture = require('./workcodeFixture');
const weekFixture = require('./weekFixture');
const estateFixture = require('./estateFixture');
const millFixture = require('./millFixture');
const designationFixture = require('./designationFixture');
const blocksFixture = require('./blocksFixture');
const uomFixture = require('./uomFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  workerRegistration: workerRegistrationFixture,
  attendance: attendanceFixture,
  deduction: deductionFixture,
  workDone: workDoneFixture,
  ffb: ffbFixture,
  checkroll: checkrollFixture,
  subdivision: subdivisionFixture,
  workcode: workcodeFixture,
  week: weekFixture,
  estate: estateFixture,
  mill: millFixture,
  designation: designationFixture,
  blocks: blocksFixture,
  uom: uomFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
