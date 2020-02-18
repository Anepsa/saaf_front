import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

const SubmitButton = props => {

  return (
    <Button size="sm" onClick={props.clicked}>
      Guardar
    </Button>
  );
};
export default withRouter(SubmitButton);        
