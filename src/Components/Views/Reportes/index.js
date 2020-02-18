import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
// import FilterForm from "../../Functionality/Filters/FilterForm";
import Panel from "../../../UI/Panel";
import MotherTable from "../../../UI/Table";
import * as LocalData from "../../../../assets/TableHeaders"


export default class INPC extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Panel name="Indice Nacional de Precios al Consumidor">
        <MotherTable tHeads={LocalData.INPC} tData={""}></MotherTable>
      </Panel>
    );
  }
}
