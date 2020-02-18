import React from "react";
import * as LocalData from "../../../assets/TableHeaders";
export default function TableRows(props) {
  console.log(props);

  const mappedTableRows = props.tData.map(tHead => {
    return (
      <td>
        <span>{tHead}</span>
      </td>
    );
  });

  return (
    <tbody>
      <tr>{mappedTableRows}</tr>
    </tbody>
  );
}
