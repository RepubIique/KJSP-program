import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,


        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      workerRegistrationImport: {
        id: 'workerRegistrationImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workerRegistrationEditor,
        ],
      },
      workerRegistrationCreate: {
        id: 'workerRegistrationCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workerRegistrationEditor,
        ],
        allowedStorageFolders: ['workerRegistration'],
      },
      workerRegistrationEdit: {
        id: 'workerRegistrationEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workerRegistrationEditor,
        ],
        allowedStorageFolders: ['workerRegistration'],
      },
      workerRegistrationDestroy: {
        id: 'workerRegistrationDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workerRegistrationEditor,
        ],
        allowedStorageFolders: ['workerRegistration'],
      },
      workerRegistrationRead: {
        id: 'workerRegistrationRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.workerRegistrationEditor,
          roles.workerRegistrationViewer,
        ],
      },
      workerRegistrationAutocomplete: {
        id: 'workerRegistrationAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.workerRegistrationEditor,
          roles.workerRegistrationViewer,
          roles.attendanceEditor,
          roles.attendanceViewer,
          roles.deductionEditor,
          roles.deductionViewer,
          roles.workDoneEditor,
          roles.workDoneViewer,
          roles.checkrollEditor,
          roles.checkrollViewer,
        ],
      },

      attendanceImport: {
        id: 'attendanceImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
      },
      attendanceCreate: {
        id: 'attendanceCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
        allowedStorageFolders: ['attendance'],
      },
      attendanceEdit: {
        id: 'attendanceEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
        allowedStorageFolders: ['attendance'],
      },
      attendanceDestroy: {
        id: 'attendanceDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.attendanceEditor,
        ],
        allowedStorageFolders: ['attendance'],
      },
      attendanceRead: {
        id: 'attendanceRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.attendanceEditor,
          roles.attendanceViewer,
        ],
      },
      attendanceAutocomplete: {
        id: 'attendanceAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.attendanceEditor,
          roles.attendanceViewer,

        ],
      },

      deductionImport: {
        id: 'deductionImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deductionEditor,
        ],
      },
      deductionCreate: {
        id: 'deductionCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deductionEditor,
        ],
        allowedStorageFolders: ['deduction'],
      },
      deductionEdit: {
        id: 'deductionEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deductionEditor,
        ],
        allowedStorageFolders: ['deduction'],
      },
      deductionDestroy: {
        id: 'deductionDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.deductionEditor,
        ],
        allowedStorageFolders: ['deduction'],
      },
      deductionRead: {
        id: 'deductionRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.deductionEditor,
          roles.deductionViewer,
        ],
      },
      deductionAutocomplete: {
        id: 'deductionAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.deductionEditor,
          roles.deductionViewer,

        ],
      },

      workDoneImport: {
        id: 'workDoneImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workDoneEditor,
        ],
      },
      workDoneCreate: {
        id: 'workDoneCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workDoneEditor,
        ],
        allowedStorageFolders: ['workDone'],
      },
      workDoneEdit: {
        id: 'workDoneEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workDoneEditor,
        ],
        allowedStorageFolders: ['workDone'],
      },
      workDoneDestroy: {
        id: 'workDoneDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workDoneEditor,
        ],
        allowedStorageFolders: ['workDone'],
      },
      workDoneRead: {
        id: 'workDoneRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.workDoneEditor,
          roles.workDoneViewer,
        ],
      },
      workDoneAutocomplete: {
        id: 'workDoneAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.workDoneEditor,
          roles.workDoneViewer,

        ],
      },

      ffbImport: {
        id: 'ffbImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.ffbEditor,
        ],
      },
      ffbCreate: {
        id: 'ffbCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.ffbEditor,
        ],
        allowedStorageFolders: ['ffb'],
      },
      ffbEdit: {
        id: 'ffbEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.ffbEditor,
        ],
        allowedStorageFolders: ['ffb'],
      },
      ffbDestroy: {
        id: 'ffbDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.ffbEditor,
        ],
        allowedStorageFolders: ['ffb'],
      },
      ffbRead: {
        id: 'ffbRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.ffbEditor,
          roles.ffbViewer,
        ],
      },
      ffbAutocomplete: {
        id: 'ffbAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.ffbEditor,
          roles.ffbViewer,

        ],
      },

      checkrollImport: {
        id: 'checkrollImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkrollEditor,
        ],
      },
      checkrollCreate: {
        id: 'checkrollCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkrollEditor,
        ],
        allowedStorageFolders: ['checkroll'],
      },
      checkrollEdit: {
        id: 'checkrollEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkrollEditor,
        ],
        allowedStorageFolders: ['checkroll'],
      },
      checkrollDestroy: {
        id: 'checkrollDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.checkrollEditor,
        ],
        allowedStorageFolders: ['checkroll'],
      },
      checkrollRead: {
        id: 'checkrollRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.checkrollEditor,
          roles.checkrollViewer,
        ],
      },
      checkrollAutocomplete: {
        id: 'checkrollAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.checkrollEditor,
          roles.checkrollViewer,

        ],
      },

      subdivisionImport: {
        id: 'subdivisionImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.subdivisionEditor,
        ],
      },
      subdivisionCreate: {
        id: 'subdivisionCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.subdivisionEditor,
        ],
        allowedStorageFolders: ['subdivision'],
      },
      subdivisionEdit: {
        id: 'subdivisionEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.subdivisionEditor,
        ],
        allowedStorageFolders: ['subdivision'],
      },
      subdivisionDestroy: {
        id: 'subdivisionDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.subdivisionEditor,
        ],
        allowedStorageFolders: ['subdivision'],
      },
      subdivisionRead: {
        id: 'subdivisionRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.subdivisionEditor,
          roles.subdivisionViewer,
        ],
      },
      subdivisionAutocomplete: {
        id: 'subdivisionAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.subdivisionEditor,
          roles.subdivisionViewer,
          roles.workerRegistrationEditor,
          roles.workerRegistrationViewer,
          roles.attendanceEditor,
          roles.attendanceViewer,
          roles.ffbEditor,
          roles.ffbViewer,
        ],
      },

      workcodeImport: {
        id: 'workcodeImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workcodeEditor,
        ],
      },
      workcodeCreate: {
        id: 'workcodeCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workcodeEditor,
        ],
        allowedStorageFolders: ['workcode'],
      },
      workcodeEdit: {
        id: 'workcodeEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workcodeEditor,
        ],
        allowedStorageFolders: ['workcode'],
      },
      workcodeDestroy: {
        id: 'workcodeDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.workcodeEditor,
        ],
        allowedStorageFolders: ['workcode'],
      },
      workcodeRead: {
        id: 'workcodeRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.workcodeEditor,
          roles.workcodeViewer,
        ],
      },
      workcodeAutocomplete: {
        id: 'workcodeAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.workcodeEditor,
          roles.workcodeViewer,
          roles.workDoneEditor,
          roles.workDoneViewer,
          roles.ffbEditor,
          roles.ffbViewer,
          roles.checkrollEditor,
          roles.checkrollViewer,
        ],
      },

      weekImport: {
        id: 'weekImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.weekEditor,
        ],
      },
      weekCreate: {
        id: 'weekCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.weekEditor,
        ],
        allowedStorageFolders: ['week'],
      },
      weekEdit: {
        id: 'weekEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.weekEditor,
        ],
        allowedStorageFolders: ['week'],
      },
      weekDestroy: {
        id: 'weekDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.weekEditor,
        ],
        allowedStorageFolders: ['week'],
      },
      weekRead: {
        id: 'weekRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.weekEditor,
          roles.weekViewer,
        ],
      },
      weekAutocomplete: {
        id: 'weekAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.weekEditor,
          roles.weekViewer,
          roles.attendanceEditor,
          roles.attendanceViewer,
          roles.workDoneEditor,
          roles.workDoneViewer,
          roles.checkrollEditor,
          roles.checkrollViewer,
        ],
      },

      estateImport: {
        id: 'estateImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.estateEditor,
        ],
      },
      estateCreate: {
        id: 'estateCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.estateEditor,
        ],
        allowedStorageFolders: ['estate'],
      },
      estateEdit: {
        id: 'estateEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.estateEditor,
        ],
        allowedStorageFolders: ['estate'],
      },
      estateDestroy: {
        id: 'estateDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.estateEditor,
        ],
        allowedStorageFolders: ['estate'],
      },
      estateRead: {
        id: 'estateRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.estateEditor,
          roles.estateViewer,
        ],
      },
      estateAutocomplete: {
        id: 'estateAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.estateEditor,
          roles.estateViewer,
          roles.ffbEditor,
          roles.ffbViewer,
        ],
      },

      millImport: {
        id: 'millImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.millEditor,
        ],
      },
      millCreate: {
        id: 'millCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.millEditor,
        ],
        allowedStorageFolders: ['mill'],
      },
      millEdit: {
        id: 'millEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.millEditor,
        ],
        allowedStorageFolders: ['mill'],
      },
      millDestroy: {
        id: 'millDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.millEditor,
        ],
        allowedStorageFolders: ['mill'],
      },
      millRead: {
        id: 'millRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.millEditor,
          roles.millViewer,
        ],
      },
      millAutocomplete: {
        id: 'millAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.millEditor,
          roles.millViewer,
          roles.ffbEditor,
          roles.ffbViewer,
        ],
      },

      designationImport: {
        id: 'designationImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.designationEditor,
        ],
      },
      designationCreate: {
        id: 'designationCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.designationEditor,
        ],
        allowedStorageFolders: ['designation'],
      },
      designationEdit: {
        id: 'designationEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.designationEditor,
        ],
        allowedStorageFolders: ['designation'],
      },
      designationDestroy: {
        id: 'designationDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.designationEditor,
        ],
        allowedStorageFolders: ['designation'],
      },
      designationRead: {
        id: 'designationRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.designationEditor,
          roles.designationViewer,
        ],
      },
      designationAutocomplete: {
        id: 'designationAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.designationEditor,
          roles.designationViewer,
          roles.workerRegistrationEditor,
          roles.workerRegistrationViewer,
        ],
      },

      blocksImport: {
        id: 'blocksImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.blocksEditor,
        ],
      },
      blocksCreate: {
        id: 'blocksCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.blocksEditor,
        ],
        allowedStorageFolders: ['blocks'],
      },
      blocksEdit: {
        id: 'blocksEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.blocksEditor,
        ],
        allowedStorageFolders: ['blocks'],
      },
      blocksDestroy: {
        id: 'blocksDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.blocksEditor,
        ],
        allowedStorageFolders: ['blocks'],
      },
      blocksRead: {
        id: 'blocksRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.blocksEditor,
          roles.blocksViewer,
        ],
      },
      blocksAutocomplete: {
        id: 'blocksAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.blocksEditor,
          roles.blocksViewer,
          roles.checkrollEditor,
          roles.checkrollViewer,
        ],
      },

      uomImport: {
        id: 'uomImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.uomEditor,
        ],
      },
      uomCreate: {
        id: 'uomCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.uomEditor,
        ],
        allowedStorageFolders: ['uom'],
      },
      uomEdit: {
        id: 'uomEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.uomEditor,
        ],
        allowedStorageFolders: ['uom'],
      },
      uomDestroy: {
        id: 'uomDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.uomEditor,
        ],
        allowedStorageFolders: ['uom'],
      },
      uomRead: {
        id: 'uomRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.uomEditor,
          roles.uomViewer,
        ],
      },
      uomAutocomplete: {
        id: 'uomAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.uomEditor,
          roles.uomViewer,
          roles.workcodeEditor,
          roles.workcodeViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
