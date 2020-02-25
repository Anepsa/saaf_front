const produccion = "https://murmuring-journey-73788.herokuapp.com/";
const desarrollo = "http://localhost:3000/";

const urlAPI = produccion;

const login = "login";

const company = "company/";
const subcompany = "empresa/";

// Usuarios
const usuarios = "usuarios/"; 
const postusuarios = "usuarios/post/"; 
const getusuarios = "usuarios/get/";
const deleteusuarios = "usuarios/delete/";
const putusuarios = "usuarios/put/";
const rolusuarios = "usuarios/put/";

// INPC
const inpc = "inpc/"; 
const postinpc = "inpc/post/"; 
const getinpc = "inpc/get/";
const deleteinpc = "inpc/delete/";
const putinpc = "inpc/put/";

// roles
const roles = "permisos/"; 
const postroles = "permisos/post/"; 
const getroles = "permisos/get/";
const deleteroles = "permisos/delete/";
const putroles = "permisos/put/";



export const END_POINT = ({
    // Login
    LOGIN: urlAPI + login, // POST - Login

    //Company
    COMPANY: urlAPI + company,

    //SubCompany - Empresa
    SUB_COMPANY: urlAPI + subcompany,

    //Panel de control - Usuarios // En desarrollo
    USERS: urlAPI + usuarios,
    POST_USER: urlAPI + postusuarios, // POST - Usuarios: Crear Usuarios
    GET_USERS: urlAPI + getusuarios, // GET - Usuarios: Listado de Usuarios - GET: Usuarios: Muestra un Usuario
    DELETE_USERS: urlAPI + deleteusuarios, // DELETE - Usuarios: Elimina un usuario
    PUT_USER: urlAPI + putusuarios, // PUT - Usuarios: Actualiza usuario 
    PUT_USER_ROL: urlAPI + rolusuarios, // PUT - Usuarios: Cambia Rol del usuario

    //Panel de control - INPC
    INPC: urlAPI + inpc,
    POST_INPC: urlAPI + postinpc, // POST - inpc: Crear
    GET_INPC: urlAPI + getinpc, // GET - inpc: Listado de inpc - GET: inpc: Muestra un Usuario
    DELETE_INPC: urlAPI + deleteinpc, // DELETE - inpc: Elimina
    PUT_INPC: urlAPI + putinpc, // PUT - inpc: Actualiza

    //Panel de control - Roles
    ROLES: urlAPI + roles,
    POST_ROLES: urlAPI + postroles, // POST - ROLES: Crear
    GET_ROLES: urlAPI + getroles, // GET - ROLES: Listado de ROLES - GET: ROLES: Muestra un Usuario
    DELETE_ROLES: urlAPI + deleteroles, // DELETE - ROLES: Elimina
    PUT_ROLES: urlAPI + putroles, // PUT - ROLES: Actualiza

});