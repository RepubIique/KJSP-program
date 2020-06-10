import authAxios from 'modules/shared/axios/authAxios';

let tableData = {
  async getData(params) {
    let tableStuff;

    const res = await authAxios
      .get('/payslip', { params })
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          tableStuff = res.data[j];
        }
      });
    return tableStuff;
  },
};

export default tableData;
