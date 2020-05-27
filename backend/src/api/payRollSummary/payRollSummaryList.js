const PermissionChecker = require('../../services/iam/permissionChecker');
const permissions = require('../../security/permissions')
  .values;
const payRollSummaryService = require('../../services/payRollSummaryService');

module.exports = async (req, res) => {
  try {
    new PermissionChecker(req).validateHas(
      permissions.uomRead,
    );

    const payload = await new payRollSummaryService(
      req,
    ).findAndCountAll(req.query);

    res.status(200).send(payload);
  } catch (error) {
    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send(error.message);
    }

    console.error(error);
    return res.status(500).send(error.message);
  }
};
