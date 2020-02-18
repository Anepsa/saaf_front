import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormGroup,
  FormControl
} from "react-bootstrap";
import "./Login.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import axios from "axios";
import { withRouter } from "react-router";

function LoginForm({...props}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // props.onLoginSubmit(email, password);
  }

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));

  }
  const logIn = () => {

    axios({
      method: "post",
      url: "https://murmuring-journey-73788.herokuapp.com/login",
      data: {
        email: email,
        password: password
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        const history = props.history;
        console.log(res.data)
        const sessionToken = res.headers.authorization;
        const dataToken = res.data.token;

        const parsedSessionToken = parseJwt(res.headers.authorization);
        const parsedDataToken = parseJwt(res.data.token);
        // =======================================
        //         Save Tokens To Session Storage
        // =======================================
        sessionStorage.setItem("sessionToken", sessionToken);
        sessionStorage.setItem("dataToken", dataToken);
        sessionStorage.setItem("isLoggedIn", true);

        // =======================================
        //         Redux Dispatch of Encrypted Data Tokens to store
        // =======================================
        // props.onLoginSubmit(parsedSessionToken, parsedDataToken);

        // =================Redirect====================
        window.location.reload();
        // history.push("/company")
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="loginForm">
      <div className="loginBanner"></div>
      <Container>
        <form onSubmit={handleSubmit}>
    
          <Row>
          <Col lg={6}>
         
          </Col>
            <Col lg={6}>
              <Col lg={6}>
              <h3>Iniciar Sesión</h3>
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
                <FormGroup controlId="password">
                  <Form.Label>Password</Form.Label>
                  <FormControl
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                  />
                  <Button block disabled={!validateForm()} onClick={logIn}>
                    Log in
                  </Button>
                </FormGroup>
              </Col>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}


export default withRouter(LoginForm);
