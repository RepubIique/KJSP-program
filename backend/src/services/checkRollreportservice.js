const UomRepository = require('../database/repositories/uomRepository');
const ValidationError = require('../errors/validationError');
const SequelizeRepository = require('../database/repositories/sequelizeRepository');

// so .. we need an instance of sequelize, not just...  const sequelize = require('sequelize')
// this below seems to be working ...
const sequelize = require('../database/models').sequelize;

/**
 * Handles checkRollreport operations
 */
module.exports = class checkRollreportService {
    async findAndCountAll(args) {
        console.log('------------------------')
        return sequelize.query(
            'SELECT * from checkRollreport',
          );
      }
}