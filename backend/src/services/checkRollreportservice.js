const UomRepository = require('../database/repositories/uomRepository');
const ValidationError = require('../errors/validationError');
const SequelizeRepository = require('../database/repositories/sequelizeRepository');
const sequelize = require('sequelize')
/**
 * Handles checkRollreport operations
 */
module.exports = class checkRollreportService {
    async findAndCountAll(args) {
        return sequelize.query(
            'SELECT * from checkRollreport',
          );
      }
}