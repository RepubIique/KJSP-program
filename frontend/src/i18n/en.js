const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
  },

  app: {
    title: 'Payroll App',
  },

  entities: {
    workerRegistration: {
      name: 'workerRegistration',
      label: 'Worker Registration',
      menu: 'Worker Registration',
      exporterFileName: 'workerRegistration_export',
      list: {
        menu: 'Worker Registration',
        title: 'Worker Registration',
      },
      create: {
        success: 'Worker Registration saved successfully',
      },
      update: {
        success: 'Worker Registration saved successfully',
      },
      destroy: {
        success: 'Worker Registration deleted successfully',
      },
      destroyAll: {
        success:
          'Worker Registration(s) deleted successfully',
      },
      edit: {
        title: 'Edit Worker Registration',
      },
      fields: {
        id: 'Id',
        workerID: 'Worker ID',
        workerName: 'Worker Name',
        designation: 'Designation',
        passportICNo: 'Passport/IC No',
        passportExpireddateRange: 'Passport Expired date',
        passportExpireddate: 'Passport Expired date',
        dateofEmploymentRange: 'Date of Employment',
        dateofEmployment: 'Date of Employment',
        superiorName: 'Superior Name',
        dateofBirthRange: 'Date of Birth',
        dateofBirth: 'Date of Birth',
        ageRange: 'Age',
        age: 'Age',
        gender: 'Gender',
        placeofBirth: 'Place of Birth',
        nationality: 'Nationality',
        religion: 'Religion',
        race: 'Race',
        maritalStatus: 'Marital Status',
        spouseName: 'Spouse Name',
        noofchildRange: 'No. of child',
        noofchild: 'No. of child',
        bank: 'Bank',
        bankAccountNoRange: 'Bank Account No.',
        bankAccountNo: 'Bank Account No.',
        socsoNoRange: 'Socso No.',
        socsoNo: 'Socso No.',
        subdivision: 'Subdivision',
        image: 'Image',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        gender: {
          Male: 'Male',
          Female: 'Female',
          Other: 'Other',
        },
        maritalStatus: {
          Married: 'Married',
          Divorced: 'Divorced',
          Single: 'Single',
        },
      },
      new: {
        title: 'New Worker Registration',
      },
      view: {
        title: 'View Worker Registration',
      },
      importer: {
        title: 'Import Worker Registration',
        fileName: 'workerRegistration_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    attendance: {
      name: 'attendance',
      label: 'Attendances',
      menu: 'Attendances',
      exporterFileName: 'attendance_export',
      list: {
        menu: 'Attendances',
        title: 'Attendances',
      },
      create: {
        success: 'Attendance saved successfully',
      },
      update: {
        success: 'Attendance saved successfully',
      },
      destroy: {
        success: 'Attendance deleted successfully',
      },
      destroyAll: {
        success: 'Attendance(s) deleted successfully',
      },
      edit: {
        title: 'Edit Attendance',
      },
      fields: {
        id: 'Id',
        subDivision: 'Sub Division',
        week: 'Week',
        workerID: "Worker's ID",
        totalWorkingDayRange: 'Total Working Day',
        totalWorkingDay: 'Total Working Day',
        totalWorkingHoursRange: 'Total Working Hours',
        totalWorkingHours: 'Total Working Hours',
        totalRestDayRange: 'Total Rest Day',
        totalRestDay: 'Total Rest Day',
        totalPublicHolidayRange: 'Total Public Holiday',
        totalPublicHoliday: 'Total Public Holiday',
        totalAbsentRange: 'Total Absent',
        totalAbsent: 'Total Absent',
        totalSickLeaveRange: 'Total Sick Leave',
        totalSickLeave: 'Total Sick Leave',
        totalOnLeaveRange: 'Total On Leave',
        totalOnLeave: 'Total On Leave',
        totalOvertimeHourRange: 'Total Overtime (Hour)',
        totalOvertimeHour: 'Total Overtime (Hour)',
        month: 'Month',
        yearRange: 'Year',
        year: 'Year',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        month: {
          January: 'January',
          February: 'February',
          March: 'March',
          April: 'April',
          May: 'May',
          June: 'June',
          July: 'July',
          August: 'August',
          September: 'September',
          October: 'October',
          November: 'November',
          December: 'December',
        },
      },
      new: {
        title: 'New Attendance',
      },
      view: {
        title: 'View Attendance',
      },
      importer: {
        title: 'Import Attendances',
        fileName: 'attendance_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    deduction: {
      name: 'deduction',
      label: 'Deductions',
      menu: 'Deductions',
      exporterFileName: 'deduction_export',
      list: {
        menu: 'Deductions',
        title: 'Deductions',
      },
      create: {
        success: 'Deduction saved successfully',
      },
      update: {
        success: 'Deduction saved successfully',
      },
      destroy: {
        success: 'Deduction deleted successfully',
      },
      destroyAll: {
        success: 'Deduction(s) deleted successfully',
      },
      edit: {
        title: 'Edit Deduction',
      },
      fields: {
        id: 'Id',
        workersID: "Worker's ID",
        deductfor: 'Deduct for',
        bfrmRange: 'Bfrm',
        bfrm: 'Bfrm',
        currentRMRange: 'Current (RM)',
        currentRM: 'Current (RM)',
        deductionRMRange: 'Deduction (RM)',
        deductionRM: 'Deduction (RM)',
        cfrmRange: 'C/F (RM)',
        cfrm: 'C/F (RM)',
        month: 'Month',
        yearRange: 'Year',
        year: 'Year',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        month: {
          January: 'January',
          February: 'February',
          March: 'March',
          April: 'April',
          May: 'May',
          June: 'June',
          July: 'July',
          August: 'August',
          September: 'September',
          October: 'October',
          November: 'November',
          December: 'December',
        },
      },
      new: {
        title: 'New Deduction',
      },
      view: {
        title: 'View Deduction',
      },
      importer: {
        title: 'Import Deductions',
        fileName: 'deduction_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    workDone: {
      name: 'workDone',
      label: 'Work Done',
      menu: 'Work Done',
      exporterFileName: 'workDone_export',
      list: {
        menu: 'Work Done',
        title: 'Work Done',
      },
      create: {
        success: 'Work Done saved successfully',
      },
      update: {
        success: 'Work Done saved successfully',
      },
      destroy: {
        success: 'Work Done deleted successfully',
      },
      destroyAll: {
        success: 'Work Done(s) deleted successfully',
      },
      edit: {
        title: 'Edit Work Done',
      },
      fields: {
        id: 'Id',
        workerID: 'Worker ID',
        workcode: 'WORK CODE',
        quantityRange: 'Quantity',
        quantity: 'Quantity',
        blockRange: 'Block',
        block: 'Block',
        month: 'Month',
        week: 'Week',
        yearRange: 'Year',
        year: 'Year',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        month: {
          January: 'January',
          February: 'February',
          March: 'March',
          April: 'April',
          May: 'May',
          June: 'June',
          July: 'July',
          August: 'August',
          September: 'September',
          October: 'October',
          November: 'November',
          December: 'December',
        },
      },
      new: {
        title: 'New Work Done',
      },
      view: {
        title: 'View Work Done',
      },
      importer: {
        title: 'Import Work Done',
        fileName: 'workDone_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    ffb: {
      name: 'ffb',
      label: 'FFB',
      menu: 'FFB',
      exporterFileName: 'ffb_export',
      list: {
        menu: 'FFB',
        title: 'FFB',
      },
      create: {
        success: 'FFB saved successfully',
      },
      update: {
        success: 'FFB saved successfully',
      },
      destroy: {
        success: 'FFB deleted successfully',
      },
      destroyAll: {
        success: 'FFB(s) deleted successfully',
      },
      edit: {
        title: 'Edit FFB',
      },
      fields: {
        id: 'Id',
        dateRange: 'Date',
        date: 'Date',
        estate: 'Estate',
        subdivision: 'Subdivision',
        mill: 'Mill',
        fFBTonnageMTRange: 'FFB Tonnage(MT)',
        fFBTonnageMT: 'FFB Tonnage(MT)',
        month: 'Month',
        year: 'Year',
        company: 'Company',
        millticketNo: 'Mill ticket No.',
        sealNoRange: 'Seal No.',
        sealNo: 'Seal No.',
        deliverynotenoRange: 'Delivery note no.',
        deliverynoteno: 'Delivery note no.',
        lorryNo: 'Lorry No.',
        block: 'Block',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        month: {
          January: 'January',
          February: 'February',
          March: 'March',
          April: 'April',
          May: 'May',
          June: 'June',
          July: 'July',
          August: 'August',
          September: 'September',
          October: 'October',
          November: 'November',
          December: 'December',
        },
      },
      new: {
        title: 'New FFB',
      },
      view: {
        title: 'View FFB',
      },
      importer: {
        title: 'Import FFB',
        fileName: 'ffb_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    checkroll: {
      name: 'checkroll',
      label: 'Checkrolls',
      menu: 'Checkrolls',
      exporterFileName: 'checkroll_export',
      list: {
        menu: 'Checkrolls',
        title: 'Checkrolls',
      },
      create: {
        success: 'Checkroll saved successfully',
      },
      update: {
        success: 'Checkroll saved successfully',
      },
      destroy: {
        success: 'Checkroll deleted successfully',
      },
      destroyAll: {
        success: 'Checkroll(s) deleted successfully',
      },
      edit: {
        title: 'Edit Checkroll',
      },
      fields: {
        id: 'Id',
        workerID: 'Worker ID',
        workcode: 'Workcode',
        noRange: 'No',
        no: 'No',
        quantityRange: 'Quantity',
        quantity: 'Quantity',
        block: 'Block',
        month: 'Month',
        week: 'Week',
        yearRange: 'Year',
        year: 'Year',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        month: {
          January: 'January',
          February: 'February',
          March: 'March',
          April: 'April',
          May: 'May',
          June: 'June',
          July: 'July',
          August: 'August',
          September: 'September',
          October: 'October',
          November: 'November',
          December: 'December',
        },
      },
      new: {
        title: 'New Checkroll',
      },
      view: {
        title: 'View Checkroll',
      },
      importer: {
        title: 'Import Checkrolls',
        fileName: 'checkroll_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    subdivision: {
      name: 'subdivision',
      label: 'Subdivisions',
      menu: 'Subdivisions',
      exporterFileName: 'subdivision_export',
      list: {
        menu: 'Subdivisions',
        title: 'Subdivisions',
      },
      create: {
        success: 'Subdivision saved successfully',
      },
      update: {
        success: 'Subdivision saved successfully',
      },
      destroy: {
        success: 'Subdivision deleted successfully',
      },
      destroyAll: {
        success: 'Subdivision(s) deleted successfully',
      },
      edit: {
        title: 'Edit Subdivision',
      },
      fields: {
        id: 'Id',
        subdivision: 'Sub Division',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Subdivision',
      },
      view: {
        title: 'View Subdivision',
      },
      importer: {
        title: 'Import Subdivisions',
        fileName: 'subdivision_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    workcode: {
      name: 'workcode',
      label: 'Workcodes',
      menu: 'Workcodes',
      exporterFileName: 'workcode_export',
      list: {
        menu: 'Workcodes',
        title: 'Workcodes',
      },
      create: {
        success: 'Work Code saved successfully',
      },
      update: {
        success: 'Work Code saved successfully',
      },
      destroy: {
        success: 'Work Code deleted successfully',
      },
      destroyAll: {
        success: 'Work Code(s) deleted successfully',
      },
      edit: {
        title: 'Edit Work Code',
      },
      fields: {
        id: 'Id',
        accCode: 'Account Code',
        workCategory: 'Work Category',
        typeofWork: 'Type of Work',
        workDescription: 'Work Description',
        rateRange: 'Rate',
        rate: 'Rate',
        uom: 'Uom',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Work Code',
      },
      view: {
        title: 'View Work Code',
      },
      importer: {
        title: 'Import Workcodes',
        fileName: 'workcode_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    week: {
      name: 'week',
      label: 'Weeks',
      menu: 'Weeks',
      exporterFileName: 'week_export',
      list: {
        menu: 'Weeks',
        title: 'Weeks',
      },
      create: {
        success: 'Week saved successfully',
      },
      update: {
        success: 'Week saved successfully',
      },
      destroy: {
        success: 'Week deleted successfully',
      },
      destroyAll: {
        success: 'Week(s) deleted successfully',
      },
      edit: {
        title: 'Edit Week',
      },
      fields: {
        id: 'Id',
        week: 'Week',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Week',
      },
      view: {
        title: 'View Week',
      },
      importer: {
        title: 'Import Weeks',
        fileName: 'week_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    estate: {
      name: 'estate',
      label: 'Estates',
      menu: 'Estates',
      exporterFileName: 'estate_export',
      list: {
        menu: 'Estates',
        title: 'Estates',
      },
      create: {
        success: 'Estate saved successfully',
      },
      update: {
        success: 'Estate saved successfully',
      },
      destroy: {
        success: 'Estate deleted successfully',
      },
      destroyAll: {
        success: 'Estate(s) deleted successfully',
      },
      edit: {
        title: 'Edit Estate',
      },
      fields: {
        id: 'Id',
        estate: 'Estate',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Estate',
      },
      view: {
        title: 'View Estate',
      },
      importer: {
        title: 'Import Estates',
        fileName: 'estate_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    mill: {
      name: 'mill',
      label: 'Mills',
      menu: 'Mills',
      exporterFileName: 'mill_export',
      list: {
        menu: 'Mills',
        title: 'Mills',
      },
      create: {
        success: 'Mill saved successfully',
      },
      update: {
        success: 'Mill saved successfully',
      },
      destroy: {
        success: 'Mill deleted successfully',
      },
      destroyAll: {
        success: 'Mill(s) deleted successfully',
      },
      edit: {
        title: 'Edit Mill',
      },
      fields: {
        id: 'Id',
        mill: 'Mill',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Mill',
      },
      view: {
        title: 'View Mill',
      },
      importer: {
        title: 'Import Mills',
        fileName: 'mill_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    designation: {
      name: 'designation',
      label: 'Designations',
      menu: 'Designations',
      exporterFileName: 'designation_export',
      list: {
        menu: 'Designations',
        title: 'Designations',
      },
      create: {
        success: 'Designation saved successfully',
      },
      update: {
        success: 'Designation saved successfully',
      },
      destroy: {
        success: 'Designation deleted successfully',
      },
      destroyAll: {
        success: 'Designation(s) deleted successfully',
      },
      edit: {
        title: 'Edit Designation',
      },
      fields: {
        id: 'Id',
        designation: 'Designation',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Designation',
      },
      view: {
        title: 'View Designation',
      },
      importer: {
        title: 'Import Designations',
        fileName: 'designation_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    blocks: {
      name: 'blocks',
      label: 'Blocks',
      menu: 'Blocks',
      exporterFileName: 'blocks_export',
      list: {
        menu: 'Blocks',
        title: 'Blocks',
      },
      create: {
        success: 'Blocks saved successfully',
      },
      update: {
        success: 'Blocks saved successfully',
      },
      destroy: {
        success: 'Blocks deleted successfully',
      },
      destroyAll: {
        success: 'Blocks(s) deleted successfully',
      },
      edit: {
        title: 'Edit Blocks',
      },
      fields: {
        id: 'Id',
        blocks: 'Blocks',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Blocks',
      },
      view: {
        title: 'View Blocks',
      },
      importer: {
        title: 'Import Blocks',
        fileName: 'blocks_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    uom: {
      name: 'uom',
      label: 'Uoms',
      menu: 'Uoms',
      exporterFileName: 'uom_export',
      list: {
        menu: 'Uoms',
        title: 'Uoms',
      },
      create: {
        success: 'Uom saved successfully',
      },
      update: {
        success: 'Uom saved successfully',
      },
      destroy: {
        success: 'Uom deleted successfully',
      },
      destroyAll: {
        success: 'Uom(s) deleted successfully',
      },
      edit: {
        title: 'Edit Uom',
      },
      fields: {
        id: 'Id',
        uom: 'Uom',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Uom',
      },
      view: {
        title: 'View Uom',
      },
      importer: {
        title: 'Import Uoms',
        fileName: 'uom_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'Full access to all resources',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `Full access to manage users roles`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    workerRegistrationEditor: {
      label: 'Worker Registration Editor',
      description: 'Edit access to Worker Registration',
    },
    workerRegistrationViewer: {
      label: 'Worker Registration Viewer',
      description: 'View access to Worker Registration',
    },
    attendanceEditor: {
      label: 'Attendance Editor',
      description: 'Edit access to Attendances',
    },
    attendanceViewer: {
      label: 'Attendance Viewer',
      description: 'View access to Attendances',
    },
    deductionEditor: {
      label: 'Deduction Editor',
      description: 'Edit access to Deductions',
    },
    deductionViewer: {
      label: 'Deduction Viewer',
      description: 'View access to Deductions',
    },
    workDoneEditor: {
      label: 'Work Done Editor',
      description: 'Edit access to Work Done',
    },
    workDoneViewer: {
      label: 'Work Done Viewer',
      description: 'View access to Work Done',
    },
    ffbEditor: {
      label: 'FFB Editor',
      description: 'Edit access to FFB',
    },
    ffbViewer: {
      label: 'FFB Viewer',
      description: 'View access to FFB',
    },
    checkrollEditor: {
      label: 'Checkroll Editor',
      description: 'Edit access to Checkrolls',
    },
    checkrollViewer: {
      label: 'Checkroll Viewer',
      description: 'View access to Checkrolls',
    },
    subdivisionEditor: {
      label: 'Subdivision Editor',
      description: 'Edit access to Subdivisions',
    },
    subdivisionViewer: {
      label: 'Subdivision Viewer',
      description: 'View access to Subdivisions',
    },
    workcodeEditor: {
      label: 'Work Code Editor',
      description: 'Edit access to Workcodes',
    },
    workcodeViewer: {
      label: 'Work Code Viewer',
      description: 'View access to Workcodes',
    },
    weekEditor: {
      label: 'Week Editor',
      description: 'Edit access to Weeks',
    },
    weekViewer: {
      label: 'Week Viewer',
      description: 'View access to Weeks',
    },
    estateEditor: {
      label: 'Estate Editor',
      description: 'Edit access to Estates',
    },
    estateViewer: {
      label: 'Estate Viewer',
      description: 'View access to Estates',
    },
    millEditor: {
      label: 'Mill Editor',
      description: 'Edit access to Mills',
    },
    millViewer: {
      label: 'Mill Viewer',
      description: 'View access to Mills',
    },
    designationEditor: {
      label: 'Designation Editor',
      description: 'Edit access to Designations',
    },
    designationViewer: {
      label: 'Designation Viewer',
      description: 'View access to Designations',
    },
    blocksEditor: {
      label: 'Blocks Editor',
      description: 'Edit access to Blocks',
    },
    blocksViewer: {
      label: 'Blocks Viewer',
      description: 'View access to Blocks',
    },
    uomEditor: {
      label: 'Uom Editor',
      description: 'Edit access to Uoms',
    },
    uomViewer: {
      label: 'Uom Viewer',
      description: 'View access to Uoms',
    },
  },

  iam: {
    title: 'Identity and Access Management',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space.<br/> Relationships must be the ID of the referenced records separated by space.<br/> Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      shade: 'Shade',
    },
  },
  home: {
    menu: 'Home',
    message: `Created by Team Digital Studios.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Your account is disabled',
    'auth/user-not-found': `Sorry, we don't recognize your credentials`,
    'auth/wrong-password': `Sorry, we don't recognize your credentials`,
    'auth/weak-password': 'This password is too weak',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please provide a valid email',
    'auth/account-exists-with-different-credential':
      'Email is already in use for a different authentication method.',
    'auth/credential-already-in-use':
      'Credentials are already in use',
  },
};

export default en;
