export const formsArray = [
  {
    name: "nombre",
    type: "text",
    longName: "Nombre"
  },
  {
    name: "rol",
    type: "text",
    longName: "Apellido"
  }
];




// Forms Data
export const nestedForms = [
  {
    name: "nombre",
    type: "text",
    longName: "Nombre",
    stateKey: "datos",
    isNested: true, // Need to optimize in WithForms,
    field: "campoempleado"
  },
  {
    name: "nombre_corto",
    type: "text",
    longName: "Apellido",
    stateKey: "datos",
    isNested: true, // Need to optimize in WithForms,
    field: "campoempleado"
  }
];

// Table Data
export const headers = [
  { name: "Nombre", selector: "nombre" },
  { name: "Rol", selector: "rol" }
];
