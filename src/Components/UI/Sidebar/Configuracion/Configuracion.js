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
export const Configuracion = () => {
    return (
        <Accordion>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Configuración
          <FontAwesomeIcon icon={faCaretDown} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <div>
            <Link
              to={`/proveedor/get/${sessionStorage.company}/${sessionStorage.subCompany}`}
            >
              <li className="sideBarListItem">
                <FontAwesomeIcon icon={faStar} />
                Proveedores
              </li>
            </Link>
            <Link
              to={`/proyecto/get/${sessionStorage.company}/${sessionStorage.subCompany}`}
            >
              <li className="sideBarListItem">
                <FontAwesomeIcon icon={faStar} />
                Proyectos
              </li>
            </Link>
            <Link
              to={`/centrodecostos/get/${sessionStorage.company}/${sessionStorage.subCompany}`}
            >
              <li className="sideBarListItem">
                <FontAwesomeIcon icon={faStar} />
                Centro de Costos
              </li>
            </Link>
            <Link
              to={`/empleados/get/${sessionStorage.company}/${sessionStorage.subCompany}`}
            >
              <li className="sideBarListItem">
                <FontAwesomeIcon icon={faStar} />
                Empleados
              </li>
            </Link>

            <Link
              to={`/camposempleados/get/${sessionStorage.company}/${sessionStorage.subCompany}`}
            >
              <li className="sideBarListItem">
                <FontAwesomeIcon icon={faStar} />
                Config. Empleados
              </li>
            </Link>
            <Link
              to={`/cuentascontables/get/${sessionStorage.company}/${sessionStorage.subCompany}`}
            >
              <li className="sideBarListItem">
                <FontAwesomeIcon icon={faStar} />
                Cuentas Contables
              </li>
            </Link>
            <Link
              to={`/tiposactivo/get/${sessionStorage.company}/${sessionStorage.subCompany}`}
            >
              <li className="sideBarListItem">
                <FontAwesomeIcon icon={faStar} />
                Tipos de Activo
              </li>
            </Link>
          </div>
        </Accordion.Collapse>
      </Accordion>

   
    )
}
