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
import randomWorkerData from './data/randomWorkerdata.js';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

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
let resultRW = [];

class HomePage extends PureComponent {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      result: [result],
      resultRW: [resultRW],
    };
  }

  async componentDidMount() {
    result = await barDataData.getData();
    resultRW = await randomWorkerData.getData();
    console.log(resultRW);
    this.setState({ result: result });
    this.setState({ resultRW: resultRW });
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          width: '100%',
          padding: 0,
          marginLeft: '-12px',
          marginRight: '-12px',
        }}
      >
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
                      <b>
                        {this.state.result[0].totalSalaries}
                      </b>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Total Deductions
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <b>
                        {
                          this.state.result[0]
                            .totalDeductions
                        }
                      </b>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Average Salary
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <b>
                        {this.state.result[0].averageWage}
                      </b>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Total Employees
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <b>
                        {this.state.result[0].totalWorkers}{' '}
                      </b>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      Total Sick Days
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <b>
                        {this.state.result[0].totalSick}{' '}
                      </b>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid container>
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
              <HomeHorizontalBarChart />
            </div>
          </Grid>
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

          <Grid
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
          >
            <Card>
              <CardContent>
                <Typography
                  variant="subtitle"
                  color="textSecondary"
                >
                  Random Worker
                </Typography>
                <Typography component="h5" variant="h5">
                {this.state.resultRW[0].workerName}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                >
                  {this.state.resultRW[0].designation}
                </Typography>
                <Typography
                  variant="subtitle"
                  color="textSecondary"
                >
                  Average Hours Worked: {this.state.resultRW[0].avgtotalWorkingHours}
                </Typography>
                <br></br>
                <Typography
                  variant="subtitle"
                  color="textSecondary"
                >
                  Average Days Absent: {this.state.resultRW[0].avgtotalAbsent}
                </Typography>
                <br></br>
                <Typography
                  variant="subtitle"
                  color="textSecondary"
                >
                 Average Salary: {this.state.resultRW[0].avgnetPayable}
                </Typography>
                <CardMedia

        image=  {this.state.resultRW[0].privateUrl}

        title="Live from space album cover"
      />
              </CardContent>
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
