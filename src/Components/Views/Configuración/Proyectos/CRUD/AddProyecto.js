import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import { SubmitButton } from "../../../../UI/Buttons/SubmitButton";
import { CancelButton } from "../../../../UI/Buttons/CancelButton";
import { TextForm } from "../../../../UI/Panel/TextForm";
import { connect } from "react-redux";
import * as actionCreators from "../../../../../store/actions";
import axios from "axios";
import * as requiredData from "../Data"
class AddProject extends Component {

  componentDidMount() {
  }
  render() {
    console.log(this.props.match.params)
    const { idCompany, idSubCompany, idProject } = this.props.match.params;
     const postReqs = {
      method: "post",
      url: `https://murmuring-journey-73788.herokuapp.com/proyecto/post/${idCompany}/${idSubCompany}`,
      headers: { "Content-Type": "application/json" },
    };

    return (
      <Panel
        name="Crear Proyecto"
        postReqs = {postReqs}
        forms={requiredData.formsArray}
        hasFormButtons
      />
      
    );
  }
}
export default AddProject;
