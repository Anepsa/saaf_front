
//   Hola Edgar dime si necesitas más ejemplos:
//     con esta estructura puedo mapear los Object.Values
//     de cada Objeto (datos) a las celdas de las tablas, 
//     así como a la hora de mapear los valores y nombre de 
//     los Inputs del CRUD (más especificamente hablando de Updates)




// =============================================
//             Ejemplo Cuentas Contables
// =============================================

const currentResponse = {
  // Response Vieja
  estado: true,
  _id: "5e1df6931e00900017763615",
  clave: "sdf",
  nombre: "sdfa",
  descripcion: "sdf",
  elementos: [],
  company: "5e0e43d932be71118c080ec9",
  empresa: "5e0fb5dafed1200d4cd36381",
  fecha: "2020-01-14T17:12:51.470Z"
};

const newResponse = {
  // Con Cambios
  datos: {
    clave: "123",
    nombre: "bla",
    descripcion: "bla bla",
    estado: true
  },
  elementos: [],

  _id: "5e1df6931e00900017763615",
  company: "5e0e43d932be71118c080ec9",
  empresa: "5e0fb5dafed1200d4cd36381",
  fecha: "2020-01-14T17:12:51.470Z"
};

// =============================================
//             Ejemplo Empleados
// =============================================


const newEmpleadosResponse = {
  // Nuevo
  _id: "5e1cc5ea5063370017f21525",
  datos: {
    estado: true,
    nombre: "123123",
    clave: "123123",
    apellido: "123123",
    puesto: "123123"
  },
  company: "5e0e43d932be71118c080ec9",
  empresa: "5e0fb5dafed1200d4cd36381",
  fecha: "2020-01-13T19:32:58.503Z"
};




// =============================================
//             Ejemplo Proveedores
// =============================================
const currentProveedoresResponse = {
    estado: true,
    _id: "5e13f6e1bf7ceb00176fda91",
    clave: "efyr604f",
    nombre: "proveedo",
    email: "impre@correo.com",
    telefono: 5555555555,
    rfc: "impre901017a10",
    company: "5e0e43d932be71118c080ec9",
    empresa: "5e0fb5dafed1200d4cd36381",
    fecha: "2020-01-07T03:11:29.906Z"
}

const newProveedoresResponse = {
    datos: {
        estado: true,
        _id: "5e13f6e1bf7ceb00176fda91",
        clave: "efyr604f",
        nombre: "proveedo",
        email: "impre@correo.com",
        telefono: 5555555555,
        rfc: "impre901017a10",
    },

    company: "5e0e43d932be71118c080ec9",
    empresa: "5e0fb5dafed1200d4cd36381",
    fecha: "2020-01-07T03:11:29.906Z"
}





