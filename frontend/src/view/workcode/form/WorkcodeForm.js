import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/workcode/workcodeModel';
import React, { Component } from 'react';
import FormSchema from 'view/shared/form/formSchema';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  FormButtons,
} from 'view/shared/styles/FormWrapper';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import UomAutocompleteFormItem from 'view/uom/autocomplete/UomAutocompleteFormItem';

const { fields } = model;

class WorkcodeForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.accCode,
    fields.workCategory,
    fields.typeofWork,
    fields.workDescription,
    fields.rate,
    fields.uom,
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
                  name={fields.accCode.name}
                  label={fields.accCode.label}
                  required={fields.accCode.required}
                  autoFocus
                />
                <InputFormItem
                  name={fields.workCategory.name}
                  label={fields.workCategory.label}
                  required={fields.workCategory.required}
                />
                <InputFormItem
                  name={fields.typeofWork.name}
                  label={fields.typeofWork.label}
                  required={fields.typeofWork.required}
                />
                <InputFormItem
                  name={fields.workDescription.name}
                  label={fields.workDescription.label}
                  required={fields.workDescription.required}
                />
                <InputFormItem
                  name={fields.rate.name}
                  label={fields.rate.label}
                  required={fields.rate.required}
                />
                <UomAutocompleteFormItem
                  name={fields.uom.name}
                  label={fields.uom.label}
                  required={fields.uom.required}
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

export default WorkcodeForm;
