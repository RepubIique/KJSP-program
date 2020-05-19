import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import workerRegistration from 'modules/workerRegistration/workerRegistrationReducers';
import attendance from 'modules/attendance/attendanceReducers';
import deduction from 'modules/deduction/deductionReducers';
import workDone from 'modules/workDone/workDoneReducers';
import ffb from 'modules/ffb/ffbReducers';
import checkroll from 'modules/checkroll/checkrollReducers';
import subdivision from 'modules/subdivision/subdivisionReducers';
import workcode from 'modules/workcode/workcodeReducers';
import week from 'modules/week/weekReducers';
import estate from 'modules/estate/estateReducers';
import mill from 'modules/mill/millReducers';
import designation from 'modules/designation/designationReducers';
import blocks from 'modules/blocks/blocksReducers';
import uom from 'modules/uom/uomReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    workerRegistration,
    attendance,
    deduction,
    workDone,
    ffb,
    checkroll,
    subdivision,
    workcode,
    week,
    estate,
    mill,
    designation,
    blocks,
    uom,
  });
