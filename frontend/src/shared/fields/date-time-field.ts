import * as yup from 'yup';
import moment from 'moment';
import GenericField from '@/shared/fields/generic-field';
import { i18n } from '@/i18n';

export default class DateTimeField extends GenericField {
  required: boolean;

  constructor(
    name,
    label,
    config: {
      required?;
    } = {},
  ) {
    super(name, label);

    this.required = config.required;
  }

  forPresenter(value) {
    return value
      ? moment(value).format('YYYY-MM-DD HH:mm')
      : null;
  }

  forFormInitialValue(value) {
    return value ? moment(value) : null;
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

  forFormCast() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value) => (value ? moment(value) : null));

    return yupChain;
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(this.label)
      .transform((value, originalValue) =>
        originalValue
          ? moment(
              originalValue,
              'YYYY-MM-DD HH:mm',
            ).toISOString()
          : null,
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
