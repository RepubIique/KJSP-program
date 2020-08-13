import * as yup from 'yup';
import GenericField from '@/shared/fields/generic-field';
import { i18n } from '@/i18n';

export default class RelationToOneField extends GenericField {
  required: boolean;
  min: number | undefined;
  max: number | undefined;
  fetchFn;
  mapperFn;
  viewUrl: string;
  readPermission;

  constructor(
    name,
    label,
    viewUrl,
    readPermission,
    fetchFn,
    mapperFn,
    config: {
      required?;
    } = {},
  ) {
    super(name, label);

    this.required = config.required;
    this.fetchFn = fetchFn;
    this.mapperFn = mapperFn;
    this.viewUrl = viewUrl;
    this.readPermission = readPermission;
  }

  forPresenter(value) {
    return this.mapperFn(value);
  }

  forFormRules() {
    const output: Array<any> = [];

    if (this.required) {
      output.push({
        required: true,
        message: i18n('validation.mixed.required').replace(
          '${path}',
          this.label,
        ),
      });
    }

    return output;
  }

  forFormInitialValue(value) {
    return this.mapperFn(value);
  }

  forFilterInitialValue(value) {
    return this.mapperFn(value);
  }

  forFormCast() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return originalValue.id;
      });

    return yupChain;
  }

  forFilterCast() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return null;
        }

        return originalValue.id;
      });
  }

  forExport() {
    return yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue || !originalValue.id) {
          return null;
        }

        return originalValue.id;
      });
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
