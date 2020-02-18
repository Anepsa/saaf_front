import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Table, Button} from "react-bootstrap";
// import FilterForm from "../../Functionality/Filters/FilterForm";
import Panel from "../../UI/Panel";
import MotherTable from "../../UI/Table";
import * as tableHeaders from "../../../assets/TableHeaders";

export default class ActivosFijos extends Component {
  static propTypes = {
    
  };

  render() {
    const mappedTableHeaders = tableHeaders.activosFijos.map(tHead => {
      console.log(tableHeaders.activosFijos.length)
      return (
        <th>
          <span>{tHead}</span>
        </th>
      );
    });
    


 

    return (
      <Panel name="Activos Fijos">
        <div className="panelContainer">
          {/* <FilterForm /> */}
          <Table responsive striped bordered hover className="text-center">
            <thead>
              <tr>{mappedTableHeaders}</tr>
            </thead>
            <tbody>
              
              {/* Create HOC */}
              {/*Need To map using Real data, Check Table Mapping Experiments in zzzrap */}
              <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td><Button sm>Editar</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Panel>
    );
  }
}
