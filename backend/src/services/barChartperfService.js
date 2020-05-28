// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;

/**
 * Handles barChartperf operations
 */
module.exports = class barChartperfService {
    async findAndCountAll(args) {
        console.log('--------- barChartperf Service --------')
        return sequelize.query(
            'SELECT * from barChartperf',
          );
      }
}