import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import { SubmitButton } from "../../../../UI/Buttons/SubmitButton";
import { CancelButton } from "../../../../UI/Buttons/CancelButton";
import { TextForm } from "../../../../UI/Panel/TextForm";
import { connect } from "react-redux";
import * as actionCreators from "../../../../../store/actions";
import axios from "axios";
import WithForms from "../../../../HOC/WithForms";

class AddProyecto extends Component {
  state = {
    proyectoData: {
      clave: "",
      nombre: "",
      importe: null
    }
  };
  handleInputChange = e => {
    // Updates Nested State (Inmutably) using input's Name and Value
    const proyectoData = { ...this.state.proyectoData };
    const stateTarget = [e.target.name]; //Input's Name Identifier
    proyectoData[stateTarget] = e.target.value; //Assigns the Specific Key's value = to the input's value
    this.setState({ proyectoData: proyectoData }); //Sets State to New User Data

  };

  postProyecto = () => {
    const { idCompany, idSubCompany } = this.props.match.params;
    const method = "post";
    const url = `https://murmuring-journey-73788.herokuapp.com/proyecto/post/${idCompany}/${idSubCompany}`;
    const headers = { "Content-Type": "application/json" };
    const data = JSON.stringify({...this.props.data});
    const dispatcher = "postProject";
    this.props.onApiCall(method, url, headers, data, dispatcher);
  };

  componentDidMount() {

  }


  render() {
    const formsArray = [
      { name: "clave", type: "text " },
      { name: "nombre", type: "text" },
      { name: "importe", type: "number" }
    ];

    
    const mappedForms = formsArray.map(form => {
      const { name, type } = form;
      return (
        <Col>
          <TextForm
            value={this.state.proyectoData.clave}
            onChange={this.props.handleInputChange}
            name={name}
            placeholder={name}
            type={type}
            label={form.name}
            formId="clave"
          />
        </Col>
      );
    });

    return (
      <Panel
        hasFormButtons
        submitAction={this.postProyecto}
        name="Agregar Proyecto"
      >
        <Form>
          <Row>
            <Col>{mappedForms}</Col>
          </Row>
        </Form>
      </Panel>
    );
  }
}

// ================REDUX==================
const mapStateToProps = state => {
  return {
    companies: state.companies,
    idCompany: state.idCompany
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onApiCall: (method, url, headers, dispatcher, data) =>
      dispatch(actionCreators.apiCall(method, url, headers, dispatcher, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithForms(AddProyecto));
