import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as requiredData from "../Data";

class AddEmpleados extends Component {
   render() {
    const { idCompany, idSubCompany, idEmpleados } = this.props.match.params;
    const params = { idCompany, idSubCompany, idEmpleados };
    const postReqs = {
      method: "post",
      url: `https://murmuring-journey-73788.herokuapp.com/usuarios/post/${idCompany}`,
      headers: { "Content-Type": "application/json" }
    };

    return (
      <Panel
        name="Agregar Empleados"
        postReqs={postReqs}
        // forms={requiredData.formsArray}
        nestedForms = {requiredData.nestedForms}
        hasFormButtons
        params={params}
      />
    );
  }
}
export default AddEmpleados;
