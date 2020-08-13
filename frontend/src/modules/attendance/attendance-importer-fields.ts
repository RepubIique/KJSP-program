import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;

export default [
  fields.location,
  fields.date,
  fields.worker,
  fields.type,
  fields.hours,
  fields.totalHours,
  fields.overTime,
];
