import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import tableData from '../data/data.js';
import { size } from 'lodash';

let result = [];

class checkRollReportPage extends Component {
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
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            options={{
              filtering: true,
              headerStyle: {
                backgroundColor: '#2196F3',
                color: '#FFF',
                padding: '0.3em'              },
            }}
            columns={[
              { title: 'Worker ID', field: 'workerIDId' },
              { title: 'Name', field: 'workerName' },
              {
                title: 'Account Code',
                field: 'accCode',
              },
              {
                title: 'no',
                type: 'numeric',
                field: 'no',
              },
              {
                title: 'Description',
                field: 'workDescription',
              },
              {
                title: 'Quantity',
                field: 'quantity',
              },
              {
                title: 'Rate',
                field: 'rate',
              },
              {
                title: 'Amount',
                field: 'Amount',
              },
              {
                title: 'Sub-division',
                field: 'subdivision',
              },
              {
                title: 'Block ID',
                field: 'blockId',
              },
              {
                title: 'Month',
                field: 'month',
              },
              {
                title: 'Year',
                field: 'year',
              },
            ]}
            data={result}
            title="Check Roll Report"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default checkRollReportPage;
