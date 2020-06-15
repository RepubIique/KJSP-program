import authAxios from 'modules/shared/axios/authAxios';

let randomWorkerData = {
  async getData() {
    let randomWorkerStuff;

    const res = await authAxios
      .get('/randomWorker')
      .then(async (res) => {
        for (let j = 0; j < res.data.length; j++) {
          randomWorkerStuff = res.data[j];
        }
      });
     return randomWorkerStuff;
  },

  
};

export default randomWorkerData;
