import React from "react";
// import { Panel } from 'react-bootstrap'
import Panel from "../Panel/index";
import { Table } from "react-bootstrap";
import { RenderRow } from "./RenderRow";
import { RenderTableHeader } from "./RenderTableHeader";
import FormattedTable from "./FormattedTable";
import * as tableHeaders from "../../../assets/TableHeaders";
import { EditButton } from "../Buttons/EditButton";
import { CancelButton } from "../Buttons/CancelButton";
import { DeactivateButton } from "../Buttons/DeactivateButton";
export const NewTable = props => {
  console.log(props.data);
  const data = props.data;

  const getKeys = array => {
    return Object.keys(array);
  };

  const getRowsData = () => {
    var data = props.data;

    return data.map((row, index) => {
      console.log(row);
      const idCompany = row.company;
      const mappedMonthValues = Object.values(row.meses).map(mes => {
        return mes;
      });
      var keys = getKeys(mappedMonthValues);
      return (
        <tr key={index}>
          <td>Año</td>
          <RenderRow key={index} data={mappedMonthValues} keys={keys} />
          <td>
            <EditButton link={`/inpc/put/${idCompany}/idUser`} />
            <DeactivateButton />
          </td>
        </tr>
      );
    });
  };

  // getKeys();
  return (
    <Panel
      // ViewPanelContainer
      hasAddButton
      hasSearch
      hasTable
      name="INPC"
    >
      <FormattedTable tableHeaders={tableHeaders.inpc}>
        <thead>{/* <th>{getHeaders()}</th> */}</thead>
        {getRowsData()}
      </FormattedTable>
    </Panel>
  );
};
