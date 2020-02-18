import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
// TABLE HEADERS DATA

import * as tableHeaders from "../../../../assets/TableHeaders";
import FormattedTable from "../../../UI/Table/FormattedTable";
import { TextForm } from "../../../UI/Panel/TextForm";
import Panel from "../../../UI/Panel";
import axios from "axios";
import ProyectosRow from "./ProyectosRow";

export default class Proyectos extends Component {
  state = {
    proyectos: []
  };



  fetchApiData = () => {
    const { idCompany, idSubCompany } = this.props.match.params;
    const method = "get";
    const url = `https://murmuring-journey-73788.herokuapp.com/proyecto/get/${idCompany}/${idSubCompany}?desde=0&limite=10`;
    const headers = {
      "Content-Type": "application/json"
    };
    // http://localhost:3000/proveedor/get/:idcompany/:idempresa?desde=0&limite=10
    axios({
      method: method,
      url: url,
      headers: headers
    })
      .then(res => {
        console.log(res.data);
        this.setState({ proyectos: res.data.proyectos });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {

    this.fetchApiData();
  }
  render() {
    const { idCompany, idSubCompany } = this.props.match.params;

    const tableDataMapper = (data) => {

      const mappedData = data.map(item => {
        console.log(Object.values(item))
      })
      for (let i = 0; i < data.length; i++) {
        // console.log(Object.keys(i))
        // console.log(i)
        // i.map(tData => {
        //   console.log(tData)
        //   return <td>{tData}</td>
        // }) 
      }
    }



    const mappedProyectosRow = this.state.proyectos.map(proveedor => {
      const proyectosData = proveedor;
      console.log(proyectosData);
      const {
        estado,
        _id,
        clave,
        nombre,
        importe,
        telefono,
        rfc,
        company,
        empresa,
        fecha
      } = proyectosData;

      return (
        <ProyectosRow
          estado={estado}
          _id={_id}
          clave={clave}
          nombre={nombre}
          importe={importe}
          telefono={telefono}
          rfc={rfc}
          company={company}
          empresa={empresa}
          fecha={fecha}
        />
      );
    });
    const apiRequirements = {
      method : "get",
      url : "www.caca.com/empresas",
      headers : {"Content-Type" : "aplication/json" },
      dispatcher : "getProjects",
      data : "dataVariable"
    }
    const formsArray = [//Can be constructed using OOP 
      { name: "clave", type: "text " },
      { name: "nombre", type: "text" },
      { name: "importe", type: "number"  },
    ];
    //   { name: "clave", type: "text " , stateValue: this.state.proyectoData.clave},
    //   { name: "nombre", type: "text" , stateValue: this.state.proyectoData.nombre },
    //   { name: "importe", type: "number" ,stateValue: this.state.proyectoData.importe },
    // ];

    tableDataMapper(this.state.proyectos)
    return (

      <Panel
        // General 
        name="Proyectos"
        apiRequirements = {apiRequirements}
        // ViewPanelContainer 
        addButtonLink={`/proyecto/post/${idCompany}/${idSubCompany}`}
        hasAddButton
        hasSearch
        hasTable
        tableHeaders={tableHeaders.proyectos}
        // Forms for CRUD 
        forms = {formsArray}
        hasFormButtons
      >
        <FormattedTable
          tableHeaders={tableHeaders.proyectos}
        >
          {mappedProyectosRow}
          <Link to="/roles/edit"></Link>
        </FormattedTable>
      </Panel>
    );
  }
}
