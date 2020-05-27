import React, { Component } from 'react';
import MaterialTable from 'material-table';
import tableData from '../data/data.js';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

let result = [];

class monthlyLabourCost extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      result: [result],
    };
  }

  async componentDidMount() {
    result = await tableData.getData();
    console.log(result);
    this.setState({ result: result });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Card>
            <CardContent>
              <FormControl>
                <InputLabel htmlFor="grouped-native-select">
                  Year
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                >
                  <option aria-label="None" value="" />
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
                  native
                  defaultValue=""
                  id="grouped-native-select"
                >
                  <option aria-label="None" value="" />
                  <option value={1}>January</option>
                  <option value={2}>Febuary</option>
                  <option value={3}>Machr</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>December</option>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </div>
        <br></br>
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            options={{
              filtering: true,
              headerStyle: {
                backgroundColor: '#2196F3',
                color: '#FFF',
                padding: '0.3em',
              },
            }}
            columns={[
              { title: 'Worker ID', field: 'workerID' },
              { title: 'Name', field: 'workerName' },
              {
                title: 'Working Hours',
                field: 'WORKINGHRS',
              },
              { title: 'General', field: 'GENERALsum' },
              {
                title: 'FFBHARVESTING',
                field: 'FFBHARVESTING',
              },
              { title: 'PRUNING', field: 'PRUNING' },
              {
                title: 'FIELDMAINTENANCE',
                field: 'FIELDMAINTENANCE',
              },
              {
                title: 'PESTDISEASE',
                field: 'PESTDISEASE',
              },
              {
                title: 'PLANTINGSUPPLYING',
                field: 'PLANTINGSUPPLYING',
              },
              {
                title: 'BUILDINGCONSTRUCTION',
                field: 'BUILDINGCONSTRUCTION',
              },
              {
                title: 'INFRAMAINTENANCE',
                field: 'INFRAMAINTENANCE',
              },
              { title: 'NURSERY', field: 'NURSERY' },
              {
                title: 'TRANSPORTATION',
                field: 'TRANSPORTATION',
              },
              { title: 'gross', field: 'totalOfall' },
              { title: 'month', field: 'month' },
              { title: 'year', field: 'year' },
              {
                title: 'deductionTotal',
                field: 'deductionTotal',
              },
              { title: 'netPayable', field: 'netPayable' },
              {
                title: 'percWageDeeduct',
                field: 'percWageDeeduct',
              },
              {
                title: 'achievementofminwages',
                field: 'achievementofminwages',
              },
              {
                title: 'workingHour',
                field: 'workingHour',
              },
            ]}
            data={result}
            title="Monthly Labour Cost"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default monthlyLabourCost;
