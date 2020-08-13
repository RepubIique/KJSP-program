import { PlantedAreaModel } from '@/modules/planted-area/planted-area-model';

const { fields } = PlantedAreaModel;

export default [
  fields.id,
  fields.location,
  fields.block,
  fields.plantedHa,
  fields.totalPalm,
  fields.createdAt,
  fields.updatedAt
];
