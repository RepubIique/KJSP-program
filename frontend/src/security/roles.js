import { i18n } from 'i18n';
import _values from 'lodash/values';

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

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }
}

export default Roles;
