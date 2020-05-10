import authAxios from 'modules/shared/axios/authAxios';

let tableData = {
  async getData() {
let ffbHarv = [];
    const res = await authAxios
    .get('/checkRoll')
    .then(async (res) => {
      for (let j = 0; j < res.data.rows.length; j++) {
        let Amount = res.data.rows[j].quantity *  res.data.rows[j].workcode.rate
        ffbHarv.push(Amount)
        }
    });
    var sum = ffbHarv.reduce(function(a, b){
      return a + b;
  }, 0);
  
  console.log(sum);

  }, 
};

export default tableData;
