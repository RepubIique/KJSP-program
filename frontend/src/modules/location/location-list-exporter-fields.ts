import { LocationModel } from '@/modules/location/location-model';

const { fields } = LocationModel;

export default [
  fields.id,
  fields.location,
  fields.createdAt,
  fields.updatedAt
];
