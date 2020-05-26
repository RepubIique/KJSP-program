
const sequelize = require('../database/models').sequelize;

/**
 * Handles workerWorkDoneSummary operations
 */
module.exports = class workerWorkDoneSummaryService {
    async findAndCountAll(args) {
        console.log('--------- Worker Workdone Summary Service ---------')
        return sequelize.query(
            'SELECT * from checkRollreport',
          );
      }
}