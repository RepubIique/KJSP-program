import authAxios from 'modules/shared/axios/authAxios';

let avgWorkerDesignationData = {
  async getData() {
    let avgWorkerDesignationStuff;

    const res = await authAxios
      .get('/avgWorkerDesignation')
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          avgWorkerDesignationStuff = res.data[j];
        }
      });
     return avgWorkerDesignationStuff;
  },

  
};

export default avgWorkerDesignationData;
