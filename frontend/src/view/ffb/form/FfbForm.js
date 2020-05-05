import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/ffb/ffbModel';
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
import EstateAutocompleteFormItem from 'view/estate/autocomplete/EstateAutocompleteFormItem';
import SubdivisionAutocompleteFormItem from 'view/subdivision/autocomplete/SubdivisionAutocompleteFormItem';
import MillAutocompleteFormItem from 'view/mill/autocomplete/MillAutocompleteFormItem';
import WorkcodeAutocompleteFormItem from 'view/workcode/autocomplete/WorkcodeAutocompleteFormItem';

const { fields } = model;

class FfbForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.date,
    fields.estate,
    fields.subdivision,
    fields.mill,
    fields.fFBTonnageMT,
    fields.month,
    fields.year,
    fields.company,
    fields.millticketNo,
    fields.sealNo,
    fields.deliverynoteno,
    fields.lorryNo,
    fields.block,
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

                <DatePickerFormItem
                  name={fields.date.name}
                  label={fields.date.label}
                  required={fields.date.required}
                />
                <EstateAutocompleteFormItem
                  name={fields.estate.name}
                  label={fields.estate.label}
                  required={fields.estate.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <SubdivisionAutocompleteFormItem
                  name={fields.subdivision.name}
                  label={fields.subdivision.label}
                  required={fields.subdivision.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <MillAutocompleteFormItem
                  name={fields.mill.name}
                  label={fields.mill.label}
                  required={fields.mill.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <InputFormItem
                  name={fields.fFBTonnageMT.name}
                  label={fields.fFBTonnageMT.label}
                  required={fields.fFBTonnageMT.required}
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
                <InputFormItem
                  name={fields.year.name}
                  label={fields.year.label}
                  required={fields.year.required}
                />
                <InputFormItem
                  name={fields.company.name}
                  label={fields.company.label}
                  required={fields.company.required}
                />
                <InputFormItem
                  name={fields.millticketNo.name}
                  label={fields.millticketNo.label}
                  required={fields.millticketNo.required}
                />
                <InputNumberFormItem
                  name={fields.sealNo.name}
                  label={fields.sealNo.label}
                  required={
                    fields.sealNo.required
                  }
                />
                <InputNumberFormItem
                  name={fields.deliverynoteno.name}
                  label={fields.deliverynoteno.label}
                  required={
                    fields.deliverynoteno.required
                  }
                />
                <InputFormItem
                  name={fields.lorryNo.name}
                  label={fields.lorryNo.label}
                  required={fields.lorryNo.required}
                />
                <WorkcodeAutocompleteFormItem
                  name={fields.block.name}
                  label={fields.block.label}
                  required={fields.block.required}
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

export default FfbForm;
