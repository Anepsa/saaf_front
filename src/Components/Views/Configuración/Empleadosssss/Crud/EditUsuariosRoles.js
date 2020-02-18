import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as requiredData from "../Data";

class EditEmpleados extends Component {
  render() {
    console.log(this.props.match.params);
    const { idCompany, idSubCompany, idEmpleado } = this.props.match.params;
    const params = { idCompany, idSubCompany, idEmpleado };

    const postReqs = {
      method: "put",
      url: `https://murmuring-journey-73788.herokuapp.com/usuarios/put/${idCompany}/${idEmpleado}`,
      headers: { "Content-Type": "application/json" }
    };

    const roles = {
      fetchReqs: {
        method: "get",
        url: `https://murmuring-journey-73788.herokuapp.com/usuarios/get/${idCompany}/${idEmpleado}`,
        headers: { "Content-Type": "application/json" },
        resFieldName: "usuario"
      }
    };
    return (
      <Panel
        name="Editar Empleado"
        postReqs={postReqs}
        // fetchReqs={fetchReqs}
        // forms={requiredData.nestedForms}
        hasFormButtons
        params={params}
        isEdit
        // forms={requiredData.formsArray}
        nestedForms={requiredData.nestedForms}
      />
    );
  }
}
export default EditEmpleados;
