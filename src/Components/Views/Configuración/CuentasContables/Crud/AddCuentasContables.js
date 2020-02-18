import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as formData from "../Data";

class AddCuentasContables extends Component {
  render() {
    const {
      idCompany,
      idSubCompany,
      idCuentasContables
    } = this.props.match.params;
    const params = { idCompany, idSubCompany, idCuentasContables };
    const postReqs = {
      method: "post",
      url: `https://murmuring-journey-73788.herokuapp.com/cuentascontables/post/${idCompany}/${idSubCompany}`,
      headers: { "Content-Type": "application/json" }
    };
 

    return (
      <Panel
        name="Add CuentasContables"
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
export default AddCuentasContables;
