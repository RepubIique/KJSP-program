import authAxios from 'modules/shared/axios/authAxios';

let tableData = {
  async getData() {
let row
    const res = await authAxios
    .get('/payrollsum')
    .then(async (res) => {
      console.log(res.data.rows[0])

    });
  }, 
};

export default tableData;
