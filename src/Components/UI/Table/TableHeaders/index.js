import React from "react";
// import * as LocalData from "../../../../assets/TableHeaders";
export default function TableHeaders(props) {
  console.log(props);

  const mappedTableHeaders = props.tHeads.map(tHead => {
    return (
      <th>
        <span>{tHead}</span>
      </th>
    );
  });

  return (
    <thead>
      <tr>{mappedTableHeaders}</tr>
    </thead>
  );
}
