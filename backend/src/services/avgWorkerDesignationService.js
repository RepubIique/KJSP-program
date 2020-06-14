// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;

/**
 * Handles barChartperf operations
 */
module.exports = class avgWorkerDesignationService {
    async findAndCountAll(args) {
        console.log('--------- avgWorkerDesignation Service --------')
        return sequelize.query(
            'SELECT * from avgWorkerDesignation',
          );
      }
}