import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import { SubmitButton } from "../../../../UI/Buttons/SubmitButton";
import { CancelButton } from "../../../../UI/Buttons/CancelButton";
import { TextForm } from "../../../../UI/Panel/TextForm";
import { connect } from "react-redux";
import * as actionCreators from "../../../../../store/actions";
import axios from "axios";

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
  fetchUserData = () => {
    const { idCompany , idSubCompany , idProject} = this.props.match.params
    const method = "get";
    const url = `https://murmuring-journey-73788.herokuapp.com/proyecto/get/${idCompany}/${idSubCompany}/${idProject}`;
    const headers = { "Content-Type": "application/json" };
    const dispatcher = "getSingleUser";

    axios({
      method: method,
      url: url,
      headers: headers
    })
      .then(res => {
        console.log(res.data);
        const responseData = res.data.proyecto;
        this.setState({ proyectoData:  responseData});
    
      })
      .catch(error => {
        console.log(error);
      });
  }

  postProyecto = () => {
    const { idCompany, idSubCompany , idProject} = this.props.match.params;
    const method = "post";
    const url = `https://murmuring-journey-73788.herokuapp.com/proyecto/put/${idCompany}/${idSubCompany}/${idProject}`;
    const headers = { "Content-Type": "application/json" };
    const data = JSON.stringify({...this.state.proyectoData});
    const dispatcher = "editProject";
    this.props.onApiCall(method, url, headers, data, dispatcher);
  };

  componentDidMount() {
   this.fetchUserData()
  }


  render() {
  
    const formsArray = [
      { name: "clave", type: "text " , stateValue: this.state.proyectoData.clave},
      { name: "nombre", type: "text" , stateValue: this.state.proyectoData.nombre },
      { name: "importe", type: "number" ,stateValue: this.state.proyectoData.importe },
    ];

    const mappedForms = formsArray.map(form => {
      console.log(form);
      const { name, type , stateValue } = form;
     
      const {clave, nombre, importe} = this.state.proyectoData
      return (
        <Col>
          <TextForm
            value={this.state.proyectoData.clave}
            onChange={this.handleInputChange}
            name={name}
            placeholder={stateValue}
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
        name="Editar Proyecto"
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProyecto);
