import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


export const TdcRow = props => {
  const {monedaO , monedaD , fecha , valor , tdcId , companyId } = props;
  const slicedDate = fecha.slice(0 , 10) // Gets only YYYY-MM-DD
  return (
    <tr>
      <td>{monedaO}</td>
      <td>{monedaD}</td>
      <td>{slicedDate}</td>
      <td>{valor}</td>
      <td>
    
        <Link to={`/tiposdecambio/put/${companyId}/${tdcId}`}>
      
          <Button>Editar</Button>
        </Link>


        <Button variant="dark" sm>
          Desactivar
        </Button>
      </td>
      
    </tr>
  );
};
// ================REDUX==================


export default TdcRow;

