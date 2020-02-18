import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import { SubmitButton } from "../../../../UI/Buttons/SubmitButton";
import { CancelButton } from "../../../../UI/Buttons/CancelButton";
import { TextForm } from "../../../../UI/Panel/TextForm";
import { connect } from "react-redux";
import * as actionCreators from "../../../../../store/actions";
import axios from "axios";

class EditProvider extends Component {
  state = {
    providerData: {
      nombre: "",
      apellido: "",
      email: "",
      password: ""
    }
  };
  fetchproviderData = () => {
    const { idCompany, idSubCompany, idUser } = this.props.match.params;
    const method = "get";

    const url = `https://murmuring-journey-73788.herokuapp.com/get/${idCompany}/${idSubCompany}/${idUser}`;
    const headers = { "Content-Type": "application/json" };


    axios({
      method: method,
      url: url,
      headers: headers
    })
      .then(res => {
        console.log(res.data.usuario[0].datos);
        const responseData = res.data.usuario[0].datos;
        this.setState({ providerData: responseData });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInputChange = e => {
    // Updates Nested State (Inmutably) using input's Name and Value
    const providerData = { ...this.state.providerData };
    const stateTarget = [e.target.name]; //Input's Name Identifier
    providerData[stateTarget] = e.target.value; //Assigns the Specific Key's value = to the input's value
    this.setState({ providerData: providerData }); //Sets State to New User Data

    console.log(this.state.providerData);
  };

  postProvider = () => {
    const { idCompany, idSubCompany } = this.props.match.params;

    const method = "post";

    const url = `https://murmuring-journey-73788.herokuapp.com/proveedor/post/${idCompany}/${idSubCompany}/`;
    const headers = { "Content-Type": "application/json" };
    const data = JSON.stringify({ ...this.state.providerData });
    // const dispatcher = "setCompanies";

    axios({
      method: method,
      url: url,
      headers: headers,
      data: data
    })
      .then(res => {
        console.log(res.data);
        // this.setState({ companies: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount(){
    this.fetchproviderData()
  }

  render() {
    console.log(this.props.match.params.idCompany);

    return (
      <Panel
        hasFormButtons
        submitAction={this.postProvider}
        name="Editar Proveedor"
      >
        <Form>
          <Row>
            <Col>
              <TextForm
                value={this.state.providerData.clave}
                onChange={this.handleInputChange}
                name="clave"
                placeholder="Clave"
                type="text"
                label="Clave"
                formId="clave"
              />
            </Col>
            <Col>
              <TextForm
                onChange={this.handleInputChange}
                placeholder="Nombre"
                label="Nombre"
                name="nombre"
                type="text"
                formId="nombre"
                value={this.state.providerData.nombre}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextForm
                onChange={this.handleInputChange}
                placeholder="Correo Electrónico"
                label="Correo Electrónico"
                name="email"
                type="email"
                formId="email"
                value={this.state.providerData.email}
              />
            </Col>
            <Col>
              <TextForm
                onChange={this.handleInputChange}
                placeholder="Telefono"
                label="Telefono"
                name="telefono"
                type="text"
                formId="telefono"
                value={this.state.providerData.password}
              />
            </Col>
            <Col>
              <TextForm
                onChange={this.handleInputChange}
                placeholder="RFC"
                label="RFC"
                name="rfc"
                type="text"
                formId="rfc"
                value={this.state.providerData.rfc}
              />
            </Col>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProvider);
