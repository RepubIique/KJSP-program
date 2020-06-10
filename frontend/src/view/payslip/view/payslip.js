import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';


let cardOne = ()


export default class payslip extends Component {
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
