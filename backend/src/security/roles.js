/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      attendanceEditor: 'attendanceEditor',
      attendanceViewer: 'attendanceViewer',
      deductionEditor: 'deductionEditor',
      deductionViewer: 'deductionViewer',
      workerRegistrationEditor: 'workerRegistrationEditor',
      workerRegistrationViewer: 'workerRegistrationViewer',
      workDoneEditor: 'workDoneEditor',
      workDoneViewer: 'workDoneViewer',
      ffbEditor: 'ffbEditor',
      ffbViewer: 'ffbViewer',
      checkrollEditor: 'checkrollEditor',
      checkrollViewer: 'checkrollViewer',
      subdivisionEditor: 'subdivisionEditor',
      subdivisionViewer: 'subdivisionViewer',
      workcodeEditor: 'workcodeEditor',
      workcodeViewer: 'workcodeViewer',
      weekEditor: 'weekEditor',
      weekViewer: 'weekViewer',
      estateEditor: 'estateEditor',
      estateViewer: 'estateViewer',
      millEditor: 'millEditor',
      millViewer: 'millViewer',
      designationEditor: 'designationEditor',
      designationViewer: 'designationViewer',
      blocksEditor: 'blocksEditor',
      blocksViewer: 'blocksViewer',
      uomEditor: 'uomEditor',
      uomViewer: 'uomViewer',
    };
  }
}

module.exports = Roles;
