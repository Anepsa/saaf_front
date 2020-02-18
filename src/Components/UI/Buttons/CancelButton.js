import React from "react";
import { Button } from "react-bootstrap";
import { withRouter, useHistory } from "react-router";

const CancelButton = ({ ...props }) => {
  const history = props.history;
  function goBack() {
    history.goBack();
  }

  return (
    <Button variant="danger" size="sm" onClick={goBack}>
      Cancelar
    </Button>
  );
};
export default withRouter(CancelButton);
