import React, { Component } from 'react';

import MaterialTable from 'material-table';
import tableData from '../data/data.js';

let result = [];

class payRollSummaryPage extends Component {
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
                  color: '#FFF'
                }
              }}
              
            columns={[
              
              { title: 'Worker ID', field: 'workerID' },
              { title: 'Name', field: 'workerName' },
              { title: 'Working Hours', field: 'WORKINGHRS' },
              { title: 'General', field: 'GENERALsum' },
              { title: 'FFBHARVESTING', field: 'FFBHARVESTING' },
              { title: 'PRUNING', field: 'PRUNING' },
              { title: 'FIELDMAINTENANCE', field: 'FIELDMAINTENANCE' },
              { title: 'PESTDISEASE', field: 'PESTDISEASE' },
              { title: 'PLANTINGSUPPLYING', field: 'PLANTINGSUPPLYING' },
              { title: 'BUILDINGCONSTRUCTION', field: 'BUILDINGCONSTRUCTION' },
              { title: 'INFRAMAINTENANCE', field: 'INFRAMAINTENANCE' },
              { title: 'NURSERY', field: 'NURSERY' },
              { title: 'TRANSPORTATION', field: 'TRANSPORTATION' },
              { title: 'gross', field: 'gross' },
              { title: 'month', field: 'month' },
              { title: 'year', field: 'year' },
              { title: 'deductionTotal', field: 'deductionTotal' },
              { title: 'netPayable', field: 'netPayable' },
              { title: 'percWageDeeduct', field: 'percWageDeeduct' },
              { title: 'achievementofminwages', field: 'achievementofminwages' },
              { title: 'workingHour', field: 'workingHour' },

            ]}
            data={result}
            title="PayRoll Summary"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default payRollSummaryPage;
