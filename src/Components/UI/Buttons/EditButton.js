import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Consumer } from "../../../Context/Context";

export const EditButton = props => {
  return (
    <Consumer>
      {context => (
        <Link to={props.link}>
          <Button size="sm" onClick={props.clicked}>
            Editar
          </Button>
        </Link>
      )}
    </Consumer>
  );
};
