import React, { useState } from "react";
import {Container,Row,Col,Form,Button,FormGroup,FormControl} from "react-bootstrap";
import "./Login.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions"

 class  LoginForm extends Component{ 

  state = {
      
      loginData: {
        email:"",
        password:""
      }
     

  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleEmailChange(){
   
      this.setState({ loginData: { ...this.state.someProperty, flag: false} });

  }
  handlePswChange(){
    this.setState({})
}

  handleSubmit(event) {
    const {email, password } = this.state
    console.log(this.state.email, this.state.password);
    this.props.onLoginSubmit()
    event.preventDefault();
  }

  render() {
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