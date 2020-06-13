import authAxios from 'modules/shared/axios/authAxios';

let deductionData = {
  async getData(params) {
    let deductionStuff;

    const res = await authAxios
      .get('/deductionPayslip', { params })
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          deductionStuff = res.data[j];
        }
      });
    return deductionStuff;
  },
};

export default deductionData;


