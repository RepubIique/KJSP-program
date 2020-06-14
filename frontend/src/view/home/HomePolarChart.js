import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import { i18n } from 'i18n';
import polarChartData from './data/polarChartdata.js';
let result = [];
let populateSub = () => {
  let data = [];
  for (let i = 0; i < result.length; i++) {
    data.push(result[i].subdivision);
  }

  return data;
};


let populateGross = () => {
  let data = [];
  for (let i = 0; i < result.length; i++) {
    data.push(result[i].gross);
  }

  return data;
};


let data = {

};
export default class HomePolarChart extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      result: [result],
    };
  }

  async componentDidMount() {

    result = await polarChartData.getData();

    this.setState({ result: result });
    data = {
 
      datasets: [
        {
          data: populateGross(),
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB',
          ],
        },
      ],
      
      label: 'Ringgit Earned for the month',
    
      labels: [
        populateSub()
      ],
    };
  }

  
  render() {
    return <Polar data={data} />;
  }
}
