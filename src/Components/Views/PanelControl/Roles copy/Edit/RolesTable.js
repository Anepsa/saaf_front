import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TableHeaders from "../../../../UI/Table/TableHeaders";
// import WithTableRows from "../../../../HOC/WithTableRows";
import "icheck/skins/all.css";
import { Checkbox, Radio } from "react-icheck";
import Tree from "react-ui-tree";
import TreeView from "treeview-react-bootstrap";
import FormattedTable from "../../../../UI/Table/FormattedTable";

const DataHeaders = ["Activo", "Descripción", "Clave"];

class RolesTable extends Component {
  render() {
    const mappedTableHeaders = this.props.tHeads.map(tHead => {
      return (
        <th>
          <span>{tHead}</span>
        </th>
      );
    });

    return (
      <div>
        <h5>{this.props.name}</h5>
        <Table responsive striped bordered hover className="text-center">
          <TableHeaders tHeads={DataHeaders} />
          <FormattedTable>
            <td style={{ width: "20px" }}>
              <Checkbox
                id="checkbox1"
                checkboxClass="icheckbox_square-blue"
                increaseArea="20%"
              />
            </td>
            <td>description{this.props.description}</td>
            <td>clave{this.props.clave}</td>
            <tr>ccacawfafw</tr>
          </FormattedTable>

          {/* delete this crap  */}
          <tbody>
            <tr>{/* {mappedTableRows} */}</tr>
          </tbody>
        </Table>
      </div>
    );
  }
  //  Maps over Array to Create Table Headers
}

export default RolesTable;
