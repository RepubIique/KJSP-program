const genericFixture = require('./genericFixture');
const AttendanceRepository = require('../database/repositories/attendanceRepository');

const attendanceFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new AttendanceRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = attendanceFixture;
