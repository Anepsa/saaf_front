const errorEmail = "El campo debe contener un correo electrónico valido";

export default {
  actions: {
    search: "Buscar",
    detail: "Detalle",
    delete: "Eliminar",
    saveExit: "Guardar y Salir",
    save: "Guardar",
    add: "Agregar",
    cancel: "Cancelar",
    confirm: "Confirmar",
    edit: "Editar",
    request_update: "Solicitar cambio",
    activate: "Activar",
    deactivate: "Desactivar",
    select_one: "Seleccione...",
    moreActions: "Mas acciones",
    exportCSV: "Exportar a CSV",
    disable: "Dar de baja",
    enable: "Recuperar",
    addOther: "Agregar otro",
    addLocation: "Agregar ubicación",
    exportPDF: "Exportar a PDF",
    accept: "Aceptar",
    reject: "Rechazar"
  },
  common: {
    files: "Haga click para seleccionar sus archivos o arrastrelos aqui",
    filesActive: "Suelte los archivos",
    file: "Haga click para seleccionar el archivo o arrastrelo aqui",
    fileActive: "Suelte el archivo",
    actions: "Acciones",
    error: "Error",
    success: "Exito",
    status: "Estatus",
    active_male: "Activo",
    active_female: "Activa",
    deactivated_male: "Desactivado",
    deactivated_female: "Desactivada",
    yes: "Si",
    no: "No",
    loading: "Cargando"
  },

  months: {
    1: "Ene.",
    2: "Feb.",
    3: "Mar.",
    4: "Abr.",
    5: "May.",
    6: "Jun.",
    7: "Jul.",
    8: "Ago.",
    9: "Sep.",
    10: "Oct.",
    11: "Nov.",
    12: "Dic."
  },

  success: {
    recover_password:
      "Si ingresaste correctamente tu correo electrónico te enviaremos las instrucciones para recuperar tu contraseña.",
    reset_password: "Tu contraseña fue actualizada, ahora puedes iniciar sesión.",
    toggle_company: "Se ha actualizado la compañía.",
    delete_company: "Se ha eliminado la compañía.",
    create_company: "Se ha agregado la compañía.",
    edit_company: "Se ha modificado la compañía.",
    add_user: "Se ha agregado el usuario",
    toggle_user: "Se ha actualizado el usuario",
    update_user: "Se ha actualizado el usuario",
    add_role: "Se ha agregado el rol",
    update_role: "Se ha actualizado el rol",
    complete_info: "Has completado tu información, ahora puedes iniciar sesión",
    create_subcompany: "Se ha agregado la empresa.",
    edit_subcompany: "Se ha modificado la empresa.",
    toggle_subcompany: "Se ha actualizado la empresa.",
    delete_subcompany: "Se ha eliminado la empresa.",
    add_asset: "Se ha agregado el activo.",
    update_asset: "Se ha modificado el activo.",
    disable_asset: "Se ha dado de baja el activo.",
    enable_asset: "Se ha recuperado el activo.",
    import_assets: "Se han importado los activos.",
    toggle_account: "Se ha actualizado el registro.",
    update_account: "Se ha actualizado el registro.",
    add_account: "Se ha agregado el registro.",
    toggle_depreciation: "Se ha actualizado la depreciación.",
    update_depreciation: "Se ha actualizado la depreciación.",
    add_depreciation: "Se ha agregado la depreciación.",
    toggle_cost_centers: "Se ha actualizado el centro de costos.",
    update_cost_centers: "Se ha actualizado el centro de costos.",
    add_cost_centers: "Se ha agregado el centro de costos.",
    toggle_inpc: "Se ha actualizado el inpc.",
    update_inpc: "Se ha actualizado el inpc.",
    add_inpc: "Se ha agregado el inpc.",
    toggle_exchange: "Se ha actualizado el tipo de cambio.",
    update_exchange: "Se ha actualizado el tipo de cambio.",
    add_exchange: "Se ha agregado el tipo de cambio.",
    toggle_employee: "Se ha actualizado el empleado.",
    update_employee: "Se ha actualizado el empleado.",
    add_employee: "Se ha agregado el empleado.",
    update_catalogs: "Se ha actualizado el catálogo.",
    update_locations: "Se han actualizado las ubicaciones.",
    add_project: "Se ha agregado el proyecto.",
    update_project: "Se ha actualizado el proyecto.",
    toggle_project: "Se ha actualizado el proyecto.",
    toggle_providers_clients: "Se ha actualizado el proveedor.",
    update_providers_clients: "Se ha actualizado el proveedor.",
    add_providers_clients: "Se ha agregado el proveedor",
    accept_historic: "Se han aceptado los cambios",
    reject_historic: "Se ha rechazado los cambios",
    request_update_asset:
      "Se ha creado un registro de los cambios, el cual debera ser aprobado para que se puedan reflejar en el activo modificado"
  },
  error: {
    session_expired: "Tu sesión ha expirado",
    verify: "Verifica los campos",
    server_error: "Ocurrio un error al comunicarse con el servidor, intentalo mas tarde",
    required: "El campo es requerido",
    minLength: "El campo es requerido",
    type: "El campo es requerido",
    email: errorEmail,
    bad_credentials: "Los datos de acceso no son validos",
    bad_token: "El token ha expirado o ya ha sido utilizado",
    company_not_found: "No se encuentra la compañía o esta desactivada.",
    user_already_exists: "Ya se ha agregado un usuario con este correo electrónico",
    login: {
      email: {
        format: errorEmail
      },
      password: {
        required: "El campo debe contener al menos 4 caracteres",
        minLength: "El campo debe contener al menos 4 caracteres"
      }
    },
    users: {
      email: {
        format: errorEmail
      }
    },
    recover_password: {
      email: {
        format: errorEmail
      }
    },
    depreciation_fails: "No se pudo calcular:",
    user_password_expired:
      "Tu contraseña ha expirado, te hemos enviado un correo electrónico para que ingreses una nueva contraseña.",
    asset_duplicated_number:
      "El número que estas intentando guardar ya esta siendo usado por otro activo."
  },
  info: {
    noResults: "No se encontraron resultados"
  },
  login: {
    title: "Iniciar Sesión",
    subtitle: "Somos una empresa especializada en control de activo fijo.",
    fields: {
      email: "Correo electrónico",
      password: "Contraseña",
      submit: "Iniciar Sesión",
      recovery: "¿Olvidaste tu contraseña?"
    }
  },
  recover_password: {
    title: "Recuperar contraseña",
    subtitle: "Ingresa el correo electrónico con el que estas registrado.",
    fields: {
      email: "Correo electrónico",
      submit: "Enviar",
      login: "Regresar a Iniciar Sesión"
    }
  },

  reset_password: {
    title: "Nueva contraseña",
    subtitle: "Ingresa tu nueva contraseña.",
    fields: {
      password: "Contraseña",
      submit: "Enviar",
      login: "Regresar a Iniciar Sesión"
    }
  },

  complete_info: {
    title: "Completar registro",
    subtitle: "Para continuar completa los siguientes datos, despues podras iniciar sesión.",
    fields: {
      name: "Nombre(s)",
      lastname: "Apellido(s)",
      password: "Contraseña",
      submit: "Enviar",
      login: "Regresar a Iniciar Sesión"
    }
  },

  const TableList = [
    "Compañías",
    "Usuarios",
    "Roles",
    "Empleados",
    "Empresas",
    "Tipo de Cambio",
    "INPC",
    "Proyectos",
    "Centro de Costos",
    "Activos Fijos",
    "Catálogos",
    "Depreciaciones",
    "Proveedores",
    "Reportes",
    "Importación de Activos",
    "Ubicaciones"
  ];

  acl: {
    Compañías: {
      edit: "Editar la información de la Compañía"
    },
    Usuarios: {
      get: "Listar y buscar Usuarios",
      add: "Agregar Usuarios",
      update: "Editar Usuarios",
      toggle: "Activar/Desactivar Usuarios"
    },
    Roles: {
      get: "Listar y buscar Roles",
      add: "Agregar Roles",
      update: "Editar Roles",
      delete: "Eliminar Roles"
    },

    Empleados: {
      get: "Listar y buscar Empleados",
      add: "Agregar Empleados",
      update: "Editar Empleados",
      delete: "Eliminar Empleados",
      toggle: "Activar/Desactivar Empleados"
    },

    exchanges: {
      title: "Tipos de cambio",
      get: "Listar y buscar Tipos de Cambio",
      add: "Agregar Tipos de Cambio",
      update: "Editar Tipos de Cambio",
      delete: "Eliminar Tipos de Cambio"
    },

    inpc: {
      title: "INPC",
      get: "Listar y buscar INPC's",
      add: "Agregar INPC's",
      update: "Editar INPC's",
      delete: "Eliminar INPC's"
    },

    projects: {
      get: "Listar y buscar Proyectos",
      add: "Agregar Proyectos",
      update: "Editar Proyectos",
      delete: "Eliminar Proyectos",
      toggle: "Activar/Desactivar Proyectos"
    },

    assets: {
      get: "Listar y buscar Activos Fijos",
      add: "Agregar Activos Fijos",
      update: "Editar Activos Fijos",
      delete: "Eliminar Activos Fijos",
      disable: "Dar de baja Activos Fijos",
      enable: "Recuperar Activos Fijos dados de baja",
      request_update: "Solicitar un cambio en un activo",
      review_request_update: "Aprobar/Rechazar cambio solicitado en un activo"
    },

    cost_centers: {
      title: "Centros de costros",
      get: "Listar y buscar Centros de Costos",
      add: "Agregar Centros de Costos",
      update: "Editar Centros de Costos",
      delete: "Eliminar Centros de Costos",
      toggle: "Activar/Desactivar Centros de Costos"
    },

    clients_providers: {
      get: "Listar y buscar roles",
      add: "Agregar roles",
      update: "Editar roles",
      delete: "Eliminar roles"
    },

    Catálogos: {
      get: "Listar y buscar Catálogos",
      update: "Editar Catálogos"
    },

    Empresas: {
      get: "Listar y buscar Empresas",
      add: "Agregar Empresas",
      update: "Editar Empresas",
      delete: "Eliminar Empresas",
      toggle: "Activar/Desactivar Empresas"
    },

    Cuentas: {
      get: "Listar y buscar Cuentas y Tipos de activo",
      add: "Agregar Cuentas y Tipos de activo",
      update: "Editar Cuentas y Tipos de activo",
      delete: "Eliminar Cuentas y Tipos de activo",
      toggle: "Activar/Desactivar Tipos de activo"
    },

    Depreciaciones: {
      get: "Listar y buscar Depreciaciones",
      add: "Agregar Depreciaciones",
      update: "Editar Depreciaciones",
      delete: "Eliminar Depreciaciones",
      toggle: "Activar/Desactivar Depreciaciones"
    },

    Proveedores: {
      get: "Listar y buscar Proveedores",
      add: "Agregar Proveedores",
      update: "Editar Proveedores",
      delete: "Eliminar Proveedores",
      toggle: "Activar/Desactivar Proveedores"
    },

    Reportes: {
      disabled: "Consultar el reporte 'Activos dados de baja'",
      depreciation: "Consultar el reporte 'Depreciación por activo fijo'",
      employees_assets: "Vales de resguardo"
    },

    Importar: {
      import: "Permite importar activos mediante un archivo CSV"
    },

    Ubicaciones: {
      get: "Listar ubicaciones",
      update: "Actualizar ubicaciones"
    }
  },

  companies: {
    title: "Compañías",
    form_edit_title: "Editar compañía",
    form_add_title: "Agregar compañía",
    permissions: "Rol",
    delete_title: "Eliminar compañía",
    delete_confirm:
      "¿Esta seguro que desea eliminar la compañía <strong>{{name}}</strong>? * <br/><br/> <small>* La acción no se puede deshacer.</small>",
    fields: {
      name: "Nombre",
      shortname: "Nombre corto"
    }
  },

  subcompanies: {
    title: "Empresas",
    form_edit_title: "Editar empresa",
    form_add_title: "Agregar empresa",
    delete_title: "Eliminar empresa",
    delete_confirm:
      "¿Esta seguro que desea eliminar la empresa <strong>{{name}}</strong>? * <br/><br/> <small>* La acción no se puede deshacer.</small>",
    fields: {
      name: "Nombre",
      shortname: "Nombre corto"
    }
  },

  users: {
    title: "Usuarios",
    subtitle: "Usuarios",
    form_edit_title: "Editar usuario",
    form_add_title: "Agregar usuario",
    fields: {
      name: "Nombre(s)",
      lastname: "Apellido(s)",
      email: "Correo electrónico",
      roleId: "Rol"
    }
  },

  roles: {
    title: "Roles",
    subtitle: "Roles",
    form_edit_title: "Editar rol",
    form_add_title: "Agregar rol",
    fields: {
      name: "Nombre",
      permissions: "Permisos",
      default: "Por defecto"
    },
    permissions: {
      key: "Clave",
      description: "Descripción"
    }
  },

  pagination: {
    prev: "<",
    next: ">",
    show: "Mostrando",
    per_page: "por página"
  },

  assets: {
    title: "Activos Fijos",
    subtitle: "Activos Fijos",
    add: "Agregar activo fijo",
    edit: "Editar activo fijo",
    detail: "Detalle activo fijo",
    disable: "Dar de baja activo fijo",
    depreciation: "Depreciación Acumulada",
    depreciationPercentage: "% Depreciación Acumulada",
    depreciation_financial: "Depreciación Financiera",
    depreciation_fiscal: "Depreciación Fiscal",
    depreciation_info: "Información del activo",
    depreciation_values: "Calculo de depreciación",
    depreciable: "Valor por depreciar",
    enable_title: "Recuperar activo fijo",
    enable_confirm:
      '¿Esta seguro que deseas recuperar el activo <strong>"{{number}} - {{name}}"</strong> que habia sido dado de baja? * <br/><br/> <small>* La acción no se puede deshacer.</small>',
    section: {
      disable: "Detalle de la baja",
      accountant: "Contable",
      assurance: "Seguro",
      bill: "Factura",
      buy: "Compra",
      customFields: "Campos personalizados",
      general: "General",
      location: "Ubicación",
      project: "Proyecto",
      files: "Archivos",
      form: "Datos",
      depreciation: "Depreciación",
      notes: "Notas",
      historic: "Historial",
      codes: "Códigos"
    },
    fields: {
      files: "Archivos",
      account: "Cuenta",
      billConcept: "Concepto en la factura",
      billDate: "Fecha de factura",
      billFolio: "Folio de factura",
      billNumber: "Numero de factura",
      brand: "Marca",
      buyCondition: "Condición de compra",
      buyDate: "Fecha de compra",
      buyOrder: "Orden de compra",
      coin: "Moneda",
      costCenter: "Centro costos",
      country: "País",
      description: "Descripción",
      insurable: "Asegurable",
      insuranceCarrier: "Aseguradora",
      insurancePercent: "Porcentaje asegurado",
      insurancePolicy: "Póliza de seguro",
      financialDepreciation: "Depreciación financiera",
      fiscalDepreciation: "Depreciación fiscal",
      location: "Ubicación",
      life: "Tiempo uso (años)",
      model: "Modelo",
      name: "Nombre",
      number: "Número",
      physicalState: "Estado Físico",
      price: "Precio",
      moi: "M.O.I (recalculado)",
      exchange: "Tipo de cambio",
      project: "Proyecto",
      projectPrice: "Costo proyecto",
      provider: "Proveedor",
      serie: "Número de serie",
      startDate: "Fecha de aplicación",
      status: "Estatus",
      subaccount: "Tipo",
      sublocation: "Ubicación nivel",
      employee: "Responsable",
      depreciationName: "Depreciación aplicada",
      remainingLife: "Vida remanente",
      endDate: "Fecha de los valores",
      lifeTime: "Vida útil",
      currentDepreciation: "Depreciación periodo actual",
      lastDepreciation: "Depreciación periodo anterior",
      inpcStart: "INPC adquisición",
      inpcEnd: "INPC utilización",
      factor: "Factor actualización",
      lastDepreciationRecalculated: "Depreciación periodo actual recalculada",
      totalDepreciation: "Depreciación total",
      depreciable: "Valor neto de reposición",
      notes: {
        text: "Nota",
        createdBy: "Creado por",
        createdAt: "Fecha de creación",
        notSaved: "Pendiente",
        empty: "No se han agregado notas aún"
      },
      historics: {
        field: "Campo",
        after: "Valor nuevo",
        before: "Valor anterior",
        hide: "Ocultar cambios",
        show: "Mostrar cambios",
        date: "Fecha",
        user: "Usuario",
        status: "Status",
        empty: "No se han registrado cambios aún",
        statusName: {
          ACCEPTED: "Aceptado",
          REJECTED: "Rechazado",
          PENDING: "Pendiente"
        }
      },
      disabled: "Dado de baja",
      disableReason: "Motívo de baja",
      disableDetail: "Detalle",
      disableAmount: "Monto recuperado",
      disableDate: "Fecha de baja",
      refound: "Pérdida/Ganancia",
      hasPendingChanges: "Cambios por revisar"
    }
  },

  menu: {
    dashboard: "Dashboard",
    control_panel: "Panel de control",
    configuration: "Configuración",
    users: "Usuarios",
    roles: "Roles",
    subcompanies: "Administrar Empresas",
    subcompanies_add: "Agregar una Empresa",
    assets: "Activos",
    reports: "Reportes",
    reports_depreciation: "Depreciación",
    reports_disabled: "Bajas",
    import: "importar Activos",
    employees: "Empleados",
    accounts: "Cuentas Contables",
    subaccounts: "Tipos de activo",
    depreciations: "Depreciaciones",
    costCenters: "Centros de costos",
    catalogs: "Catálogos",
    inpc: "INPC",
    exchange: "Tipo de cambio",
    locations: "Ubicaciones",
    projects: "Proyectos",
    providers: "Proveedores",
    actions: {
      logout: "Cerrar sesión"
    },
    reports_employees_assets: "Vales de resguardo"
  },

  catalog: {
    physicalState: {
      name: "Estado Físico",
      elements: {
        excelent: "Excelente",
        good: "Bueno",
        medium: "Regular",
        bad: "Malo"
      }
    },
    country: {
      name: "País",
      elements: {
        mex: "México",
        usa: "Estados Unidos de América"
      }
    },
    coin: {
      name: "Moneda",
      elements: {
        mxn: "Pesos mexicanos",
        usd: "Dolares estadounidenses",
        eur: "Euros"
      }
    },
    buyCondition: {
      name: "Condición de compra",
      elements: {
        new: "Nuevo",
        used: "Usado"
      }
    },
    status: {
      name: "Estatus",
      elements: {
        depreciating: "Depreciandose",
        not_depreciating: "No Depreciandose",
        in_construction: "En construcción"
      }
    },
    disableReason: {
      name: "Motívo de baja",
      elements: {
        sell: "Venta",
        damange: "Daño"
      }
    },
    depreciationCriteria: {
      name: "Criterio de depreciación",
      elements: {
        date: "Fecha de aplicación",
        month: "Mes siguiente"
      }
    },
    insuranceCarrier: {
      name: "Aseguradora"
    }
  },

  dashboard: {
    title: "Dashboard",
    assetsTotal: "Número de activos",
    amountTotal: "Monto total",
    totalByAccounts: "Activos por cuenta contable",
    totalByInpcs: "Activos por centro de costos",
    amountByInpcs: "Costo de activos por centro de costos",
    totalByStatus: "Activos por status"
  },

  employees: {
    title: "Empleados",
    employees_title: "Empleados",
    edit: "Editar empleado",
    add: "Agregar empleado",
    fields: {
      key: "Clave",
      name: "Nombre",
      lastname: "Apellido",
      position: "Posición",
      active: "Activo"
    }
  },

  files: {
    preview: "Vista previa",
    name: "Nombre",
    default: "Por defecto",
    actions: "Acciones",
    status: "Status",
    empty: "No se han agregado archivos aún",
    pending: "Por cargar...",
    uploading: "Cargando...",
    uploaded: "Cargado",
    fail: "Falló",
    importing: "Importando datos...",
    imported: "Datos importados"
  },

  reports: {
    title: "Reportes",
    fields: {
      accounts: "Cuentas",
      subaccounts: "Tipos",
      costCenters: "Centros de costos",
      employees: "Empleados",
      depreciationType: "Tipo de depreciación",
      endDate: "Fecha de valores",
      status: "Estatus",
      disabled: "Desactivados",
      hasPendingChanges: "Cambios por revisar"
    },
    values: {
      depreciationType: {
        fiscal: "Fiscal",
        financial: "Financiera"
      }
    },
    depreciation: {
      title: "Reporte de depreciación por activo",
      subtitle: "Reporte de depreciación por activo"
    },
    disabled: {
      title: "Reporte de activos dados de baja",
      subtitle: "Reporte de activos dados de baja"
    },
    employeesAssets: {
      hideAssets: "Ocultar activos asignados",
      showAssets: "Mostrar activos asignados",
      assigned: "Activos asignados",
      title: "Vales de resguardo",
      subtitle: "Vales de resguardo"
    }
  },

  import: {
    title: "Importación de activos",
    list_subtitle: "Importación de activos",
    form_subtitle: "Importar activos desde un archivo",
    error: {
      verify: "Selecciona un archivo para importarlo",
      importing:
        "Ocurrio un error al tratar de importar el archivo, puede que el archivo este dañado o no tenga el formato correcto"
    },
    fields: {
      files: "Archivo",
      createdAt: "Fecha de importación",
      status: "Estatus",
      updated: "# Activos actualizados",
      inserted: "# Activos creados",
      fail: "# Registros fallidos",
      warnings: "# Advertencias",
      file: "Archivo",
      download: "Descargar CSV"
    }
  },
  exchanges: {
    title: "Tipos de cambio"
  },
  exchange: {
    title: "Tipos de cambio",
    exchange_title: "Tipos de cambio",
    edit: "Editar Tipo de cambio",
    add: "Agregar Tipo de cambio",
    fields: {
      fromCurrency: "Moneda Origen",
      toCurrency: "Moneda Destino",
      value: "Valor",
      date: "Fecha"
    }
  },

  cost_centers: {
    title: "Centros de costos"
  },

  costCenters: {
    title: "Centros de costos",
    costCenters_title: "Centros de costos",
    edit: "Editar Centro de costos",
    add: "Agregar Centro de costos",
    fields: {
      name: "Nombre",
      description: "Descripción",
      key: "Clave",
      active: "Activo"
    }
  },

  providers_clients: {
    title: "Proveedores"
  },

  catalogs: {
    title: "Catálogos",
    catalogs_title: "Catálogos",
    edit: "Editar catálogo",
    form: {
      general: "Datos generales",
      elements: "Elementos del catálogo"
    },
    fields: {
      key: "Clave",
      name: "Nombre",
      value: "Valor",
      elements: "Elementos",
      active: "Activo"
    }
  },

  accounts: {
    title: "Cuentas Contables y Tipos de Activo",
    accounts_title: "Cuentas Contables",
    edit: "Editar Cuenta Contable",
    add: "Agregar Cuenta Contable",
    form: {
      general: "Datos generales",
      depreciations: "Depreciación",
      customFields: "Campos personalizados"
    },
    fields: {
      key: "Clave",
      name: "Nombre",
      description: "Descripción",
      active: "Activo",
      fiscalDepreciation: "Depreciación Fiscal",
      financialDepreciation: "Depreciación Financiera",
      customFields: {
        key: "Llave",
        label: "Etiqueta"
      }
    }
  },

  subaccounts: {
    subaccounts_title: "Tipos de activo",
    edit: "Editar Tipo de activo",
    add: "Agregar Tipo de activo",
    form: {
      general: "Datos generales",
      depreciations: "Depreciación",
      customFields: "Campos personalizados"
    },
    fields: {
      key: "Clave",
      name: "Nombre",
      description: "Descripción",
      active: "Activo",
      parent: "Cuenta contable",
      fiscalDepreciation: "Depreciación Fiscal",
      financialDepreciation: "Depreciación Financiera",
      customFields: {
        key: "Llave",
        label: "Etiqueta"
      }
    }
  },

  depreciations: {
    title: "Depreciaciones",
    depreciations_title: "Depreciaciones",
    edit: "Editar Depreciación",
    add: "Agregar Depreciación",
    form: {
      general: "Datos generales",
      percents: "Porcentajes de depreciación"
    },
    fields: {
      key: "Clave",
      name: "Nombre",
      active: "Activo",
      maximumAmount: "Monto maximo a depreciar",
      maximumPercent: "Porcentaje maximo a depreciar",
      criteria: "Criterio",
      year: "Año",
      percentage: "Porcentaje",
      total: "Total"
    }
  },

  inpc: {
    inpc_title: "Índice Nacional de Precios al Consumidor",
    title: "INPC",
    edit: "Editar INPC",
    add: "Agregar INPC",
    form: {
      general: "Datos generales",
      percents: "Porcentajes de depreciación"
    },
    fields: {
      key: "Clave",
      name: "Nombre",
      active: "Activo",
      maximumAmount: "Monto maximo depreciable",
      criteria: "Criterio",
      year: "Año",
      percentage: "Porcentaje",
      total: "Total"
    }
  },

  locations: {
    title: "Ubicaciones",
    locations_title: "Ubicaciones"
  },

  projects: {
    fields: {
      key: "Clave",
      name: "Nombre",
      amount: "Importe",
      active: "Activo"
    },
    title: "Proyectos",
    edit: "Editar proyectp",
    add: "Agregar proyecto"
  },

  providers: {
    fields: {
      key: "Clave",
      name: "Nombre",
      mail: "Correo electrónico",
      telephone: "Teléfono",
      rfc: "RFC",
      active: "Activo"
    },
    title: "Proveedores",
    edit: "Editar proveedor",
    add: "Agregar proveedor"
  }
};
