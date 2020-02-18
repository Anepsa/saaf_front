import React from "react";
import ViewPanelContainer from "../../../UI/Panel/ViewPanelContainer";
import { tableHeaders } from "./Data";
import { RenderCuentasContablesRow } from "./RenderCuentasContablesRow";
import FormattedTable from "../../../UI/Table/FormattedTable";
export const CuentasContables = props => {
  const { data, params } = props;
  const { idCompany, idSubCompany } = params;

  console.log(props.match);
  const getRowsData = () => {
    //  Can be abstracted
    return data.map((row, index) => {
      console.log(row);
      const idCuentaContable = row._id;
      const mappedMonthValues = Object.values(row).map(dato => {
        console.log(dato);
        return dato;
      });
      return (
        <tr key={index}>
          <RenderCuentasContablesRow
            key={index}
            data={mappedMonthValues}
            editButtonLink={`/cuentascontables/edit/${idCompany}/${idSubCompany}/${idCuentaContable}`}
          />
        </tr>
      );
    });
  };

  return (
    <ViewPanelContainer
      name="CuentasContables"
      addButtonLink={`/cuentascontables/post/${idCompany}/${idSubCompany}`}
      tableHeaders={tableHeaders}
    >
      <FormattedTable tableHeaders={tableHeaders}>
        <tbody>{getRowsData()}</tbody>
      </FormattedTable>
    </ViewPanelContainer>
  );
};
