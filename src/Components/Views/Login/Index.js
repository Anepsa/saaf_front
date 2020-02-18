import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./Login.css";
import LoginForm from "./LoginForm";
// Redux 
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";


class Login extends Component {
  
  static propTypes = {
    prop: PropTypes
  };



  render() {
    return (
     
        <Row>
          <Col lg={12}>
          <LoginForm />
          </Col>
        </Row>
  
    );
  }
}




export default connect(

)(Login);
