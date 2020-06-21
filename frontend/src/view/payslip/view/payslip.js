import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent,
  Grid,
  CardHeader,
} from '@material-ui/core';
import tableData from '../data/data.js';
import deductionData from '../data/deductionData.js';
import dropdownData from '../data/dropDownData.js';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './css.css';

let result = [];
let resultDD = [];
let resultDeductions = [];

export default class payslip extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor

    this.state = {
      //state is by default an object

      result: [result],
      params: {
        year: '%',
        month: '%',
        sub: '%',
      },
      resultDeductions: [resultDeductions],
    };

    this.handleSelectChangeYear = this.handleSelectChangeYear.bind(
      this,
    );
    this.handleSelectChangeMonth = this.handleSelectChangeMonth.bind(
      this,
    );
    this.handleSelectChangeEmp = this.handleSelectChangeEmp.bind(
      this,
    );
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    result = await tableData.getData(this.state.params);
    resultDD = await dropdownData.getData(
      this.state.params,
    );
    console.log(result);
    this.setState({ result: result });

    resultDeductions = await deductionData.getData(
      this.state.params,
    );
    this.setState({ resultDeductions: resultDeductions });
    console.log(resultDeductions);
  }

  handleSelectChangeYear(event) {
    let params = this.state.params;
    params.year = event.target.value;
    this.setState({ params });
    this.fetchData();
    console.log(params);
  }

  handleSelectChangeMonth(event) {
    console.log(event.target.value);
    let params = this.state.params;
    params.month = event.target.value;
    this.setState({ params });
    this.fetchData();
  }

  handleSelectChangeEmp(event) {
    console.log(event.target.value);
    let params = this.state.params;
    params.sub = event.target.value;
    this.setState({ params });
    this.fetchData();
  }

  render() {
    let $;
    if (
      typeof this.state.result[0] !== 'undefined' ||
      this.state.result[0] != null
    ) {
      console.log('Not Undefined or Not Null');
      $ = this.state.result[0];
    } else {
      console.log('Undefined or Null');
      $ = { workerName: ' ' };
      
    }
    let eliminateDuplicates = (arr) => {
      var i,
        len = arr.length,
        out = [],
        obj = {};

      for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
      }
      for (i in obj) {
        out.push(i);
      }
      return out;
    };
    let workerName = eliminateDuplicates(
      resultDD.map((x) => x.workerName),
    );
    let nameMap = workerName.map((name) => (
      <option key={name}>{name}</option>
    ));
    let months = result.map((x) => x.month);
    let newMonths = eliminateDuplicates(months);
    let monthMap = newMonths.map((month) => (
      <option key={month}>{month}</option>
    ));
    let year = result.map((x) => x.year);
    let newYear = eliminateDuplicates(year);
    let yearMap = newYear.map((year) => (
      <option key={year}>{year}</option>
    ));

    let deductionName = resultDeductions.map(
      (x) => x.deductfor,
    );
    let deductionCost = resultDeductions.map(
      (x) => x.totalDeductions,
    );
    let deductionCostStr = deductionCost.map((x) =>
      parseInt(x),
    );
    let totalDeductionCost = deductionCostStr.reduce(
      (a, b) => a + b,
      0,
    );
    return (
      <React.Fragment>
        <div>
          <Card
            style={{
              width: '100%',
              background: 'white',
              display: 'block',
              margin: '0 auto',
            }}
          >
            <CardContent>
              <FormControl>
                <InputLabel htmlFor="grouped-select">
                  Employee
                </InputLabel>
                <Select
                  style={{ marginRight: '1em' }}
                  native
                  value={this.state.params.sub}
                  onChange={this.handleSelectChangeEmp}
                >
                  id="grouped-native-select" >
                  <option aria-label="None" value="%">
                    Select Employee
                  </option>
                  {nameMap}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="grouped-select">
                  Month
                </InputLabel>
                <Select
                  style={{ marginRight: '1em' }}
                  native
                  value={this.state.params.month}
                  onChange={this.handleSelectChangeMonth}
                >
                  id="grouped-native-select" >
                  <option aria-label="None" value="%">
                    Select Month
                  </option>
                  {monthMap}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="grouped-native-select">
                  Year
                </InputLabel>
                <Select
                  style={{ marginRight: '1em' }}
                  native
                  id="grouped-native-select"
                  value={this.state.params.year}
                  onChange={this.handleSelectChangeYear}
                >
                  >
                  <option aria-label="None" value="%">
                    Select Year
                  </option>
                  {yearMap}
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </div>
        <br></br>
        <div id="section-to-print">
          <Card
            style={{
              width: '100%',
              background: 'white',
              display: 'block',
              margin: '0 auto',
            }}
            variant="outlined"
          >
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          Name:
                          <br></br>
                          ID:
                          <br></br>
                          Designation:
                          <br></br>
                          Division:
                          <br></br>
                          Date Joined:
                        </Grid>
                        <Grid item xs={5}>
                          {$.workerName}
                          <br></br>
                          {$.workerID}
                          <br></br>
                          {$.designation}
                          <br></br>
                          {$.subdivision}
                          <br></br>
                          {$.dateofEmployment}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          IC/PP No:
                          <br></br>
                          Socso No:
                          <br></br>
                          Bank:
                          <br></br>
                          Bank Acc:
                          <br></br>
                        </Grid>
                        <Grid item xs={5}>
                          {$.passportICNo}
                          <br></br>
                          {$.socsoNo}
                          <br></br>
                          {$.bank}
                          <br></br>
                          {$.bankAccountNo}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          Superior:
                        </Grid>
                        <Grid item xs={5}>
                          {$.superiorName}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardHeader subheader="Attendance" />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          Working Day:
                          <br></br>
                          Rest Day:
                          <br></br>
                          Public Holiday:
                          <br></br>
                          Absent:
                          <br></br>
                          Sick Leave:
                          <br></br>
                          On Leave:
                          <br></br>
                          Overtime:
                          <br></br>
                          Total Day:
                          <br></br>
                          Total Working Hour:
                          <br></br>
                          Average Working Hour:
                          <br></br>
                        </Grid>
                        <Grid item xs={5}>
                          {$.totalWorkingDay}
                          <br></br>
                          {$.totalRestDay}
                          <br></br>
                          {$.totalPublicHoliday}
                          <br></br>
                          {$.totalAbsent}
                          <br></br>
                          {$.totalSickLeave}
                          <br></br>
                          {$.totalOnLeave}
                          <br></br>
                          {$.totalOvertimeHour}
                          <br></br>
                          {$.totalWorkingDay}
                          <br></br>
                          {$.totalWorkingHours}
                          <br></br>
                          {$.averageWorkingHour}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardHeader subheader="Details of Payment" />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          General:
                          <br></br>
                          FFB Harvesting:
                          <br></br>
                          Pruning:
                          <br></br>
                          Field Maintenance:
                          <br></br>
                          Pest & Disease:
                          <br></br>
                          Manuring:
                          <br></br>
                          Planting/Supplying:
                          <br></br>
                          Building Construction:
                          <br></br>
                          Infra Maintenance:
                          <br></br>
                          Nursery:
                          <br></br>
                          Transportation:
                          <br></br>
                          <hr></hr>
                          Total income:
                        </Grid>
                        <Grid item xs={5}>
                          {$.generalTotal}
                          <br></br>
                          {$.ffbharvestingTotal}
                          <br></br>
                          {$.pruningTotal}
                          <br></br>
                          {$.fieldmaintenanceTotal}
                          <br></br>
                          {$.pestdiseaseTotal}
                          <br></br>
                          {$.MANURINGTotal}
                          <br></br>
                          {$.PLANTINGSUPPLYINGTotal}
                          <br></br>
                          {$.buildingconstructionTotal}
                          <br></br>
                          {$.inframaintenanceTotal}
                          <br></br>
                          {$.nurseryTotal}
                          <br></br>
                          {$.transportationTotal}
                          <br></br>
                          <hr></hr>
                          {$.Gross}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardHeader subheader="Deduction" />
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          {deductionName.map((x, i) => (
                            <p key={i}>{x}</p>
                          ))}
                          <hr></hr>
                          Total Deduction:
                        </Grid>
                        <Grid item xs={5}>
                          {deductionCost.map((x, i) => (
                            <p key={i}>{x}</p>
                          ))}
                          <hr></hr>
                          {totalDeductionCost}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <br></br>
          <Card
            variant="outlined"
            style={{
              width: '100%',
              background: 'white',
              display: 'block',
              margin: '0 auto',
            }}
          >
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  Payout by:
                  <br></br>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  Name:
                  <br></br>
                  Date:
                  <br></br>
                  All payments are made in Rinngit Malaysia
                  (RM)
                </Grid>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          Total Gross Wages:
                        </Grid>
                        <Grid item xs={5}>
                          {$.Gross}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                  <br></br>% of Deduction:
                  <br></br>
                  {(
                    (totalDeductionCost / $.Gross) *
                    100
                  ).toFixed(2)}
                </Grid>
                <Grid item xs={4}>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={7}>
                          Total Net Payable:
                        </Grid>
                        <Grid item xs={5}>
                          {$.netPayable}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                  Received by:
                  <br></br>
                  <br></br>
                  <br></br>
                  <hr></hr>
                  Name:
                  <br></br>
                  Date:
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
