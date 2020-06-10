// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
/**
 * Handles payRollSummary operations
 */
module.exports = class payslipSummaryService {
    async findAndCountAll(params) {
        console.log('---------payslip Summary Service --------');
        console.log(params);

        if (params.month !== '%') {
            params.month = monthNames[params.month];
        }
        

        return sequelize.query(
            'SELECT * FROM payslip WHERE year LIKE :year AND month LIKE :month and workerName like :sub;',
            {
              replacements: params
            }
          );
      }
}