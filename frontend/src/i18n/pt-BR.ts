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
    confirm: 'Confirmar',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    location: {
        name: 'Location',
        label: 'Locations',
        menu: 'Locations',
        exporterFileName: 'Location_exportados',
        list: {
          menu: 'Locations',
          title: 'Locations',
        },
        create: {
          success: 'Location salvo com sucesso',
        },
        update: {
          success: 'Location salvo com sucesso',
        },
        destroy: {
          success: 'Location deletado com sucesso',
        },
        destroyAll: {
          success: 'Location(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Location',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Location',
        },
        view: {
          title: 'Visualizar Location',
        },
        importer: {
          title: 'Importar Locations',
          fileName: 'location_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    workerRegistration: {
        name: 'WorkerRegistration',
        label: 'WorkerRegistrations',
        menu: 'WorkerRegistrations',
        exporterFileName: 'WorkerRegistration_exportados',
        list: {
          menu: 'WorkerRegistrations',
          title: 'WorkerRegistrations',
        },
        create: {
          success: 'WorkerRegistration salvo com sucesso',
        },
        update: {
          success: 'WorkerRegistration salvo com sucesso',
        },
        destroy: {
          success: 'WorkerRegistration deletado com sucesso',
        },
        destroyAll: {
          success: 'WorkerRegistration(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar WorkerRegistration',
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
          title: 'Novo WorkerRegistration',
        },
        view: {
          title: 'Visualizar WorkerRegistration',
        },
        importer: {
          title: 'Importar WorkerRegistrations',
          fileName: 'workerRegistration_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    workCode: {
        name: 'WorkCode',
        label: 'WorkCodes',
        menu: 'WorkCodes',
        exporterFileName: 'WorkCode_exportados',
        list: {
          menu: 'WorkCodes',
          title: 'WorkCodes',
        },
        create: {
          success: 'WorkCode salvo com sucesso',
        },
        update: {
          success: 'WorkCode salvo com sucesso',
        },
        destroy: {
          success: 'WorkCode deletado com sucesso',
        },
        destroyAll: {
          success: 'WorkCode(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar WorkCode',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo WorkCode',
        },
        view: {
          title: 'Visualizar WorkCode',
        },
        importer: {
          title: 'Importar WorkCodes',
          fileName: 'workCode_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    workDone: {
        name: 'WorkDone',
        label: 'WorkDones',
        menu: 'WorkDones',
        exporterFileName: 'WorkDone_exportados',
        list: {
          menu: 'WorkDones',
          title: 'WorkDones',
        },
        create: {
          success: 'WorkDone salvo com sucesso',
        },
        update: {
          success: 'WorkDone salvo com sucesso',
        },
        destroy: {
          success: 'WorkDone deletado com sucesso',
        },
        destroyAll: {
          success: 'WorkDone(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar WorkDone',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo WorkDone',
        },
        view: {
          title: 'Visualizar WorkDone',
        },
        importer: {
          title: 'Importar WorkDones',
          fileName: 'workDone_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

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

    ffb: {
        name: 'Ffb',
        label: 'Ffbs',
        menu: 'Ffbs',
        exporterFileName: 'Ffb_exportados',
        list: {
          menu: 'Ffbs',
          title: 'Ffbs',
        },
        create: {
          success: 'Ffb salvo com sucesso',
        },
        update: {
          success: 'Ffb salvo com sucesso',
        },
        destroy: {
          success: 'Ffb deletado com sucesso',
        },
        destroyAll: {
          success: 'Ffb(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Ffb',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Ffb',
        },
        view: {
          title: 'Visualizar Ffb',
        },
        importer: {
          title: 'Importar Ffbs',
          fileName: 'ffb_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    fFBproduction: {
        name: 'FFBproduction',
        label: 'FFBproductions',
        menu: 'FFBproductions',
        exporterFileName: 'FFBproduction_exportados',
        list: {
          menu: 'FFBproductions',
          title: 'FFBproductions',
        },
        create: {
          success: 'FFBproduction salvo com sucesso',
        },
        update: {
          success: 'FFBproduction salvo com sucesso',
        },
        destroy: {
          success: 'FFBproduction deletado com sucesso',
        },
        destroyAll: {
          success: 'FFBproduction(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar FFBproduction',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo FFBproduction',
        },
        view: {
          title: 'Visualizar FFBproduction',
        },
        importer: {
          title: 'Importar FFBproductions',
          fileName: 'fFBproduction_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    plantedArea: {
        name: 'PlantedArea',
        label: 'PlantedAreas',
        menu: 'PlantedAreas',
        exporterFileName: 'PlantedArea_exportados',
        list: {
          menu: 'PlantedAreas',
          title: 'PlantedAreas',
        },
        create: {
          success: 'PlantedArea salvo com sucesso',
        },
        update: {
          success: 'PlantedArea salvo com sucesso',
        },
        destroy: {
          success: 'PlantedArea deletado com sucesso',
        },
        destroyAll: {
          success: 'PlantedArea(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar PlantedArea',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo PlantedArea',
        },
        view: {
          title: 'Visualizar PlantedArea',
        },
        importer: {
          title: 'Importar PlantedAreas',
          fileName: 'plantedArea_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
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
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
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
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
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
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Padrão',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/modules/dashboard/components/dashboard-page.vue.`,
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
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
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
      invalid: '${path} deve ser um número',
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
    formats: `Formato inválido. Deve ser um destes: {0}.`,
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
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
