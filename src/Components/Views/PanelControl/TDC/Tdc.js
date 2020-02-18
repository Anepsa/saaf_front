import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
// TABLE HEADERS DATA

import * as LocalData from "../../../../assets/TableHeaders";
import FormattedTable from "../../../UI/Table/FormattedTable";
import { TextForm } from "../../../UI/Panel/TextForm";
import Panel from "../../../UI/Panel";
import axios from "axios";
import TdcRow, { UserRow } from "./TdcRow";

export default class Tdc extends Component {
  state = {
    tdc: []
  };

  filters = [<TextForm label="Búsqueda" />];
  mappedFilters = this.filters.map(filter => {
    return filter;
  });

  fetchApiData = () => {
    const companyId = this.props.match.params.idCompany;
    console.log(this.props.match.params.idCompany);
    const method = "get";
    const url = `https://murmuring-journey-73788.herokuapp.com/tiposdecambio/get/${companyId}?desde=0&limite=10`;
    const headers = {
      "Content-Type": "application/json"
    };

    axios({
      method: method,
      url: url,
      headers: headers
    })
      .then(res => {
        console.log(res.data.tdc);
        this.setState({ tdc: res.data.tdc });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    console.log(this.props.match.params);
    this.fetchApiData();
  }
  render() {
    const companyId = this.props.match.params.idCompany;
    console.log(companyId)

    const mappedTdcRows = this.state.tdc.map(tdc => {
      console.log(tdc)
      const { moneda_o, moneda_d, fecha, valor , _id} = tdc;
      return (
        <TdcRow
          monedaO={moneda_o}
          monedaD={moneda_d}
          fecha = {fecha}
          valor = {valor.$numberDecimal}
          companyId = {companyId}
          tdcId = {_id}
        />
      );
    });

    return (
      <Panel
        link={`/tiposdecambio/post/${companyId}`}
        hasAddButton
        name="Tipo de Cambio"
      >
        <FormattedTable
          filters={this.mappedFilters}
          tableHeaders={LocalData.tipoCambio}
        >
          {mappedTdcRows}
          <Link to="/roles/edit"></Link>
        </FormattedTable>
      </Panel>
    );
  }
}
