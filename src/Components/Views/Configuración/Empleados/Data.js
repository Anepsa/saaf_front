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
    name: "Nombre",
    type: "text",
    longName: "Nombre",
    stateKey: "datos",
    isNested: true // Need to optimize in WithForms
  },
  {
    name: "Rol",
    type: "text",
    longName: "Apellido",
    stateKey: "datos",
    isNested: true // Need to optimize in WithForms
  }
];

// Table Data
export const headers = [
  { name: "Nombre", selector: "nombre" },
  { name: "Rol", selector: "rol" }
];
