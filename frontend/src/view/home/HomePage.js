import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import HomeBarChart from 'view/home/HomeBarChart';
import HomeDoughnutChart from 'view/home/HomeDoughnutChart';
import HomeRadarChart from 'view/home/HomeRadarChart';
import HomeMixChartTwo from 'view/home/HomeMixChartTwo';
import HomeMixChartOne from 'view/home/HomeMixChartOne';
import HomeHorizontalBarChart from 'view/home/HomeHorizontalBarChart';
import HomePolarChart from 'view/home/HomePolarChart';
import HomeLineChart from 'view/home/HomeLineChart';
import { Grid, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import barDataData from './data/barData.js';

const styles = (theme) => ({
  chartWrapper: {
    border: '1px solid rgb(224, 224, 224)',
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
let result = [];

class HomePage extends PureComponent {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      result: [result],
    };
  }

  async componentDidMount() {
    result = await barDataData.getData();
    console.log('here');
    console.log(result[0].totalSalaries);
    this.setState({ result: result });
    this.totalSalary = result[0].totalSalaries;
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          padding: 0,
          marginLeft: '-12px',
          marginRight: '-12px',
        }}
      >
        <Grid container>
          <Grid
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
          >
            <Card>
              <TableContainer component={Paper}>
                <Table
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        Summary for year 2020
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Total Salaries
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <b>{this.totalSalary}</b>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Total Deductions
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <b> $4,571</b>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Average Salary
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <b>$4,786,571</b>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Total Employees
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <b>89 </b>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        Total Sick Days
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <b>89 </b>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
          {/* <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeDoughnutChart />
            </div>
          </Grid> */}
          {/* <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeMixChartTwo />
            </div>
          </Grid> */}
          {/* <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeBarChart />
            </div>
          </Grid> */}

          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeMixChartOne />
            </div>
          </Grid>

          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomePolarChart />
            </div>
          </Grid>

          {/* <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeHorizontalBarChart />
            </div>
          </Grid> */}
          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeLineChart />
            </div>
          </Grid>

          {/* <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeRadarChart />
            </div>
          </Grid> */}
        </Grid>

        <p
          style={{
            marginTop: '16px',
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          {i18n('home.message')}
        </p>
      </div>
    );
  }
}

export default connect(null)(withStyles(styles)(HomePage));
