import React from "react";
import { Accordion ,Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faStar,
  faHome,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export const PanelControl = () => {
  return (
    <Accordion>
      <Accordion.Toggle as={Card.Header} eventKey="2">
        Pánel de Control
        <FontAwesomeIcon icon={faCaretDown} />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <div>
          <Link to={`/inpc/get/${sessionStorage.company}`}>
            <li className="sideBarListItem">
              <FontAwesomeIcon icon={faStar} />
              INPC
            </li>
          </Link>
          {/* <Link to={`/tiposdecambio/get/${sessionStorage.company}`}>
            <li className="sideBarListItem">
              <FontAwesomeIcon icon={faCoffee} />
              Tipo de Cambio
            </li>
          </Link> */}
          <Link to={`/usuarios/get/${sessionStorage.company}`}>
            <li className="sideBarListItem">
              <FontAwesomeIcon icon={faCoffee} />
              Usuarios
            </li>
          </Link>
          <Link to={`/roles/get/${sessionStorage.company}`}>
            <li className="sideBarListItem">
              <FontAwesomeIcon icon={faCoffee} />
              Roles
            </li>
          </Link>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};
