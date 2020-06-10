import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { i18n } from 'i18n';

const data = {
  labels: [
    i18n('home.charts.months.1'),
    i18n('home.charts.months.2'),
    i18n('home.charts.months.3'),
    i18n('home.charts.months.4'),
    i18n('home.charts.months.5'),
    i18n('home.charts.months.6'),
    i18n('home.charts.months.7'),
  ],
  datasets: [
    {
      label: i18n('home.charts.green'),
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      
      data: [3691, 10646, 14687, 17219, 21278, 25544, 26564, 27270, 32516, 34532, 36845, 38967],
    },
    {
      label: i18n('home.charts.green'),
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'red',
      borderColor: 'red)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      
      data: [4097, 4432, 9985, 10353, 15213, 18589, 25450, 25786, 27005, 31102, 37481, 39037],
    },
    {
      label: i18n('home.charts.green'),
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'orange',
      borderColor: 'orange',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      
      data: [1791, 1851, 5388, 7929, 17013, 18182, 18330, 19112, 20992, 21426, 36937, 38519],
    },
    {
      label: i18n('home.charts.green'),
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'purple',
      borderColor: 'purple',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      
      data: [420, 9792, 19347, 20443, 24057, 25472, 25497, 28410, 29238, 29755, 31624, 38474],
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: true,
      },
    ],
  },
};

export default class HomeLineChart extends Component {
  render() {
    return <Line data={data} options={options} />;
  }
}
