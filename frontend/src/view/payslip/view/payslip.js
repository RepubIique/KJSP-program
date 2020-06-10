import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import tableData from '../data/data.js';

let result = [];

export default class payslip extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      result: [result],
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    result = await tableData.getData(this.state.params);
    console.log(result);
    this.setState({ result: result });
  }

  render() {
    return (
      <React.Fragment>
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
