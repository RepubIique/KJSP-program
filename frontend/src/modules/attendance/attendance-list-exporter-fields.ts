import { AttendanceModel } from '@/modules/attendance/attendance-model';

const { fields } = AttendanceModel;

export default [
  fields.id,
  fields.location,
  fields.date,
  fields.worker,
  fields.type,
  fields.hours,
  fields.totalHours,
  fields.overTime,
  fields.createdAt,
  fields.updatedAt
];
