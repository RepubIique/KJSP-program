import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import checkRollreportService from 'modules/checkRollreport/checkRollreportservice';

class checkRollreportPage extends Component {
  componentDidMount() {
    console.log(checkRollreportService.findAndCountAll());
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={[
              { title: 'Worker ID', field: 'workerIDId' },
              { title: 'Name', field: 'workerName' },
              {
                title: 'Account Code',
                field: 'accCode',
                type: 'numeric',
              },
              {
                title: 'no',
                field: 'no',
                type: 'numeric',
              },
              {
                title: 'Description',
                field: 'workDescription',
              },
              {
                title: 'Quantity',
                field: 'quantity',
                type: 'numeric',
              },
              {
                title: 'UPM',
                field: 'uom',
              },
              {
                title: 'Rate',
                field: 'rate',
                type: 'numeric',
              },
              {
                title: 'Amount',
                field: 'Amount',
                type: 'numeric',
              },
              {
                title: 'Sub-division',
                field: 'subdivision',
              },
              {
                title: 'Block ID',
                field: 'blockId',
                type: 'numeric',
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
            data={[]}
            title="Checkroll Report"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default checkRollreportPage;
