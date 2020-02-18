import React, { Component } from "react";
import { WithSearch } from "../../../HOC/WithSearch";
import ViewPanelContainer from "../../../UI/Panel/ViewPanelContainer";
import * as localData from "./Data";
import { RenderRow } from "../../../UI/Table/RenderRow";
import { EditButton } from "../../../UI/Buttons/EditButton";
class EmpleadosContainer extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const searchParam = this.props.searchParam;
    const { idCompany, idSubCompany } = this.props.match.params;
    const url = `https://murmuring-journey-73788.herokuapp.com/empleados/get/${idCompany}/${idSubCompany}?order_by_nombre=&order_by_estado=&desde=&limite=&search=${searchParam}`;
    this.props.apiCall(url, "empleado");
  }

  componentDidUpdate(previousProps) {
    if (previousProps.searchParam !== this.props.searchParam) {
      const searchParam = this.props.searchParam;
      const url = `https://murmuring-journey-73788.herokuapp.com/empleados/get/${sessionStorage.company}/${sessionStorage.subCompany}?order_by_nombre=&order_by_estado=&desde=&limite=&search=${searchParam}`;
      this.props.apiCall(url, "empleado");
    }
  }

  render() {
    console.log(this.props.deactivate)
    const { idCompany , idSubCompany } = this.props.match.params;
    return (
      <ViewPanelContainer
        name="Empleados"
        addButtonLink={`/empleados/post/${idCompany}/${idSubCompany}`}
        searchFunc={this.props.searchFunc}
        tableData={this.props.tableData}
        tableHeaders={localData.tableHeaders}
        hasPagination
        deactivate = {this.props.deactivate}
        url={`/usuarios/put/${idCompany}`}
      />
    );
  }
}

export default WithSearch(EmpleadosContainer);
