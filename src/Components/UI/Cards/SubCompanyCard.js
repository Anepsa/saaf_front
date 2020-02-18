import React from "react";

import "./CompanyCard.css";
import { Row, Card,  Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

  const CompanyCard = props => {
  console.log(props)
  const onSelectedSubCompany = event => {
    event.preventDefault();
    props.onSelectedSubCompany(props.id);
  };


  const deleteCompany = companyId => {
    axios({
      method: "delete",
      url: `https://murmuring-journey-73788.herokuapp.com/company/${companyId}`,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("Company Deleted" + this.props.companyId);
      })
      .catch(error => {
        console.log(error);
      });
  };


  const status = props.status ? <p>Activa</p> : <p>Desactivada</p>;
  return (
    <Card
      onClick={onSelectedSubCompany}
      className="companyCard text-center shadow-sm"
    >
      <FontAwesomeIcon
        onClick={deleteCompany}
        className="cardClose ml-auto"
        icon={faTimesCircle}
      />
      <div className="cardCircle">
        <FontAwesomeIcon className="cardIcon" icon={faCoffee} />
      </div>
      <div className="cardInfo">
        <div className="closeButton"></div>
        <Link to={props.addButtonLink}>
          <Card.Title className="cardTitle">
            {props.nombre}
          </Card.Title>
        </Link>
        <Card.Body>
          {status}
          <Row className="float-right">
            <Button variant="secondary shadow-sm">Desactivar</Button>
            <Link name="caca" to={`/company/${props.id}/edit`}>
              <Button variant="primary  shadow-sm">Editar</Button>
            </Link>
          </Row>
        </Card.Body>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    onSelectedSubCompany: (id ) => dispatch(actionCreators.selectSubCompany(id)),
    // onSelectedSubCompany: (id , dispatcher) => dispatch(actionCreators.selectSubCompany(id , dispatcher))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCard);
