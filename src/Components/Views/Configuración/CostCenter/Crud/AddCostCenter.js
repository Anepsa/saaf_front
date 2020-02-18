import React, { Component } from "react";
import { Row, Form, Col } from "react-bootstrap";
import Panel from "../../../../UI/Panel";
import * as requiredData from "../Data";

class AddCostCenter extends Component {
   render() {
    console.log(this.props.match.params);
    const { idCompany, idSubCompany, idCostCenter } = this.props.match.params;
    console.log(idCostCenter)
    const params = { idCompany, idSubCompany, idCostCenter };


    const postReqs = {
      method: "post",
      url: `https://murmuring-journey-73788.herokuapp.com/centrodecostos/post/${idCompany}/${idSubCompany}`,
      headers: { "Content-Type": "application/json" }
    };

    return (
      <Panel
        name="Add Centro de Costos"
        postReqs={postReqs}
        forms={requiredData.formsArray}
        hasFormButtons
        params={params}
      />
    );
  }
}
export default AddCostCenter;
