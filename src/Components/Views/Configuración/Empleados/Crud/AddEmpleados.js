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
      url: `https://murmuring-journey-73788.herokuapp.com/empleados/post/${idCompany}/${idSubCompany}`,
      headers: { "Content-Type": "application/json" }
    };

    return (
      <Panel
        name="Add Empleados"
        postReqs={postReqs}
        forms={requiredData.formsArray}
        hasFormButtons
        params={params}
      />
    );
  }
}
export default AddEmpleados;
