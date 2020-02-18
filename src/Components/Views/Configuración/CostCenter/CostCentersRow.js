import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../../store/actions";

const CostCentersRow = props => {
  console.log(props);

  const {
    estado,
    _id,
    clave,
    nombre,
    importe,
    telefono,
    rfc,
    company,
    empresa,
    fecha,
    descripcion
  } = props;

  const isActive = estado ? (
    <div className="active">Sí</div>
  ) : (
    <div className="danger">No</div>
  );
  return (
    <tr className="userRow">
      <td>{clave}</td>
      <td>{nombre}</td>
      <td>{descripcion}</td>
      <td>{isActive}</td>
      {/* <td>{clave}</td> */}
      <td>
        <Link to={`/centrodecostos/edit/${company}/${empresa}/${_id}`}>
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

// ================REDUX==================
const mapStateToProps = state => {
  return {
    companies: state.companies,
    // companyId: state.companyId,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onApiCall: (method, url, headers, dispatcher) =>
      dispatch(actionCreators.apiCall(method, url, headers, dispatcher))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CostCentersRow);
