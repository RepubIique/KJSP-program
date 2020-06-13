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

let result = [];
let resultDD = [];

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
    console.log(deductionData.getData())
  }

  async fetchData() {
    result = await tableData.getData(this.state.params);
    resultDD = await dropdownData.getData(
      this.state.params,
    );
    console.log(result);
    this.setState({ result: result });
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
    let workerName = resultDD.map((x) => x.workerName);
    let nameMap = workerName.map((name) => (
      <option key={name}>{name}</option>
    ));
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
    return (
      <React.Fragment>
        <div>
          <Card style={{ width: '100%' }}>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
        <br></br>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Card>
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
                        {this.state.result[0].workerName}
                        <br></br>
                        {this.state.result[0].workerID}
                        <br></br>
                        {this.state.result[0].designation}
                        <br></br>
                        {this.state.result[0].subdivision}
                        <br></br>
                        {
                          this.state.result[0]
                            .dateofEmployment
                        }
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
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
                        Tim to add
                        <br></br>
                        {this.state.result[0].socsoNo}
                        <br></br>
                        {this.state.result[0].bank}
                        <br></br>
                        {this.state.result[0].bankAccountNo}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={7}>
                        Superior:
                      </Grid>
                      <Grid item xs={5}>
                        {this.state.result[0].superiorName}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Card>
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
                        {
                          this.state.result[0]
                            .totalWorkingDay
                        }
                        <br></br>
                        {this.state.result[0].totalRestDay}
                        <br></br>
                        {
                          this.state.result[0]
                            .totalPublicHoliday
                        }
                        <br></br>
                        {this.state.result[0].totalAbsent}
                        <br></br>
                        {
                          this.state.result[0]
                            .totalSickLeave
                        }
                        <br></br>
                        {this.state.result[0].totalOnLeave}
                        <br></br>
                        {this.state.result[0].totalRestDay}
                        <br></br>
                        {
                          this.state.result[0]
                            .totalWorkingDay
                        }
                        <br></br>
                        {
                          this.state.result[0]
                            .totalOvertimeHour
                        }
                        <br></br>
                        {
                          this.state.result[0]
                            .averageWorkingHour
                        }
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardHeader subheader="Details of Payment" />
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardHeader subheader="Deduction" />
                  <CardContent></CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br></br>
        <Card>
          <CardContent>
            The contents above are currently dynamic :)
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}
