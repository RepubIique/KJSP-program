import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/ffb/list/ffbListActions';
import selectors from 'modules/ffb/list/ffbListSelectors';
import model from 'modules/ffb/ffbModel';
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
import EstateAutocompleteFormItem from 'view/estate/autocomplete/EstateAutocompleteFormItem';
import SubdivisionAutocompleteFormItem from 'view/subdivision/autocomplete/SubdivisionAutocompleteFormItem';
import MillAutocompleteFormItem from 'view/mill/autocomplete/MillAutocompleteFormItem';
import WorkcodeAutocompleteFormItem from 'view/workcode/autocomplete/WorkcodeAutocompleteFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.id,
  fields.dateRange,
  fields.estate,
  fields.subdivision,
  fields.mill,
  fields.fFBTonnageMTRange,
  fields.month,
  fields.year,
  fields.company,
  fields.millticketNo,
  fields.sealNoRange,
  fields.deliverynotenoRange,
  fields.lorryNo,
  fields.block,
]);

class FfbListFilter extends Component {
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
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.id.name}
                      label={fields.id.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <DatePickerRangeFormItem
                      name={fields.dateRange.name}
                      label={fields.dateRange.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <EstateAutocompleteFormItem
                      name={fields.estate.name}
                      label={fields.estate.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <SubdivisionAutocompleteFormItem
                      name={fields.subdivision.name}
                      label={fields.subdivision.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <MillAutocompleteFormItem
                      name={fields.mill.name}
                      label={fields.mill.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputRangeFormItem
                      name={fields.fFBTonnageMTRange.name}
                      label={fields.fFBTonnageMTRange.label}
                    />
                  </Grid>
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
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.year.name}
                      label={fields.year.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.company.name}
                      label={fields.company.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.millticketNo.name}
                      label={fields.millticketNo.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.sealNoRange.name
                      }
                      label={
                        fields.sealNoRange.label
                      }
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputNumberRangeFormItem
                      name={
                        fields.deliverynotenoRange.name
                      }
                      label={
                        fields.deliverynotenoRange.label
                      }
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.lorryNo.name}
                      label={fields.lorryNo.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <WorkcodeAutocompleteFormItem
                      name={fields.block.name}
                      label={fields.block.label}
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

export default withRouter(connect(select)(FfbListFilter));
