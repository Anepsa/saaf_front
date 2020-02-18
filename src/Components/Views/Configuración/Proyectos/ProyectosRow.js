import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import  {connect}  from "react-redux";
import * as actionCreators from "../../../../store/actions";


 const ProyectosRow = props => {
  console.log(props)
  const getUser = () => {



    // Get Individual user API Call Data 
        const {companyId , userId} = props
        const method = "get";
        const url = `https://murmuring-journey-73788.herokuapp.com/usuarios/get/${companyId}/${userId}`;
        const headers = { "Content-Type": "application/json" };
        const dispatcher = "getSingleUser";
        props.onApiCall(method, url, headers, dispatcher);
      };

      
      const {estado,  _id ,clave , nombre , importe , telefono , rfc , company , empresa, fecha } = props

  const isActive = estado ? (
    <div className="active">Sí</div>
  ) : (
    <div className="danger">No</div>

  );
  return (
    <tr className="userRow">
      <td>{clave}</td>
      <td>{nombre}</td>
      <td>{importe}</td>
      <td>{isActive}</td>
      {/* <td>{clave}</td> */}
      <td>
        <Link to={`/proyecto/edit/${company}/${empresa}/${_id}`}>
          <Button onClick={getUser}>Editar</Button>
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
    currentUser : state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onApiCall: (method, url, headers, dispatcher ) =>
      dispatch(actionCreators.apiCall(method, url, headers, dispatcher))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProyectosRow);
