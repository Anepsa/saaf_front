import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as requiredData from "../Data";

class EditEmpleados extends Component {
  componentDidMount() {
    this.props.apiCall("url");
  }
  render() {
    const {
      idCompany,
      idSubCompany,
      idEmpleado
    } = this.props.match.params;
    
    const params = { idCompany, idSubCompany, idEmpleado };

    return (
      <Panel
        name="Edit Empleados"
        hasFormButtons
        params={params}
        isEdit
        nestedForms={requiredData.nestedForms}
      />
    );
  }
}
export default EditEmpleados;
