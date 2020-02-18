import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as formData from "../Data";

class EditTiposDeActivos extends Component {
  render() {
    console.log(this.props.match.params);
    const { idCompany, idSubCompany, idcuentaContable } = this.props.match.params;
    const params = { idCompany, idSubCompany, idcuentaContable };

    const postReqs = {
      method: "put",
      url: `https://murmuring-journey-73788.herokuapp.com/cuentasContables/put/${idCompany}/${idSubCompany}/${idcuentaContable}`,
      headers: { "Content-Type": "application/json" }
    };

    const fetchReqs = {
      method: "get",
      url: `https://murmuring-journey-73788.herokuapp.com/cuentasContables/get/${idCompany}/${idSubCompany}/${idcuentaContable}`,
      headers: { "Content-Type": "application/json" }
    };

    return (
      <Panel
        name="Edit TiposDeActivos"
        postReqs={postReqs}
        fetchReqs={fetchReqs}
        forms={formData.formsArray}
        nestedForms = {formData.nestedForms}
        // depreciationForms = {formData.depreciation}
        hasFormButtons
        params={params}
        isEdit
      />
    );
  }
}
export default EditTiposDeActivos;
