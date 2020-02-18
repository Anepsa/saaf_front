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
      url: `https://murmuring-journey-73788.herokuapp.com/empleados/put/${idCompany}/${idSubCompany}/${idEmpleado}`,
      headers: { "Content-Type": "application/json" }
    };

    const fetchReqs = {
      method: "get",
      url: `https://murmuring-journey-73788.herokuapp.com/empleados/get/${idCompany}/${idSubCompany}/${idEmpleado}`,
      headers: { "Content-Type": "application/json" },
      resFieldName: "empleado"
    };

    return (
      <Panel
        name="Edit Empleados"
        postReqs={postReqs}
        fetchReqs={fetchReqs}
        forms={requiredData.formsArray}
        hasFormButtons
        params={params}
        isEdit
      />
    );
  }
}
export default EditEmpleados;
