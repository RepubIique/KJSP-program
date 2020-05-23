import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/workerRegistration/list/workerRegistrationListActions';
import selectors from 'modules/workerRegistration/list/workerRegistrationListSelectors';
import model from 'modules/workerRegistration/workerRegistrationModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import FilterWrapper, {
  FilterButtons,
} from 'view/shared/styles/FilterWrapper';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import { Button, Grid } from '@material-ui/core';
import InputNumberRangeFormItem from 'view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import DesignationAutocompleteFormItem from 'view/designation/autocomplete/DesignationAutocompleteFormItem';
import SubdivisionAutocompleteFormItem from 'view/subdivision/autocomplete/SubdivisionAutocompleteFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.workerID,
  fields.workerName,
  fields.designation,
  fields.passportICNo,
  fields.passportExpireddateRange,
  fields.dateofEmploymentRange,
  fields.superiorName,
  fields.dateofBirthRange,
  fields.ageRange,
  fields.gender,
  fields.placeofBirth,
  fields.nationality,
  fields.religion,
  fields.race,
  fields.maritalStatus,
  fields.spouseName,
  fields.noofchildRange,
  fields.bank,
  fields.bankAccountNoRange,
  fields.socsoNoRange,
  fields.subdivision,
]);

class WorkerRegistrationListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <Grid container spacing={2}>
                  {/* <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.workerID.name}
                      label={fields.workerID.label}
                    />
                  </Grid> */}
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.workerName.name}
                      label={fields.workerName.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <DesignationAutocompleteFormItem
                      name={fields.designation.name}
                      label={fields.designation.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.passportICNo.name}
                      label={fields.passportICNo.label}
                    />
                  </Grid>
                  {/* <Grid item lg={6} xs={12}>
                    <DatePickerRangeFormItem
                      name={fields.passportExpireddateRange.name}
                      label={fields.passportExpireddateRange.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <DatePickerRangeFormItem
                      name={fields.dateofEmploymentRange.name}
                      label={fields.dateofEmploymentRange.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.superiorName.name}
                      label={fields.superiorName.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <DatePickerRangeFormItem
                      name={fields.dateofBirthRange.name}
                      label={fields.dateofBirthRange.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.ageRange.name
                      }
                      label={
                        fields.ageRange.label
                      }
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <SelectFormItem
                      name={fields.gender.name}
                      label={fields.gender.label}
                      options={fields.gender.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.placeofBirth.name}
                      label={fields.placeofBirth.label}
                    />
                  </Grid> */}
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.nationality.name}
                      label={fields.nationality.label}
                    />
                  </Grid>
                  {/* <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.religion.name}
                      label={fields.religion.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.race.name}
                      label={fields.race.label}
                    />
                  </Grid> */}
                  <Grid item lg={6} xs={12}>
                    <SelectFormItem
                      name={fields.maritalStatus.name}
                      label={fields.maritalStatus.label}
                      options={fields.maritalStatus.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                    />
                  </Grid>
                  {/* <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.spouseName.name}
                      label={fields.spouseName.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.noofchildRange.name
                      }
                      label={
                        fields.noofchildRange.label
                      }
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.bank.name}
                      label={fields.bank.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.bankAccountNoRange.name
                      }
                      label={
                        fields.bankAccountNoRange.label
                      }
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.socsoNoRange.name
                      }
                      label={
                        fields.socsoNoRange.label
                      }
                    />
                  </Grid> */}
                  <Grid item lg={6} xs={12}>
                    <SubdivisionAutocompleteFormItem
                      name={fields.subdivision.name}
                      label={fields.subdivision.label}
                    />
                  </Grid>
                </Grid>

                <FilterButtons>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={loading}
                    startIcon={<SearchIcon />}
                  >
                    {i18n('common.search')}
                  </Button>

                  <Button
                    type="button"
                    onClick={() => this.handleReset(form)}
                    disabled={loading}
                    startIcon={<UndoIcon />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </FilterButtons>
              </form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(
  connect(select)(WorkerRegistrationListFilter),
);
