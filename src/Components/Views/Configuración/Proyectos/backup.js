import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import  {connect}  from "react-redux";
import * as actionCreators from "../../../../store/actions";


export const UserRow = props => {
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
  const { name, lastName, email, status, role, actions, userId, companyId} = props;

  const isUserActive = status ? (
    <div className="active">Sí</div>
  ) : (
    <div className="danger">No</div>

  );
  return (
    <tr className="userRow">
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{isUserActive}</td>
      <td>{role}</td>
      <td>
        <Link to={`/${companyId}/usuarios/${userId}/edit`}>
          <Button onClick={props.onApiCall}>Editar</Button>
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
    companyId: state.companyId,
    currentUser : state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onApiCall: (method, url, headers, dispatcher ) =>
      dispatch(actionCreators.apiCall(method, url, headers, dispatcher))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRow);
