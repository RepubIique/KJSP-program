import authAxios from 'modules/shared/axios/authAxios';

let barDataData = {
  async getData() {
    let barDataStuff;

    const res = await authAxios
      .get('/barData')
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          barDataStuff = res.data[j];
        }
      });
     return barDataStuff;
  },

  
};

export default barDataData;
