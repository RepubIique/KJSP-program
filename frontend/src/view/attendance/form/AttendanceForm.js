import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/attendance/attendanceModel';
import React, { Component } from 'react';
import FormSchema from 'view/shared/form/formSchema';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  FormButtons,
} from 'view/shared/styles/FormWrapper';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import SubdivisionAutocompleteFormItem from 'view/subdivision/autocomplete/SubdivisionAutocompleteFormItem';
import WeekAutocompleteFormItem from 'view/week/autocomplete/WeekAutocompleteFormItem';
import WorkerRegistrationAutocompleteFormItem from 'view/workerRegistration/autocomplete/WorkerRegistrationAutocompleteFormItem';

const { fields } = model;

class AttendanceForm extends Component {
  schema = new FormSchema(fields.id, [
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
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing, modal } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <SubdivisionAutocompleteFormItem
                  name={fields.subDivision.name}
                  label={fields.subDivision.label}
                  required={fields.subDivision.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <WeekAutocompleteFormItem
                  name={fields.week.name}
                  label={fields.week.label}
                  required={fields.week.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <WorkerRegistrationAutocompleteFormItem
                  name={fields.workerID.name}
                  label={fields.workerID.label}
                  required={fields.workerID.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <InputNumberFormItem
                  name={fields.totalWorkingDay.name}
                  label={fields.totalWorkingDay.label}
                  required={
                    fields.totalWorkingDay.required
                  }
                />
                <InputNumberFormItem
                  name={fields.totalWorkingHours.name}
                  label={fields.totalWorkingHours.label}
                  required={
                    fields.totalWorkingHours.required
                  }
                />
                <InputNumberFormItem
                  name={fields.totalRestDay.name}
                  label={fields.totalRestDay.label}
                  required={
                    fields.totalRestDay.required
                  }
                />
                <InputNumberFormItem
                  name={fields.totalPublicHoliday.name}
                  label={fields.totalPublicHoliday.label}
                  required={
                    fields.totalPublicHoliday.required
                  }
                />
                <InputNumberFormItem
                  name={fields.totalAbsent.name}
                  label={fields.totalAbsent.label}
                  required={
                    fields.totalAbsent.required
                  }
                />
                <InputNumberFormItem
                  name={fields.totalSickLeave.name}
                  label={fields.totalSickLeave.label}
                  required={
                    fields.totalSickLeave.required
                  }
                />
                <InputFormItem
                  name={fields.totalOnLeave.name}
                  label={fields.totalOnLeave.label}
                  required={fields.totalOnLeave.required}
                />
                <InputFormItem
                  name={fields.totalOvertimeHour.name}
                  label={fields.totalOvertimeHour.label}
                  required={fields.totalOvertimeHour.required}
                />
                <SelectFormItem
                  name={fields.month.name}
                  label={fields.month.label}
                  options={fields.month.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.month.required}
                />
                <InputNumberFormItem
                  name={fields.year.name}
                  label={fields.year.label}
                  required={
                    fields.year.required
                  }
                />

                <FormButtons
                  style={{
                    flexDirection: modal
                      ? 'row-reverse'
                      : undefined,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                    startIcon={<SaveIcon />}
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    type="button"
                    startIcon={<UndoIcon />}
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      type="button"
                      startIcon={<CloseIcon />}
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </FormButtons>
              </form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default AttendanceForm;
