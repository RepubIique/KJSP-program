import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';

const useStyles = makeStyles({

});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('', 159, 6.0, 24, 4.0),
  createData('', 237, 9.0, 37, 4.3),
  createData('', 262, 16.0, 24, 6.0),
  createData('', 305, 3.7, 67, 4.3),
  createData('', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
<>
    <Card>
    <label for="cars">Division:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<label for="cars">Month:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<label for="cars">Year:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
    </Card>

    <br></br>
    <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell  style={{'font-size': '11px'}}>ID No.</TableCell>
            <TableCell  style={{'font-size': '11px'}}>NAME</TableCell>
            <TableCell  style={{'font-size': '11px'}}>WORKING HRS</TableCell>
            <TableCell  style={{'font-size': '11px'}}>GENERAL</TableCell>
            <TableCell  style={{'font-size': '11px'}}>FFB HARVESTING</TableCell>
            <TableCell  style={{'font-size': '11px'}}>PRUNING</TableCell>
            <TableCell  style={{'font-size': '11px'}}>FIELD MAINTENANCE</TableCell>
            <TableCell  style={{'font-size': '11px'}}>PEST & DISEASE</TableCell>
            <TableCell  style={{'font-size': '11px'}}>MANURING</TableCell>
            <TableCell  style={{'font-size': '11px'}}>PLANTING/SUPPLYING</TableCell>
            <TableCell  style={{'font-size': '11px'}}>BUILDING CONSTRUCTION</TableCell>
            <TableCell  style={{'font-size': '11px'}}>INFRA MAINTENANCE</TableCell>
            <TableCell  style={{'font-size': '11px'}}>NURSERY</TableCell>
            <TableCell  style={{'font-size': '11px'}}>TRANSPORTATION</TableCell>
            <TableCell  style={{'font-size': '11px'}}>CASH DENO</TableCell>
            <TableCell  style={{'font-size': '11px'}}>GROSS WAGES</TableCell>
            <TableCell  style={{'font-size': '11px'}}>DEDUCTION</TableCell>
            <TableCell  style={{'font-size': '11px'}}>NET PAYABLE</TableCell>
            <TableCell  style={{'font-size': '11px'}}>VERIFIED</TableCell>
            <TableCell  style={{'font-size': '11px'}}>% of deduct wages</TableCell>
            <TableCell  style={{'font-size': '11px'}}>Achievement of Min. wages (%)</TableCell>
            <TableCell  style={{'font-size': '11px'}}>Working Hour (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  style={{'font-size': '11px'}}>{row.calories}</TableCell>
              <TableCell  style={{'font-size': '11px'}}>{row.fat}</TableCell>
              <TableCell  style={{'font-size': '11px'}}>{row.carbs}</TableCell>
              <TableCell  style={{'font-size': '11px'}}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
