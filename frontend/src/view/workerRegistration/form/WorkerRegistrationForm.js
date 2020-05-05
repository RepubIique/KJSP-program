import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/workerRegistration/workerRegistrationModel';
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
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import DesignationAutocompleteFormItem from 'view/designation/autocomplete/DesignationAutocompleteFormItem';
import SubdivisionAutocompleteFormItem from 'view/subdivision/autocomplete/SubdivisionAutocompleteFormItem';

const { fields } = model;

class WorkerRegistrationForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.workerID,
    fields.workerName,
    fields.designation,
    fields.passportICNo,
    fields.passportExpireddate,
    fields.dateofEmployment,
    fields.superiorName,
    fields.dateofBirth,
    fields.age,
    fields.gender,
    fields.placeofBirth,
    fields.nationality,
    fields.religion,
    fields.race,
    fields.maritalStatus,
    fields.spouseName,
    fields.noofchild,
    fields.bank,
    fields.bankAccountNo,
    fields.socsoNo,
    fields.subdivision,
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

                <InputFormItem
                  name={fields.workerID.name}
                  label={fields.workerID.label}
                  required={fields.workerID.required}
                  autoFocus
                />
                <InputFormItem
                  name={fields.workerName.name}
                  label={fields.workerName.label}
                  required={fields.workerName.required}
                />
                <DesignationAutocompleteFormItem
                  name={fields.designation.name}
                  label={fields.designation.label}
                  required={fields.designation.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <InputFormItem
                  name={fields.passportICNo.name}
                  label={fields.passportICNo.label}
                  required={fields.passportICNo.required}
                />
                <DatePickerFormItem
                  name={fields.passportExpireddate.name}
                  label={fields.passportExpireddate.label}
                  required={fields.passportExpireddate.required}
                />
                <DatePickerFormItem
                  name={fields.dateofEmployment.name}
                  label={fields.dateofEmployment.label}
                  required={fields.dateofEmployment.required}
                />
                <InputFormItem
                  name={fields.superiorName.name}
                  label={fields.superiorName.label}
                  required={fields.superiorName.required}
                />
                <DatePickerFormItem
                  name={fields.dateofBirth.name}
                  label={fields.dateofBirth.label}
                  required={fields.dateofBirth.required}
                />
                <InputNumberFormItem
                  name={fields.age.name}
                  label={fields.age.label}
                  required={
                    fields.age.required
                  }
                />
                <SelectFormItem
                  name={fields.gender.name}
                  label={fields.gender.label}
                  options={fields.gender.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.gender.required}
                />
                <InputFormItem
                  name={fields.placeofBirth.name}
                  label={fields.placeofBirth.label}
                  required={fields.placeofBirth.required}
                />
                <InputFormItem
                  name={fields.nationality.name}
                  label={fields.nationality.label}
                  required={fields.nationality.required}
                />
                <InputFormItem
                  name={fields.religion.name}
                  label={fields.religion.label}
                  required={fields.religion.required}
                />
                <InputFormItem
                  name={fields.race.name}
                  label={fields.race.label}
                  required={fields.race.required}
                />
                <SelectFormItem
                  name={fields.maritalStatus.name}
                  label={fields.maritalStatus.label}
                  options={fields.maritalStatus.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.maritalStatus.required}
                />
                <InputFormItem
                  name={fields.spouseName.name}
                  label={fields.spouseName.label}
                  required={fields.spouseName.required}
                />
                <InputNumberFormItem
                  name={fields.noofchild.name}
                  label={fields.noofchild.label}
                  required={
                    fields.noofchild.required
                  }
                />
                <InputFormItem
                  name={fields.bank.name}
                  label={fields.bank.label}
                  required={fields.bank.required}
                />
                <InputNumberFormItem
                  name={fields.bankAccountNo.name}
                  label={fields.bankAccountNo.label}
                  required={
                    fields.bankAccountNo.required
                  }
                />
                <InputNumberFormItem
                  name={fields.socsoNo.name}
                  label={fields.socsoNo.label}
                  required={
                    fields.socsoNo.required
                  }
                />
                <SubdivisionAutocompleteFormItem
                  name={fields.subdivision.name}
                  label={fields.subdivision.label}
                  required={fields.subdivision.required}
                  showCreate={!this.props.modal}
                  form={form}
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

export default WorkerRegistrationForm;
