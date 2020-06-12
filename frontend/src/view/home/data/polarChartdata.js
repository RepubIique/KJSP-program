import authAxios from 'modules/shared/axios/authAxios';

let polarChartData = {
  async getData() {
    let polarChartStuff;

    const res = await authAxios
      .get('/polarChart')
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          polarChartStuff = res.data[j];
        }
      });
     return polarChartStuff;
  },

  
};

export default polarChartData;
