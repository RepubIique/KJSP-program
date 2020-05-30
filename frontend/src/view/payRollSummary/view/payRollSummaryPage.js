import React, { Component } from 'react';
import MaterialTable from 'material-table';
import tableData from '../data/data.js';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

let result = [];

class payRollSummaryPage extends Component {
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
                    Select Subdivision
                  </option>
                  <option value={0}>SubA</option>
                  <option value={1}>SubB</option>
                  <option value={2}>SubC</option>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </div>
        <br></br>
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            options={{
              // filtering: true,
              headerStyle: {
                backgroundColor: '#2196F3',
                color: '#FFF',
                fontSize: '0.8em',
              },

              cellStyle: {
                fontSize: '1em',
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
                title: 'FFB Harvesting',
                field: 'FFBHARVESTING',
              },
              { title: 'Pruning', field: 'PRUNING' },
              {
                title: 'Field Maint.',
                field: 'FIELDMAINTENANCE',
              },
              {
                title: 'Pest/Disease',
                field: 'PESTDISEASE',
              },
              {
                title: 'Planting/Supply',
                field: 'PLANTINGSUPPLYING',
              },
              {
                title: 'Building Const.',
                field: 'BUILDINGCONSTRUCTION',
              },
              {
                title: 'Infa. Maintenance',
                field: 'INFRAMAINTENANCE',
              },
              { title: 'Nursery', field: 'NURSERY' },
              {
                title: 'Transportation',
                field: 'TRANSPORTATION',
              },
              { title: 'gross', field: 'gross' },
              { title: 'month', field: 'month' },
              { title: 'year', field: 'year' },
              {
                title: 'deductionTotal',
                field: 'deductionTotal',
              },
              { title: 'net Payable', field: 'netPayable' },
              {
                title: '% of Wage Deducted',
                field: 'percWageDeeduct',
              },
              {
                title: 'Min Wage Achiev.',
                field: 'achievementofminwages',
              },
              {
                title: 'Working Hours',
                field: 'workingHour',
              },
            ]}
            data={result}
            title="Pay Roll Summary"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default payRollSummaryPage;
