import React from "react";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";

import {Link} from "react-router-dom";


function TopNavigation(props) {
  return (
    <div> 
      <Navbar className="shadow-sm topNavigation"fixed="top" expand="lg">
        <Link to="/">
        <Navbar.Brand href="#">
          <img className="brandLogo" src="./logo-saaf.png" alt=""/>
        </Navbar.Brand>
        </Link>
        <DropdownButton
          className="ml-auto"
          id="dropdown-basic-button"
          title="Logged In User"
        > 
          <Dropdown.Item href="#/action-1">Editar mi Información</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Cerrar Sesión</Dropdown.Item>
        </DropdownButton>
      </Navbar>
    </div>
  );
}

export default TopNavigation;
