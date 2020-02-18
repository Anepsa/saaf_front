import React, { useState } from "react";
import {Container,Row,Col,Form,Button,FormGroup,FormControl} from "react-bootstrap";
import "./Login.css";
import { connect } from "react-redux";
import * as actionCreators from "../src/store/actions"

 function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    console.log(email, password);
    event.preventDefault();
  }

  return (
    <div className="loginForm">
      <Container>
        <form onSubmit={props.onLoginSubmit(email, password)}>
          <h3>Iniciar Sesión</h3>
          <Row>
            <Col lg={6}>
            <FormGroup controlId="email" className="">
              <Form.Label>Email</Form.Label>
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            </Col>
            <Col lg={6}> 
            <FormGroup controlId="password" >
              <Form.Label>Password</Form.Label>
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            </Col>
          </Row>
          <Button block disabled={!validateForm()} type="submit">
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    selectedMission: state.selectedMission,
    missionDate: state.selectedDate,
    selectedCamera: state.selectedCamera,
    missionPhotos: state.missionPhotos
  };
};
// { type: actionTypes.GET_MISSION, payload: roverId }
const mapDispatchToProps = dispatch => {
  return {
    onLoginSubmit :  loginData => dispatch(actionCreators.logIn(loginData)),
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)