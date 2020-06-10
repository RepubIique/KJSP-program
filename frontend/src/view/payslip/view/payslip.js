import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import tableData from '../data/data.js';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

let result = [];

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
    this.handleSelectChangeSub = this.handleSelectChangeSub.bind(
      this,
    );
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    result = await tableData.getData(this.state.params);
    console.log(result);
    this.setState({ result: result });
  }

  handleSelectChangeYear(event) {
    console.log(event.target.value);
    let params = this.state.params;
    params.year = event.target.value;
    this.setState({ params });
    this.fetchData();
  }

  handleSelectChangeMonth(event) {
    console.log(event.target.value);
    let params = this.state.params;
    params.month = event.target.value;
    this.setState({ params });
    this.fetchData();
  }

  handleSelectChangeSub(event) {
    console.log(event.target.value);
    let params = this.state.params;
    params.sub = event.target.value;
    this.setState({ params });
    this.fetchData();
  }

  render() {
    let workerName = result.map((x) => x.workerName);
    let optionItems = workerName.map((name) => (
      <option key={name}>{name}</option>
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
                  <option value={2020}>2020</option>
                  <option value={2021}>2021</option>
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
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
                  <option value={0}>January</option>
                  <option value={1}>February</option>
                  <option value={2}>March</option>
                  <option value={3}>April</option>
                  <option value={4}>May</option>
                  <option value={5}>June</option>
                  <option value={6}>July</option>
                  <option value={7}>August</option>
                  <option value={8}>September</option>
                  <option value={9}>October</option>
                  <option value={10}>November</option>
                  <option value={11}>December</option>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="grouped-select">
                  Subdivision
                </InputLabel>
                <Select
                  style={{ marginRight: '1em' }}
                  native
                  value={this.state.params.sub}
                  onChange={this.handleSelectChangeSub}
                >
                  id="grouped-native-select" >
                  <option aria-label="None" value="%">
                    Select Employee
                  </option>
                  {optionItems}
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
                      </Grid>
                      <Grid item xs={5}>
                        {this.state.result[0].workerName}
                        <br></br>
                        {this.state.result[0].workerID}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent>2</CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent>3</CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Card>
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
                            .totalWorkingHours
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
                  <CardContent>5</CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent>6</CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br></br>
        <Card>
          <CardContent>
            The contents above are currently hard coded just
            for viewing purposes.
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}
