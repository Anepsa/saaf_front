import React from "react";
import { Table } from "react-bootstrap";

function MotherTable(props) {
  //  Maps over Array to Create Table Headers
  const mappedTableHeaders = props.tHeads.map(tHead => {
    return (
      <th>
        <span>{tHead}</span>
      </th>
    );
  });

  return (
    <div>
      <h5>{props.name}</h5>
      <Table responsive striped bordered hover className="text-center">
        <thead>
          <tr>{mappedTableHeaders}</tr>
        </thead>
        <tbody>
          <tr>{/* {mappedTableRows} */}</tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MotherTable;
