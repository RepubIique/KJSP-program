const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    attendance: {
      name: 'Attendance',
      label: 'Attendances',
      menu: 'Attendances',
      exporterFileName: 'Attendance_exportados',
      list: {
        menu: 'Attendances',
        title: 'Attendances',
      },
      create: {
        success: 'Attendance salvo com sucesso',
      },
      update: {
        success: 'Attendance salvo com sucesso',
      },
      destroy: {
        success: 'Attendance deletado com sucesso',
      },
      destroyAll: {
        success: 'Attendance(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Attendance',
      },
      fields: {
        id: 'Id',
        'subDivision': 'Sub Division',
        'week': 'Week',
        'workerID': 'Worker\'s ID',
        'totalWorkingDayRange': 'Total Working Day',
        'totalWorkingDay': 'Total Working Day',
        'totalWorkingHoursRange': 'Total Working Hours',
        'totalWorkingHours': 'Total Working Hours',
        'totalRestDayRange': 'Total Rest Day',
        'totalRestDay': 'Total Rest Day',
        'totalPublicHolidayRange': 'Total Public Holiday',
        'totalPublicHoliday': 'Total Public Holiday',
        'totalAbsentRange': 'Total Absent',
        'totalAbsent': 'Total Absent',
        'totalSickLeaveRange': 'Total Sick Leave',
        'totalSickLeave': 'Total Sick Leave',
        'totalOnLeaveRange': 'Total On Leave',
        'totalOnLeave': 'Total On Leave',
        'totalOvertimeHourRange': 'Total Overtime (Hour)',
        'totalOvertimeHour': 'Total Overtime (Hour)',
        'month': 'Month',
        'yearRange': 'Year',
        'year': 'Year',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'month': {
          'January': 'January',
          'February': 'February',
          'March': 'March',
          'April': 'April',
          'May': 'May',
          'June': 'June',
          'July': 'July',
          'August': 'August',
          'September': 'September',
          'October': 'October',
          'November': 'November',
          'December': 'December',
        },
      },
      new: {
        title: 'Novo Attendance',
      },
      view: {
        title: 'Visualizar Attendance',
      },
      importer: {
        title: 'Importar Attendances',
        fileName: 'attendance_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    deduction: {
      name: 'Deduction',
      label: 'Deductions',
      menu: 'Deductions',
      exporterFileName: 'Deduction_exportados',
      list: {
        menu: 'Deductions',
        title: 'Deductions',
      },
      create: {
        success: 'Deduction salvo com sucesso',
      },
      update: {
        success: 'Deduction salvo com sucesso',
      },
      destroy: {
        success: 'Deduction deletado com sucesso',
      },
      destroyAll: {
        success: 'Deduction(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Deduction',
      },
      fields: {
        id: 'Id',
        'workersID': 'Worker\'s ID',
        'deductfor': 'Deduct for',
        'bfrmRange': 'Bfrm',
        'bfrm': 'Bfrm',
        'currentRMRange': 'Current (RM)',
        'currentRM': 'Current (RM)',
        'deductionRMRange': 'Deduction (RM)',
        'deductionRM': 'Deduction (RM)',
        'cfrmRange': 'C/F (RM)',
        'cfrm': 'C/F (RM)',
        'month': 'Month',
        'yearRange': 'Year',
        'year': 'Year',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'month': {
          'January': 'January',
          'February': 'February',
          'March': 'March',
          'April': 'April',
          'May': 'May',
          'June': 'June',
          'July': 'July',
          'August': 'August',
          'September': 'September',
          'October': 'October',
          'November': 'November',
          'December': 'December',
        },
      },
      new: {
        title: 'Novo Deduction',
      },
      view: {
        title: 'Visualizar Deduction',
      },
      importer: {
        title: 'Importar Deductions',
        fileName: 'deduction_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    workerRegistration: {
      name: 'Worker Registration',
      label: 'Worker Registration',
      menu: 'Worker Registration',
      exporterFileName: 'Worker Registration_exportados',
      list: {
        menu: 'Worker Registration',
        title: 'Worker Registration',
      },
      create: {
        success: 'Worker Registration salvo com sucesso',
      },
      update: {
        success: 'Worker Registration salvo com sucesso',
      },
      destroy: {
        success: 'Worker Registration deletado com sucesso',
      },
      destroyAll: {
        success: 'Worker Registration(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Worker Registration',
      },
      fields: {
        id: 'Id',
        'workerID': 'Worker ID',
        'workerName': 'Worker Name',
        'designation': 'Designation',
        'passportICNo': 'Passport/IC No',
        'passportExpireddateRange': 'Passport Expired date',
        'passportExpireddate': 'Passport Expired date',
        'dateofEmploymentRange': 'Date of Employment',
        'dateofEmployment': 'Date of Employment',
        'superiorName': 'Superior Name',
        'dateofBirthRange': 'Date of Birth',
        'dateofBirth': 'Date of Birth',
        'ageRange': 'Age',
        'age': 'Age',
        'gender': 'Gender',
        'placeofBirth': 'Place of Birth',
        'nationality': 'Nationality',
        'religion': 'Religion',
        'race': 'Race',
        'maritalStatus': 'Marital Status',
        'spouseName': 'Spouse Name',
        'noofchildRange': 'No. of child',
        'noofchild': 'No. of child',
        'bank': 'Bank',
        'bankAccountNoRange': 'Bank Account No.',
        'bankAccountNo': 'Bank Account No.',
        'socsoNoRange': 'Socso No.',
        'socsoNo': 'Socso No.',
        'subdivision': 'Subdivision',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        },
      },
      new: {
        title: 'Novo Worker Registration',
      },
      view: {
        title: 'Visualizar Worker Registration',
      },
      importer: {
        title: 'Importar Worker Registration',
        fileName: 'workerRegistration_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    workDone: {
      name: 'Work Done',
      label: 'Work Done',
      menu: 'Work Done',
      exporterFileName: 'Work Done_exportados',
      list: {
        menu: 'Work Done',
        title: 'Work Done',
      },
      create: {
        success: 'Work Done salvo com sucesso',
      },
      update: {
        success: 'Work Done salvo com sucesso',
      },
      destroy: {
        success: 'Work Done deletado com sucesso',
      },
      destroyAll: {
        success: 'Work Done(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Work Done',
      },
      fields: {
        id: 'Id',
        'workerID': 'Worker ID',
        'workcode': 'WORK CODE',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'blockRange': 'Block',
        'block': 'Block',
        'month': 'Month',
        'week': 'Week',
        'yearRange': 'Year',
        'year': 'Year',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'month': {
          'January': 'January',
          'February': 'February',
          'March': 'March',
          'April': 'April',
          'May': 'May',
          'June': 'June',
          'July': 'July',
          'August': 'August',
          'September': 'September',
          'October': 'October',
          'November': 'November',
          'December': 'December',
        },
      },
      new: {
        title: 'Novo Work Done',
      },
      view: {
        title: 'Visualizar Work Done',
      },
      importer: {
        title: 'Importar Work Done',
        fileName: 'workDone_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    ffb: {
      name: 'FFB',
      label: 'FFB',
      menu: 'FFB',
      exporterFileName: 'FFB_exportados',
      list: {
        menu: 'FFB',
        title: 'FFB',
      },
      create: {
        success: 'FFB salvo com sucesso',
      },
      update: {
        success: 'FFB salvo com sucesso',
      },
      destroy: {
        success: 'FFB deletado com sucesso',
      },
      destroyAll: {
        success: 'FFB(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar FFB',
      },
      fields: {
        id: 'Id',
        'dateRange': 'Date',
        'date': 'Date',
        'estate': 'Estate',
        'subdivision': 'Subdivision',
        'mill': 'Mill',
        'fFBTonnageMTRange': 'FFB Tonnage(MT)',
        'fFBTonnageMT': 'FFB Tonnage(MT)',
        'month': 'Month',
        'year': 'Year',
        'company': 'Company',
        'millticketNo': 'Mill ticket No.',
        'sealNoRange': 'Seal No.',
        'sealNo': 'Seal No.',
        'deliverynotenoRange': 'Delivery note no.',
        'deliverynoteno': 'Delivery note no.',
        'lorryNo': 'Lorry No.',
        'block': 'Block',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'month': {
          'January': 'January',
          'February': 'February',
          'March': 'March',
          'April': 'April',
          'May': 'May',
          'June': 'June',
          'July': 'July',
          'August': 'August',
          'September': 'September',
          'October': 'October',
          'November': 'November',
          'December': 'December',
        },
      },
      new: {
        title: 'Novo FFB',
      },
      view: {
        title: 'Visualizar FFB',
      },
      importer: {
        title: 'Importar FFB',
        fileName: 'ffb_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    checkroll: {
      name: 'Checkroll',
      label: 'Checkrolls',
      menu: 'Checkrolls',
      exporterFileName: 'Checkroll_exportados',
      list: {
        menu: 'Checkrolls',
        title: 'Checkrolls',
      },
      create: {
        success: 'Checkroll salvo com sucesso',
      },
      update: {
        success: 'Checkroll salvo com sucesso',
      },
      destroy: {
        success: 'Checkroll deletado com sucesso',
      },
      destroyAll: {
        success: 'Checkroll(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Checkroll',
      },
      fields: {
        id: 'Id',
        'workerID': 'Worker ID',
        'workcode': 'Workcode',
        'noRange': 'No',
        'no': 'No',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'uom': 'UOM (Unit)',
        'block': 'Block',
        'month': 'Month',
        'week': 'Week',
        'yearRange': 'Year',
        'year': 'Year',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'month': {
          'January': 'January',
          'February': 'February',
          'March': 'March',
          'April': 'April',
          'May': 'May',
          'June': 'June',
          'July': 'July',
          'August': 'August',
          'September': 'September',
          'October': 'October',
          'November': 'November',
          'December': 'December',
        },
      },
      new: {
        title: 'Novo Checkroll',
      },
      view: {
        title: 'Visualizar Checkroll',
      },
      importer: {
        title: 'Importar Checkrolls',
        fileName: 'checkroll_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    subdivision: {
      name: 'Subdivision',
      label: 'Subdivisions',
      menu: 'Subdivisions',
      exporterFileName: 'Subdivision_exportados',
      list: {
        menu: 'Subdivisions',
        title: 'Subdivisions',
      },
      create: {
        success: 'Subdivision salvo com sucesso',
      },
      update: {
        success: 'Subdivision salvo com sucesso',
      },
      destroy: {
        success: 'Subdivision deletado com sucesso',
      },
      destroyAll: {
        success: 'Subdivision(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Subdivision',
      },
      fields: {
        id: 'Id',
        'subdivision': 'Sub Division',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Subdivision',
      },
      view: {
        title: 'Visualizar Subdivision',
      },
      importer: {
        title: 'Importar Subdivisions',
        fileName: 'subdivision_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    workcode: {
      name: 'Work Code',
      label: 'Workcodes',
      menu: 'Workcodes',
      exporterFileName: 'Work Code_exportados',
      list: {
        menu: 'Workcodes',
        title: 'Workcodes',
      },
      create: {
        success: 'Work Code salvo com sucesso',
      },
      update: {
        success: 'Work Code salvo com sucesso',
      },
      destroy: {
        success: 'Work Code deletado com sucesso',
      },
      destroyAll: {
        success: 'Work Code(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Work Code',
      },
      fields: {
        id: 'Id',
        'accCode': 'Account Code',
        'workCategory': 'Work Category',
        'typeofWork': 'Type of Work',
        'workDescription': 'Work Description',
        'rateRange': 'Rate',
        'rate': 'Rate',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Work Code',
      },
      view: {
        title: 'Visualizar Work Code',
      },
      importer: {
        title: 'Importar Workcodes',
        fileName: 'workcode_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    week: {
      name: 'Week',
      label: 'Weeks',
      menu: 'Weeks',
      exporterFileName: 'Week_exportados',
      list: {
        menu: 'Weeks',
        title: 'Weeks',
      },
      create: {
        success: 'Week salvo com sucesso',
      },
      update: {
        success: 'Week salvo com sucesso',
      },
      destroy: {
        success: 'Week deletado com sucesso',
      },
      destroyAll: {
        success: 'Week(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Week',
      },
      fields: {
        id: 'Id',
        'week': 'Week',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Week',
      },
      view: {
        title: 'Visualizar Week',
      },
      importer: {
        title: 'Importar Weeks',
        fileName: 'week_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    estate: {
      name: 'Estate',
      label: 'Estates',
      menu: 'Estates',
      exporterFileName: 'Estate_exportados',
      list: {
        menu: 'Estates',
        title: 'Estates',
      },
      create: {
        success: 'Estate salvo com sucesso',
      },
      update: {
        success: 'Estate salvo com sucesso',
      },
      destroy: {
        success: 'Estate deletado com sucesso',
      },
      destroyAll: {
        success: 'Estate(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Estate',
      },
      fields: {
        id: 'Id',
        'estate': 'Estate',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Estate',
      },
      view: {
        title: 'Visualizar Estate',
      },
      importer: {
        title: 'Importar Estates',
        fileName: 'estate_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    mill: {
      name: 'Mill',
      label: 'Mills',
      menu: 'Mills',
      exporterFileName: 'Mill_exportados',
      list: {
        menu: 'Mills',
        title: 'Mills',
      },
      create: {
        success: 'Mill salvo com sucesso',
      },
      update: {
        success: 'Mill salvo com sucesso',
      },
      destroy: {
        success: 'Mill deletado com sucesso',
      },
      destroyAll: {
        success: 'Mill(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Mill',
      },
      fields: {
        id: 'Id',
        'mill': 'Mill',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Mill',
      },
      view: {
        title: 'Visualizar Mill',
      },
      importer: {
        title: 'Importar Mills',
        fileName: 'mill_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    designation: {
      name: 'Designation',
      label: 'Designations',
      menu: 'Designations',
      exporterFileName: 'Designation_exportados',
      list: {
        menu: 'Designations',
        title: 'Designations',
      },
      create: {
        success: 'Designation salvo com sucesso',
      },
      update: {
        success: 'Designation salvo com sucesso',
      },
      destroy: {
        success: 'Designation deletado com sucesso',
      },
      destroyAll: {
        success: 'Designation(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Designation',
      },
      fields: {
        id: 'Id',
        'designation': 'Designation',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Designation',
      },
      view: {
        title: 'Visualizar Designation',
      },
      importer: {
        title: 'Importar Designations',
        fileName: 'designation_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    blocks: {
      name: 'Blocks',
      label: 'Blocks',
      menu: 'Blocks',
      exporterFileName: 'Blocks_exportados',
      list: {
        menu: 'Blocks',
        title: 'Blocks',
      },
      create: {
        success: 'Blocks salvo com sucesso',
      },
      update: {
        success: 'Blocks salvo com sucesso',
      },
      destroy: {
        success: 'Blocks deletado com sucesso',
      },
      destroyAll: {
        success: 'Blocks(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Blocks',
      },
      fields: {
        id: 'Id',
        'blocks': 'Blocks',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Blocks',
      },
      view: {
        title: 'Visualizar Blocks',
      },
      importer: {
        title: 'Importar Blocks',
        fileName: 'blocks_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    uom: {
      name: 'Uom',
      label: 'Uoms',
      menu: 'Uoms',
      exporterFileName: 'Uom_exportados',
      list: {
        menu: 'Uoms',
        title: 'Uoms',
      },
      create: {
        success: 'Uom salvo com sucesso',
      },
      update: {
        success: 'Uom salvo com sucesso',
      },
      destroy: {
        success: 'Uom deletado com sucesso',
      },
      destroyAll: {
        success: 'Uom(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Uom',
      },
      fields: {
        id: 'Id',
        'uom': 'Uom',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Uom',
      },
      view: {
        title: 'Visualizar Uom',
      },
      importer: {
        title: 'Importar Uoms',
        fileName: 'uom_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    attendanceEditor: {
      label: 'Editor de Attendances',
      description: 'Acesso de edição aos Attendances',
    },
    attendanceViewer: {
      label: 'Visualizador de Attendances',
      description: 'Acesso de visualização aos Attendances',
    },
    deductionEditor: {
      label: 'Editor de Deductions',
      description: 'Acesso de edição aos Deductions',
    },
    deductionViewer: {
      label: 'Visualizador de Deductions',
      description: 'Acesso de visualização aos Deductions',
    },
    workerRegistrationEditor: {
      label: 'Editor de Worker Registration',
      description: 'Acesso de edição aos Worker Registration',
    },
    workerRegistrationViewer: {
      label: 'Visualizador de Worker Registration',
      description: 'Acesso de visualização aos Worker Registration',
    },
    workDoneEditor: {
      label: 'Editor de Work Done',
      description: 'Acesso de edição aos Work Done',
    },
    workDoneViewer: {
      label: 'Visualizador de Work Done',
      description: 'Acesso de visualização aos Work Done',
    },
    ffbEditor: {
      label: 'Editor de FFB',
      description: 'Acesso de edição aos FFB',
    },
    ffbViewer: {
      label: 'Visualizador de FFB',
      description: 'Acesso de visualização aos FFB',
    },
    checkrollEditor: {
      label: 'Editor de Checkrolls',
      description: 'Acesso de edição aos Checkrolls',
    },
    checkrollViewer: {
      label: 'Visualizador de Checkrolls',
      description: 'Acesso de visualização aos Checkrolls',
    },
    subdivisionEditor: {
      label: 'Editor de Subdivisions',
      description: 'Acesso de edição aos Subdivisions',
    },
    subdivisionViewer: {
      label: 'Visualizador de Subdivisions',
      description: 'Acesso de visualização aos Subdivisions',
    },
    workcodeEditor: {
      label: 'Editor de Workcodes',
      description: 'Acesso de edição aos Workcodes',
    },
    workcodeViewer: {
      label: 'Visualizador de Workcodes',
      description: 'Acesso de visualização aos Workcodes',
    },
    weekEditor: {
      label: 'Editor de Weeks',
      description: 'Acesso de edição aos Weeks',
    },
    weekViewer: {
      label: 'Visualizador de Weeks',
      description: 'Acesso de visualização aos Weeks',
    },
    estateEditor: {
      label: 'Editor de Estates',
      description: 'Acesso de edição aos Estates',
    },
    estateViewer: {
      label: 'Visualizador de Estates',
      description: 'Acesso de visualização aos Estates',
    },
    millEditor: {
      label: 'Editor de Mills',
      description: 'Acesso de edição aos Mills',
    },
    millViewer: {
      label: 'Visualizador de Mills',
      description: 'Acesso de visualização aos Mills',
    },
    designationEditor: {
      label: 'Editor de Designations',
      description: 'Acesso de edição aos Designations',
    },
    designationViewer: {
      label: 'Visualizador de Designations',
      description: 'Acesso de visualização aos Designations',
    },
    blocksEditor: {
      label: 'Editor de Blocks',
      description: 'Acesso de edição aos Blocks',
    },
    blocksViewer: {
      label: 'Visualizador de Blocks',
      description: 'Acesso de visualização aos Blocks',
    },
    uomEditor: {
      label: 'Editor de Uoms',
      description: 'Acesso de edição aos Uoms',
    },
    uomViewer: {
      label: 'Visualizador de Uoms',
      description: 'Acesso de visualização aos Uoms',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
      'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
