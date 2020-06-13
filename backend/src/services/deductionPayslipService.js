// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;


/**
 * Handles payRollSummary operations
 */
module.exports = class deductionPayslipSummaryService {
    async findAndCountAll(params) {
        console.log('---------deductionPayslip Summary Service --------');
        console.log(params);


        

        return sequelize.query(
            'SELECT * FROM deductionPayslip WHERE year LIKE :year AND month LIKE :month and workerName like :sub;',
            {
              replacements: params
            }
          );
      }
}