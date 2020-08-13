const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    confirm: 'Confirmar',
    start: 'Comienzo',
    end: 'Final',
  },
  app: {
    title: 'Aplicación',
  },
  entities: {
    location: {
        name: 'location',
        label: 'Locations',
        menu: 'Locations',
        exporterFileName: 'exportacion_location',
        list: {
          menu: 'Locations',
          title: 'Locations',
        },
        create: {
          success: 'Location guardado con éxito',
        },
        update: {
          success: 'Location guardado con éxito',
        },
        destroy: {
          success: 'Location eliminado con éxito',
        },
        destroyAll: {
          success: 'Location(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Location',
        },
        fields: {
          id: 'Id',
          'location': 'Location',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Location',
        },
        view: {
          title: 'Ver Location',
        },
        importer: {
          title: 'Importar Locations',
          fileName: 'location_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    workerRegistration: {
        name: 'workerRegistration',
        label: 'WorkerRegistrations',
        menu: 'WorkerRegistrations',
        exporterFileName: 'exportacion_workerRegistration',
        list: {
          menu: 'WorkerRegistrations',
          title: 'WorkerRegistrations',
        },
        create: {
          success: 'WorkerRegistration guardado con éxito',
        },
        update: {
          success: 'WorkerRegistration guardado con éxito',
        },
        destroy: {
          success: 'WorkerRegistration eliminado con éxito',
        },
        destroyAll: {
          success: 'WorkerRegistration(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo WorkerRegistration',
        },
        view: {
          title: 'Ver WorkerRegistration',
        },
        importer: {
          title: 'Importar WorkerRegistrations',
          fileName: 'workerRegistration_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    workCode: {
        name: 'workCode',
        label: 'WorkCodes',
        menu: 'WorkCodes',
        exporterFileName: 'exportacion_workCode',
        list: {
          menu: 'WorkCodes',
          title: 'WorkCodes',
        },
        create: {
          success: 'WorkCode guardado con éxito',
        },
        update: {
          success: 'WorkCode guardado con éxito',
        },
        destroy: {
          success: 'WorkCode eliminado con éxito',
        },
        destroyAll: {
          success: 'WorkCode(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo WorkCode',
        },
        view: {
          title: 'Ver WorkCode',
        },
        importer: {
          title: 'Importar WorkCodes',
          fileName: 'workCode_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    workDone: {
        name: 'workDone',
        label: 'WorkDones',
        menu: 'WorkDones',
        exporterFileName: 'exportacion_workDone',
        list: {
          menu: 'WorkDones',
          title: 'WorkDones',
        },
        create: {
          success: 'WorkDone guardado con éxito',
        },
        update: {
          success: 'WorkDone guardado con éxito',
        },
        destroy: {
          success: 'WorkDone eliminado con éxito',
        },
        destroyAll: {
          success: 'WorkDone(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo WorkDone',
        },
        view: {
          title: 'Ver WorkDone',
        },
        importer: {
          title: 'Importar WorkDones',
          fileName: 'workDone_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    attendance: {
        name: 'attendance',
        label: 'Attendances',
        menu: 'Attendances',
        exporterFileName: 'exportacion_attendance',
        list: {
          menu: 'Attendances',
          title: 'Attendances',
        },
        create: {
          success: 'Attendance guardado con éxito',
        },
        update: {
          success: 'Attendance guardado con éxito',
        },
        destroy: {
          success: 'Attendance eliminado con éxito',
        },
        destroyAll: {
          success: 'Attendance(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Attendance',
        },
        view: {
          title: 'Ver Attendance',
        },
        importer: {
          title: 'Importar Attendances',
          fileName: 'attendance_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    deduction: {
        name: 'deduction',
        label: 'Deductions',
        menu: 'Deductions',
        exporterFileName: 'exportacion_deduction',
        list: {
          menu: 'Deductions',
          title: 'Deductions',
        },
        create: {
          success: 'Deduction guardado con éxito',
        },
        update: {
          success: 'Deduction guardado con éxito',
        },
        destroy: {
          success: 'Deduction eliminado con éxito',
        },
        destroyAll: {
          success: 'Deduction(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Deduction',
        },
        view: {
          title: 'Ver Deduction',
        },
        importer: {
          title: 'Importar Deductions',
          fileName: 'deduction_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    ffb: {
        name: 'ffb',
        label: 'Ffbs',
        menu: 'Ffbs',
        exporterFileName: 'exportacion_ffb',
        list: {
          menu: 'Ffbs',
          title: 'Ffbs',
        },
        create: {
          success: 'Ffb guardado con éxito',
        },
        update: {
          success: 'Ffb guardado con éxito',
        },
        destroy: {
          success: 'Ffb eliminado con éxito',
        },
        destroyAll: {
          success: 'Ffb(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Ffb',
        },
        view: {
          title: 'Ver Ffb',
        },
        importer: {
          title: 'Importar Ffbs',
          fileName: 'ffb_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    fFBproduction: {
        name: 'fFBproduction',
        label: 'FFBproductions',
        menu: 'FFBproductions',
        exporterFileName: 'exportacion_fFBproduction',
        list: {
          menu: 'FFBproductions',
          title: 'FFBproductions',
        },
        create: {
          success: 'FFBproduction guardado con éxito',
        },
        update: {
          success: 'FFBproduction guardado con éxito',
        },
        destroy: {
          success: 'FFBproduction eliminado con éxito',
        },
        destroyAll: {
          success: 'FFBproduction(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo FFBproduction',
        },
        view: {
          title: 'Ver FFBproduction',
        },
        importer: {
          title: 'Importar FFBproductions',
          fileName: 'fFBproduction_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    plantedArea: {
        name: 'plantedArea',
        label: 'PlantedAreas',
        menu: 'PlantedAreas',
        exporterFileName: 'exportacion_plantedArea',
        list: {
          menu: 'PlantedAreas',
          title: 'PlantedAreas',
        },
        create: {
          success: 'PlantedArea guardado con éxito',
        },
        update: {
          success: 'PlantedArea guardado con éxito',
        },
        destroy: {
          success: 'PlantedArea eliminado con éxito',
        },
        destroyAll: {
          success: 'PlantedArea(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo PlantedArea',
        },
        view: {
          title: 'Ver PlantedArea',
        },
        importer: {
          title: 'Importar PlantedAreas',
          fileName: 'plantedArea_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      primaryColor: 'Color primario',
      secondaryColor: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Defecto',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde Polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/src/modules/dashboard/components/dashboard-page.vue.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
      invalid: '${path} debe ser un número',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },

  /* eslint-disable */
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
};

export default es;
