import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as formData from "../Data";

class AddTiposDeActivos extends Component {
  render() {
    const {
      idCompany,
      idSubCompany,
      idTiposDeActivos
    } = this.props.match.params;
    const params = { idCompany, idSubCompany, idTiposDeActivos };
    const postReqs = {
      method: "post",
      url: `https://murmuring-journey-73788.herokuapp.com/tiposactivo/post/${idCompany}/${idSubCompany}`,
      headers: { "Content-Type": "application/json" }
    };
 

    return (
      <Panel
        name="Add TiposDeActivos"
        postReqs={postReqs}
        forms={formData.formsArray}
        hasFormButtons
        params={params}
        nestedForms={formData.nestedForms}
        // depreciationForms={formData.depreciation}
      />
    );
  }
}
export default AddTiposDeActivos;
