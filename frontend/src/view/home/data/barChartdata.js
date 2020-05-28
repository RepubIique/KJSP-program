import authAxios from 'modules/shared/axios/authAxios';

let barChartData = {
  async getData() {
    let barChartStuff;

    const res = await authAxios
      .get('/barChartperf')
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          barChartStuff = res.data[j];
        }
      });
     return barChartStuff;
  },

  
};

export default barChartData;
