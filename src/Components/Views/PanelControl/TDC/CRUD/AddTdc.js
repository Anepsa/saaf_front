import React, { Component } from "react";
import { Row, Form, Col, Dropdown } from "react-bootstrap";
import Panel from "../../../../UI/Panel";

import { TextForm } from "../../../../UI/Panel/TextForm";
import { connect } from "react-redux";
import * as actionCreators from "../../../../../store/actions";
import axios from "axios";
import { DropdownForm } from "../../../../UI/Forms/DropdownForm";
class AddTdc extends Component {
  state = {
    tdc: {
      monedaO: "",
      monedaD: "",
      email: "",
      password: ""
    }

    
  };
  fetchUserData = () => {
    const { companyId, userId } = this.props.match.params;
    const method = "get";
    const url = `https://murmuring-journey-73788.herokuapp.com/usuarios/get/${companyId}/${userId}`;
    const headers = { "Content-Type": "application/json" };
    const dispatcher = "getSingleUser";

    axios({
      method: method,
      url: url,
      headers: headers
    })
      .then(res => {
        console.log(res.data.usuario[0].datos);
        const responseData = res.data.usuario[0].datos;
        this.setState({ userData: responseData });
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleInputChange = e => {
    // Updates Nested State (Inmutably) using input's Name and Value
    const tdc = { ...this.state.tdc };
    const stateTarget = [e.target.name]; //Input's Name Identifier
    tdc[stateTarget] = e.target.value; //Assigns the Specific Key's value = to the input's value
    this.setState({ tdc: tdc }); //Sets State to New User Data
  
  };

  componentDidMount() {
    this.fetchUserData();
  }
  render() {
    const { monedaO, monedaD, email, valor } = this.state.tdc;
    console.log(this.state.tdc);
    return (
      <Panel hasFormButtons name="Agregar Tipos de Cambio">
        <Form>
          <Row>
            <Col>
              <TextForm
                value={monedaD}
                onChange={this.handleInputChange}
                name="nombre"
                placeholder={monedaD}
                type="text"
                label="Fecha"
                formId="nombre"
              />
            </Col>
            <Col>
              <DropdownForm
              label="Moneda Origen" 
              name="monedaO"
              onChange={this.handleInputChange}
              value={monedaO}
              />
            </Col>
            <Col>
              <DropdownForm
                value={monedaD}
                onChange={this.handleInputChange}
                name="monedaD"
                placeholder={monedaD}
                // type="number"
                label="Moneda Destino"
                formId="monedaD"
              />
            </Col>
            <Col>
              <TextForm
                value={monedaD}
                onChange={this.handleInputChange}
                name="monedaD"
                placeholder={monedaD}
                type="number"
                label="Valor"
                formId="nombre"
              />
            </Col>
          </Row>

          <Row className="float-right">
            <Col>
              {/* <CancelButton />
              <SubmitButton clicked={this.postUser} /> */}
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
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onApiCall: (method, url, headers, dispatcher) =>
      dispatch(actionCreators.apiCall(method, url, headers, dispatcher))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTdc);
