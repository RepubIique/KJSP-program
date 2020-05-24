import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/attendance/list/attendanceListActions';
import selectors from 'modules/attendance/list/attendanceListSelectors';
import model from 'modules/attendance/attendanceModel';
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
import InputRangeFormItem from 'view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import SubdivisionAutocompleteFormItem from 'view/subdivision/autocomplete/SubdivisionAutocompleteFormItem';
import WeekAutocompleteFormItem from 'view/week/autocomplete/WeekAutocompleteFormItem';
import WorkerRegistrationAutocompleteFormItem from 'view/workerRegistration/autocomplete/WorkerRegistrationAutocompleteFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.subDivision,
  fields.week,
  fields.workerID,
  fields.totalWorkingDayRange,
  fields.totalWorkingHoursRange,
  fields.totalRestDayRange,
  fields.totalPublicHolidayRange,
  fields.totalAbsentRange,
  fields.totalSickLeaveRange,
  fields.totalOnLeaveRange,
  fields.totalOvertimeHourRange,
  fields.month,
  fields.yearRange,
]);

class AttendanceListFilter extends Component {
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
                      name={fields.id.name}
                      label={fields.id.label}
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <SubdivisionAutocompleteFormItem
                      name={fields.subDivision.name}
                      label={fields.subDivision.label}
                    />
                  </Grid> */}
                  <Grid item lg={6} xs={12}>
                    <WorkerRegistrationAutocompleteFormItem
                      name={fields.workerID.name}
                      label={fields.workerID.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <WeekAutocompleteFormItem
                      name={fields.week.name}
                      label={fields.week.label}
                    />
                  </Grid>

                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.totalWorkingDayRange.name
                      }
                      label={
                        fields.totalWorkingDayRange.label
                      }
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.totalWorkingHoursRange.name
                      }
                      label={
                        fields.totalWorkingHoursRange.label
                      }
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.totalRestDayRange.name
                      }
                      label={
                        fields.totalRestDayRange.label
                      }
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.totalPublicHolidayRange.name
                      }
                      label={
                        fields.totalPublicHolidayRange.label
                      }
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.totalAbsentRange.name
                      }
                      label={
                        fields.totalAbsentRange.label
                      }
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.totalSickLeaveRange.name
                      }
                      label={
                        fields.totalSickLeaveRange.label
                      }
                    />
                  </Grid> */}
                  {/* <Grid item lg={6} xs={12}>
                    <InputRangeFormItem
                      name={fields.totalOnLeaveRange.name}
                      label={fields.totalOnLeaveRange.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputRangeFormItem
                      name={fields.totalOvertimeHourRange.name}
                      label={fields.totalOvertimeHourRange.label}
                    />
                  </Grid> */}
                  <Grid item lg={6} xs={12}>
                    <SelectFormItem
                      name={fields.month.name}
                      label={fields.month.label}
                      options={fields.month.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                    />
                  </Grid>
                  {/* <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.yearRange.name
                      }
                      label={
                        fields.yearRange.label
                      }
                    />
                  </Grid> */}
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
  connect(select)(AttendanceListFilter),
);
