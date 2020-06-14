import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { i18n } from 'i18n';
import avgWorkerDesignationData from './data/avgWorkerDesignationData.js';

let result = [];

let data;

const options = {
  scales: {
    xAxes: [
      {
        display: true,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
};

export default class HomeHorizontalBarChart extends Component {
  async componentDidMount() {
    result = await avgWorkerDesignationData.getData();

    this.setState({ result: result });
    console.log(result[0].FFBHARVESTING);
    data = {
      datasets: [
        {
          label: 'General',
          backgroundColor: '#DAF7A6',
          borderColor:  '#DAF7A6',
          borderWidth: 1,
          hoverBackgroundColor:  '#DAF7A6',
          hoverBorderColor: '#DAF7A6',
          data: [result[0].General],
        }
        ,
        {
          label: 'FFB Harvesting',
          backgroundColor: '#FFC300',
          borderColor:  '#FFC300',
          borderWidth: 1,
          hoverBackgroundColor:  '#FFC300',
          hoverBorderColor:  '#FFC300',
          data: [result[0].FFBHARVESTING],
        }
        ,
        {
          label: 'Pruning',
          backgroundColor: '#C70039',
          borderColor: '#C70039',
          borderWidth: 1,
          hoverBackgroundColor: '#C70039',
          hoverBorderColor:  '#C70039',
          data: [result[0].PRUNING],
        }
        ,
        {
          label: 'Field Maintenance',
          backgroundColor: '#FF5733',
          borderColor:'#FF5733',
          borderWidth: 1,
          hoverBackgroundColor: '#FF5733',
          hoverBorderColor: '#FF5733',
          data: [result[0].FIELDMAINTENANCE],
        }
        ,
        {
          label: 'Planting/Supplying',
          backgroundColor: '#900C3F',
          borderColor: '#900C3F',
          borderWidth: 1,
          hoverBackgroundColor: '#900C3F',
          hoverBorderColor: '#900C3F',
          data: [result[0].PLANTINGSUPPLYING],
        }
        ,
        {
          label: 'Building and Construction',
          backgroundColor: '#581845',
          borderColor:  '#581845',
          borderWidth: 1,
          hoverBackgroundColor: '#581845',
          hoverBorderColor:  '#581845',
          data: [result[0].BUILDINGCONSTRUCTION],
        }
        ,
        {
          label: 'Infrastructure Maintenance',
          backgroundColor: '#599717',
          borderColor: '#599717',
          borderWidth: 1,
          hoverBackgroundColor:  '#599717',
          hoverBorderColor:  '#599717',
          data: [result[0].INFRAMAINTENANCE],
        }
        ,
        {
          label: 'Nursery',
          backgroundColor: '#0400FF',
          borderColor: '#0400FF',
          borderWidth: 1,
          hoverBackgroundColor:'#0400FF',
          hoverBorderColor: '#0400FF',
          data: [result[0].NURSERY],
        }
        ,
        {
          label: 'Transportation',
          backgroundColor: '#FF00E0',
          borderColor: '#FF00E0',
          borderWidth: 1,
          hoverBackgroundColor: '#FF00E0',
          hoverBorderColor:'#FF00E0',
          data: [result[0].TRANSPORTATION],
        }
      ],

      // labels: [
      //   'General',
      //   'FFBHARVESTING',
      //   'PRUNING',
      //   'FIELDMAINTENANCE',
      //   'PLANTINGSUPPLYING',
      //   'BUILDINGCONSTRUCTION',
      //   'INFRAMAINTENANCE',
      //   'NURSERY',
      //   'TRANSPORTATION'
      // ],
      // datasets: [
      //   {
      //     label:
      //     'Average Salary per designation',
      //     backgroundColor: 'rgba(255,99,132,0.2)',
      //     borderColor: 'rgba(255,99,132,1)',
      //     borderWidth: 1,
      //     hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      //     hoverBorderColor: 'rgba(255,99,132,1)',
      //     data: [
      //       result[0].General,
      //       result[0].FFBHARVESTING,
      //       result[0].PRUNING,

      //       result[0].FIELDMAINTENANCE,
      //       result[0].PLANTINGSUPPLYING,
      //       result[0].BUILDINGCONSTRUCTION,
      //       result[0].INFRAMAINTENANCE,
      //       result[0].NURSERY,
      //       result[0].TRANSPORTATION,
      //     ],
      //   },
      // ],
    };
  }

  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      result: [result],
    };
  }

  render() {
    return <HorizontalBar data={data} options={options} />;
  }
}
