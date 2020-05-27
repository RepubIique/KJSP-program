
const sequelize = require('../database/models').sequelize;

/**
 * Handles workerWorkDoneSummary operations
 */
module.exports = class labourCostSummaryService {
    async findAndCountAll(args) {
        console.log('--------- Labour Cost Summary Service ---------')
        return sequelize.query(
            'SELECT * from checkRollreport',
          );
      }
}