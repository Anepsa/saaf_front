import React from "react";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { parseJwt } from "../../../Helpers/parseJwt";

function TopNavigation(props) {
  console.log(props);
  let userData = null;
  let idUsuario = null;
  let idCompany = null;
  let nombre = null;
  let apellido = null;

  if (sessionStorage.sessionToken) {
    userData = parseJwt(sessionStorage.sessionToken);
    console.log(userData)
    idUsuario = userData._id;
    idCompany = sessionStorage.idCompany;
    nombre = userData.nombre
    apellido = userData.apellido

  
  }

  return (
    <div>
      <Navbar className="shadow-sm topNavigation" fixed="top" expand="lg">
        <Link to="/">
          <Navbar.Brand href="#">
            <img className="brandLogo" src="./logo-saaf.png" alt="" />
          </Navbar.Brand>
        </Link>

        <DropdownButton
          className="ml-auto nav-user"
          id="dropdown-basic-button"
          title={`${nombre} ${apellido}`}
        >
          <Link to={`/usuarios/put/${idCompany}/${idUsuario}`}>
            <Dropdown.Item href="#/action-1">
              Editar mi Información
            </Dropdown.Item>
          </Link>
          <Dropdown.Item href="#/action-3">Cerrar Sesión</Dropdown.Item>
        </DropdownButton>
      </Navbar>
    </div>
  );
}

export default TopNavigation;
