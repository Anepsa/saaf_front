import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as requiredData from "../Data";





class EditProject extends Component {
   render() {
    console.log(this.props.match.params);
    const { idCompany, idSubCompany, idProject } = this.props.match.params;
    const params = { idCompany, idSubCompany, idProject };


    const postReqs = {
      method: "post",
      url: `https://murmuring-journey-73788.herokuapp.com/proyecto/post/${idCompany}/${idSubCompany}`,
      headers: { "Content-Type": "application/json" }
    };

    return (
      <Panel
        name="Edit Proyecto"
        postReqs={postReqs}
        forms={requiredData.formsArray}
        hasFormButtons
        params={params}
      />
    );
  }
}
export default EditProject;
