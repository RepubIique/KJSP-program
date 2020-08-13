import * as yup from 'yup';
import GenericField from '@/shared/fields/generic-field';

export default class DateTimeRangeField extends GenericField {
  forFilterInitialValue(value) {
    return value || [];
  }

  forFilterCast() {
    return yup.mixed();
  }
}
