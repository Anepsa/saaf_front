import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextForm } from "./TextForm";
// import { WithForms } from "../../../HOC/WithForms";
import { connect } from "react-redux";

const Panel = props => {
  const { name, hasAddButton, addButtonLink, hasSearch } = props.hocProps;

  return (
    <Container fluid className="mainPanel animated fadeIn">
      <div className="panelContainer">
        <Row>
          <Col>
            <h5>{name}</h5>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>{props.children}</Col>
        </Row>
      </div>
    </Container>
  );
};
Panel.propTypes = {};

// ================REDUX==================

// export default connect(mapStateToProps, mapDispatchToProps)(WithForms);
export default (Panel);
