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
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent></CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Card>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card>
                  <CardContent></CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br></br>
        <Card>
          <CardContent>Hi</CardContent>
        </Card>
      </React.Fragment>
    );
  }
}
