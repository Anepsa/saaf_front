import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as requiredData from "../Data";

class EditCostCenter extends Component {
   render() {
    console.log(this.props.match.params);
    const { idCompany, idSubCompany, idCostCenter } = this.props.match.params;
    const params = { idCompany, idSubCompany, idCostCenter };


    const postReqs = {
      method: "put",
      url: `https://murmuring-journey-73788.herokuapp.com/centrodecostos/put/${idCompany}/${idSubCompany}/${idCostCenter}`,
      headers: { "Content-Type": "application/json" }
    };

    const fetchReqs = {
      method: "get",
      url: `https://murmuring-journey-73788.herokuapp.com/centrodecostos/get/${idCompany}/${idSubCompany}/${idCostCenter}`,
      headers: { "Content-Type": "application/json" }
    };

    return (
      <Panel
        name="Edit Centro De Costos"
        postReqs={postReqs}
        fetchReqs = {fetchReqs}
        forms={requiredData.formsArray}
        hasFormButtons
        params={params}
        isEdit
      />
    );
  }
}
export default EditCostCenter;
