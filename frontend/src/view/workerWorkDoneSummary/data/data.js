import authAxios from 'modules/shared/axios/authAxios';

let tableData = {
  async getData() {
    let tableStuff;

    const res = await authAxios
      .get('/workerWorkDoneSummary')
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          tableStuff = res.data[j];
        }
      });
     return tableStuff;
  },
};

export default tableData;
