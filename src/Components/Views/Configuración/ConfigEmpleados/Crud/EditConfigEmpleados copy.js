import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as requiredData from "../Data";
import { WithForms } from "../../../../HOC/WithForms";

class EditConfigEmpleados extends Component {
  render() {
    const {
      idCompany,
      idSubCompany,
      idCampoEmpleado
    } = this.props.match.params;

    // componentDidMount(){

    // }
    return (
      <Panel
        url={`https://murmuring-journey-73788.herokuapp.com/camposempleados/get/${idCompany}/${idSubCompany}/${idCampoEmpleado}`}
        stateKey= "campoempleado"
        name="Editar Configuración de Empleados"
        nestedForms={requiredData.nestedForms}
      />
    );
  }
}
export default EditConfigEmpleados;
