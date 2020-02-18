import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const EditConfigEmpleadosButton = props => {
  return (
    <Link to={props.editButtonLink}>
      <Button size="sm" onClick={props.clicked}>
        Editar
      </Button>
    </Link>
  );

  
};





