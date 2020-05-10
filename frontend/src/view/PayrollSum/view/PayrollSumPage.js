import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import tableData from '../Data/PayrollSumData'


console.log(tableData.getData());
const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    margin: 'dense'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow >
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>General</TableCell>
            <TableCell>FFB Harv.</TableCell>
            <TableCell>Pruning</TableCell>
            <TableCell>Field Maint.</TableCell>
            <TableCell>Pest & Disease</TableCell>
            <TableCell>Manuring</TableCell>
            <TableCell>Plant/Supply</TableCell>
            <TableCell>Building Const.</TableCell>
            <TableCell>Infust. Maint.</TableCell>
            <TableCell>Nursery</TableCell>
            <TableCell>Transport</TableCell>
            <TableCell>Cash Deno</TableCell>
            <TableCell>Gross Wages</TableCell>
            <TableCell>Deduction</TableCell>
            <TableCell>Net Payable</TableCell>
            <TableCell>Verified</TableCell>
            <TableCell>% of deduct wages</TableCell>
            <TableCell>Achievement of Min. wages (%)</TableCell>
            <TableCell>Working Hour (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
               <TableCell >{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <TableCell >{row.carbs}</TableCell>
              <TableCell >{row.protein}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
