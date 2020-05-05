import model from 'modules/attendance/attendanceModel';

const { fields } = model;

export default [
  fields.id,
  fields.subDivision,
  fields.week,
  fields.workerID,
  fields.totalWorkingDay,
  fields.totalWorkingHours,
  fields.totalRestDay,
  fields.totalPublicHoliday,
  fields.totalAbsent,
  fields.totalSickLeave,
  fields.totalOnLeave,
  fields.totalOvertimeHour,
  fields.month,
  fields.year,
  fields.createdAt,
  fields.updatedAt
];
