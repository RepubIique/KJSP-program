import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { i18n } from 'i18n';
import barChartData from './data/barChartdata.js';

let result = [];

let populateName = () => {
  let nameArr = [];
  for (let i = 0; i < result.length; i++) {
    nameArr.push(result[i].workerName);
  }
  return nameArr;
};

let populateQuan = () => {
  let QuanArr = [];
  for (let i = 0; i < result.length; i++) {
    QuanArr.push(result[i].totalQuantity);
  }
  return QuanArr;
};

export default class HomeMixChartOne extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      result: [result],
    };
  }

  async componentDidMount() {
    result = await barChartData.getData();

    this.setState({ result: result });
  }

  render() {
    const options = {
      responsive: true,
      tooltips: {
        mode: 'label',
      },
      elements: {
        line: {
          fill: false,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            type: 'linear',
            display: false,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: false,
            },
          },
          {
            type: 'linear',
            display: false,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };
    const data1 = {
      labels: populateName(),
      datasets: [
        {
          label: i18n('home.charts.orange'),
          type: 'line',
          data: populateQuan(),
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-2',
        },
        {
          type: 'bar',
          label: i18n('home.charts.blue'),
          data: populateName(),
          fill: false,
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          hoverBackgroundColor: '#36A2EB',
          hoverBorderColor: '#36A2EB',
          yAxisID: 'y-axis-1',
        },
      ],
    };

    return <Bar data={data1} options={options} />;
  }
}
