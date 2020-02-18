import React, { Component } from "react";

import Panel from "../../../../UI/Panel";
import RolesTable from "./RolesTable";

const tableList = [
  "Compañías",
  "Usuarios",
  "Roles",
  "Empleados",
  "Empresas",
  "Tipo de Cambio",
  "INPC",
  "Proyectos",
  "Centro de Costos",
  "Activos Fijos",
  "Catálogos",
  "Depreciaciones",
  "Proveedores",
  "Reportes",
  "Importación de Activos",
  "Ubicaciones"
];
const tableHeaders = ["Checkbox", "Descripción", "Clave"];
const tableData = { blabla: "blablabla" };

export default class RolesEdit extends Component {
  state = { permissions: [] };

  handleInputChange = e => {
    // Updates Nested State (Inmutably) using input's Name and Value
    const tdc = { ...this.state.tdc };
    const stateTarget = [e.target.name]; //Input's Name Identifier
    tdc[stateTarget] = e.target.value; //Assigns the Specific Key's value = to the input's value
    this.setState({ tdc: tdc }); //Sets State to New User Data
  };
  setPermissions = e => {
    const stateTarget = [e.target.name]; //Input's Name Identifier
    const targetArray = { ...this.state.stateTarget };
    targetArray[stateTarget] = e.target.value;
    this.setState({ [stateTarget]: targetArray });
  };
  mappedTables = tableList.map(tableName => {
    return (
      <RolesTable
        tHeads={tableHeaders}
        name={tableName}
        tableData={tableData}
        onChange={this.setPermissions}
      ></RolesTable>
    );
  });

  render() {
    return (
      <Panel name="Editar Roles">
        {this.mappedTables}

        <div>
          <h5>{this.props.name}</h5>
        </div>
      </Panel>
    );
  }
}
