
const sequelize = require('../database/models').sequelize;

/**
 * Handles workerWorkDoneSummary operations
 */
module.exports = class monthlyLabourCostService {
    async findAndCountAll(args) {
        console.log('--------- Monthly Labour Cost Service ---------')
        return sequelize.query(
            'SELECT * from checkRollreport',
          );
      }
}