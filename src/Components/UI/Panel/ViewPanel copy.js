import React from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";

import { AddButton } from "../Buttons/AddButton";
import { SearchForm } from "./SearchForm";
import FormattedTable from "../Table/FormattedTable";

const ViewPanelContainer = props => {
  const searchFunc = e => {
    props.search(e.target.value);
  };

  const { name, addButtonLink, hasPagination, hasSearch } = props;
  const pagination = hasPagination ? <Pagination /> : null;
  const search = hasSearch ? (
    <SearchForm onChange={searchFunc} label="Búsqueda" />
  ) : null;

  return (
    <Container fluid className="mainPanel animated fadeIn">
      <div className="panelContainer">
        <Row>
          <Col>
            <h5>{name}</h5>
          </Col>
          <AddButton className="float-right" link={addButtonLink} />
        </Row>
        <Row>
          {/* <Col></Col> */}
          <Col>{search}</Col>
        </Row>
        <Row>
        <FormattedTable></FormattedTable>
          <Col lg={12}>{props.children}</Col>
        </Row>
        {pagination}
      </div>
    </Container>
  );
};

export default ViewPanelContainer;
