export const apiRequirements = {
  method: "get",
  url: "www.caca.com/empresas",
  headers: { "Content-Type": "aplication/json" },
  dispatcher: "getProjects",
  data: "dataVariable"
};
export const formsArray = [
  {
    name: "Clave",
    type: "email",
    longName: "E-mail"
  },
  {
    name: "Nombre",
    type: "text",
    longName: "Nombre"
  },
  
  {
    name: "Apellido",
    type: "text",
    longName: "Apellido"
  },
  

  {
    name: "Puesto",
    type: "password",
    longName: "Password",
    
  },
  {
    name: "Automóvil",
    type: "password",
    longName: "Password",
    
  }

];

export const nestedForms = [
  {
    name: "Clave",
    type: "email",
    longName: "E-mail",
    stateKey:"datos"
  },

  {
    name: "Nombre",
    type: "text",
    longName: "Nombre",
    stateKey:"datos"
  },
  {
    name: "Apellido",
    type: "text",
    longName: "Apellido",
    stateKey:"datos"
  },
  {
    name: "Puesto",
    type: "email",
    longName: "E-mail",
    stateKey:"datos"
  },

  {
    name: "Automóvil",
    type: "text",
    longName: "Password",
    stateKey:"datos"
    
  }
];
export const tableHeaders = [

  "Estado",
  "Rol",  
  "Nombre",
  "Acciones"

];


