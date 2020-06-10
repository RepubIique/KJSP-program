import authAxios from 'modules/shared/axios/authAxios';

let dropdownData = {
  async getData(params) {
    let dropdown;

    const res = await authAxios
      .get('/workerNameList', { params })
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          dropdown = res.data[j];
        }
      });
    return dropdown;
  },
};

export default dropdownData;


