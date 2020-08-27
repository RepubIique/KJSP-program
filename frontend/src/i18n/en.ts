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
    confirm: 'Confirm',
  },

  app: {
    title: 'Application',
    adminP: 'Admin Setup',
    expense: 'Expenses',
    workersP: 'Workers Payroll',
    analysis: 'Analysis',
    revenue: 'Revenue',
    payslip:'Payslip'
  },

  entities: {
    location: {
        name: 'location',
        label: 'Locations',
        menu: 'Locations',
        exporterFileName: 'location_export',
        list: {
          menu: 'Locations',
          title: 'Locations',
        },
        create: {
          success: 'Location successfully saved',
        },
        update: {
          success: 'Location successfully saved',
        },
        destroy: {
          success: 'Location successfully deleted',
        },
        destroyAll: {
          success: 'Location(s) successfully deleted',
        },
        edit: {
          title: 'Edit Location',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Location',
        },
        view: {
          title: 'View Location',
        },
        importer: {
          title: 'Import Locations',
          fileName: 'location_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    workerRegistration: {
        name: 'workerRegistration',
        label: 'WorkerRegistrations',
        menu: 'Worker Registrations',
        exporterFileName: 'workerRegistration_export',
        list: {
          menu: 'WorkerRegistrations',
          title: 'WorkerRegistrations',
        },
        create: {
          success: 'WorkerRegistration successfully saved',
        },
        update: {
          success: 'WorkerRegistration successfully saved',
        },
        destroy: {
          success: 'WorkerRegistration successfully deleted',
        },
        destroyAll: {
          success: 'WorkerRegistration(s) successfully deleted',
        },
        edit: {
          title: 'Edit WorkerRegistration',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'designation': 'Designation',
          'passport': 'Passport/IC No:',
          'permitExpiryDateRange': 'Permit Expiry Date',
          'permitExpiryDate': 'Permit Expiry Date',
          'dateEmployedRange': 'Date of Employment',
          'dateEmployed': 'Date of Employment',
          'gang': 'Gang',
          'superiorName': 'Superior Name',
          'dobRange': 'Date of Birth',
          'dob': 'Date of Birth',
          'ageRange': 'Age',
          'age': 'Age',
          'gender': 'Gender',
          'placeOfBirth': 'PlaceOfBirth',
          'nationality': 'Nationality',
          'religion': 'Religion',
          'race': 'Race',
          'maritalStatus': 'Marital Status',
          'spouse': 'Spouse Name',
          'childrenRange': 'No. of child',
          'children': 'No. of child',
          'bank': 'Bank',
          'bankNo': 'Bank Account No',
          'socso': 'Socso',
          'location': 'Location',
          'status': 'Status',
          'image': 'Image',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'Male': 'Male',
            'Female': 'Female',
            'Other': 'Other',
          },
          'maritalStatus': {
            'Married': 'Married',
            'Divorced': 'Divorced',
            'Single': 'Single',
            'Other': 'Other',
          },
          'status': {
            'Active': 'Active',
            'On Leave': 'On Leave',
            'Resigned': 'Resigned',
            'Absconded': 'Absconded',
          },
        },
        new: {
          title: 'New WorkerRegistration',
        },
        view: {
          title: 'View WorkerRegistration',
        },
        importer: {
          title: 'Import WorkerRegistrations',
          fileName: 'workerRegistration_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    workCode: {
        name: 'workCode',
        label: 'WorkCodes',
        menu: 'Work Codes',
        exporterFileName: 'workCode_export',
        list: {
          menu: 'WorkCodes',
          title: 'WorkCodes',
        },
        create: {
          success: 'WorkCode successfully saved',
        },
        update: {
          success: 'WorkCode successfully saved',
        },
        destroy: {
          success: 'WorkCode successfully deleted',
        },
        destroyAll: {
          success: 'WorkCode(s) successfully deleted',
        },
        edit: {
          title: 'Edit WorkCode',
        },
        fields: {
          id: 'Id',
          'category': 'Work Category',
          'type': 'Type',
          'description': 'Work Description',
          'uom': 'Uom',
          'rateRange': 'Rate',
          'rate': 'Rate',
          'remarks': 'Remarks',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New WorkCode',
        },
        view: {
          title: 'View WorkCode',
        },
        importer: {
          title: 'Import WorkCodes',
          fileName: 'workCode_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    workDone: {
        name: 'workDone',
        label: 'WorkDones',
        menu: 'Work Done',
        exporterFileName: 'workDone_export',
        list: {
          menu: 'WorkDones',
          title: 'WorkDones',
        },
        create: {
          success: 'WorkDone successfully saved',
        },
        update: {
          success: 'WorkDone successfully saved',
        },
        destroy: {
          success: 'WorkDone successfully deleted',
        },
        destroyAll: {
          success: 'WorkDone(s) successfully deleted',
        },
        edit: {
          title: 'Edit WorkDone',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          'dateRange': 'Date',
          'date': 'Date',
          'worker': 'Worker',
          'blockRange': 'Block',
          'block': 'Block',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'remarks': 'Remarks',
          'amountRange': 'Amount',
          'amount': 'Amount',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New WorkDone',
        },
        view: {
          title: 'View WorkDone',
        },
        importer: {
          title: 'Import WorkDones',
          fileName: 'workDone_import_template',
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
          success: 'Attendance successfully saved',
        },
        update: {
          success: 'Attendance successfully saved',
        },
        destroy: {
          success: 'Attendance successfully deleted',
        },
        destroyAll: {
          success: 'Attendance(s) successfully deleted',
        },
        edit: {
          title: 'Edit Attendance',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          'dateRange': 'Date',
          'date': 'Date',
          'worker': 'Worker',
          'type': 'Type of Attendance',
          'hoursRange': 'Hours',
          'hours': 'Hours',
          'totalHoursRange': 'TotalHours',
          'totalHours': 'TotalHours',
          'overTimeRange': 'OverTime',
          'overTime': 'OverTime',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'Working day': 'Working day',
            'rest day': 'Rest day',
            'public holiday': 'Public holiday',
            'Absent': 'Absent',
            'Sick Leave': 'Sick Leave',
            'On leave': 'On leave',
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
          success: 'Deduction successfully saved',
        },
        update: {
          success: 'Deduction successfully saved',
        },
        destroy: {
          success: 'Deduction successfully deleted',
        },
        destroyAll: {
          success: 'Deduction(s) successfully deleted',
        },
        edit: {
          title: 'Edit Deduction',
        },
        fields: {
          id: 'Id',
          'worker': 'Worker',
          'bfRange': 'Bf',
          'bf': 'Bf',
          'creditRange': 'Credit',
          'credit': 'Credit',
          'deductionRange': 'Deduction',
          'deduction': 'Deduction',
          'cfRange': 'Cf',
          'cf': 'Cf',
          'dateRange': 'Date',
          'date': 'Date',
          'location': 'Location',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

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

    ffb: {
        name: 'ffb',
        label: 'Ffbs',
        menu: 'Ffbs',
        exporterFileName: 'ffb_export',
        list: {
          menu: 'Ffbs',
          title: 'Ffbs',
        },
        create: {
          success: 'Ffb successfully saved',
        },
        update: {
          success: 'Ffb successfully saved',
        },
        destroy: {
          success: 'Ffb successfully deleted',
        },
        destroyAll: {
          success: 'Ffb(s) successfully deleted',
        },
        edit: {
          title: 'Edit Ffb',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          'blockRange': 'Block',
          'block': 'Block',
          'budgetRange': 'Budget',
          'budget': 'Budget',
          'dateRange': 'Date',
          'date': 'Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Ffb',
        },
        view: {
          title: 'View Ffb',
        },
        importer: {
          title: 'Import Ffbs',
          fileName: 'ffb_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    fFBproduction: {
        name: 'fFBproduction',
        label: 'FFBproductions',
        menu: 'FFBproductions',
        exporterFileName: 'fFBproduction_export',
        list: {
          menu: 'FFBproductions',
          title: 'FFBproductions',
        },
        create: {
          success: 'FFBproduction successfully saved',
        },
        update: {
          success: 'FFBproduction successfully saved',
        },
        destroy: {
          success: 'FFBproduction successfully deleted',
        },
        destroyAll: {
          success: 'FFBproduction(s) successfully deleted',
        },
        edit: {
          title: 'Edit FFBproduction',
        },
        fields: {
          id: 'Id',
          'dateRange': 'Date',
          'date': 'Date',
          'location': 'Location',
          'mill': 'Mill',
          'blockRange': 'Block',
          'block': 'Block',
          'bunchesRange': 'Bunches',
          'bunches': 'Bunches',
          'mtRange': 'Mt',
          'mt': 'Mt',
          'looseFruitRange': 'LooseFruit',
          'looseFruit': 'LooseFruit',
          'bunchWeightRange': 'BunchWeight',
          'bunchWeight': 'BunchWeight',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New FFBproduction',
        },
        view: {
          title: 'View FFBproduction',
        },
        importer: {
          title: 'Import FFBproductions',
          fileName: 'fFBproduction_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    plantedArea: {
        name: 'plantedArea',
        label: 'PlantedAreas',
        menu: 'PlantedAreas',
        exporterFileName: 'plantedArea_export',
        list: {
          menu: 'PlantedAreas',
          title: 'PlantedAreas',
        },
        create: {
          success: 'PlantedArea successfully saved',
        },
        update: {
          success: 'PlantedArea successfully saved',
        },
        destroy: {
          success: 'PlantedArea successfully deleted',
        },
        destroyAll: {
          success: 'PlantedArea(s) successfully deleted',
        },
        edit: {
          title: 'Edit PlantedArea',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          'blockRange': 'Block',
          'block': 'Block',
          'plantedHaRange': 'PlantedHa',
          'plantedHa': 'PlantedHa',
          'totalPalmRange': 'TotalPalm',
          'totalPalm': 'TotalPalm',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New PlantedArea',
        },
        view: {
          title: 'View PlantedArea',
        },
        importer: {
          title: 'Import PlantedAreas',
          fileName: 'plantedArea_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
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
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSuccess: 'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
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
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantUrl: 'Workspace URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
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
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/modules/dashboard/components/dashboard-page.vue.`,
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
    429: 'Too many requests. Please try again later.',
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
      invalid: '${path} must be a number',
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
    formats: `Invalid format. Must be one of: {0}.`,
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
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
