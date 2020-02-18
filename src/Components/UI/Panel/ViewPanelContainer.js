import React from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import { AddButton } from "../Buttons/AddButton";
import { SearchForm } from "./SearchForm";
import { Paginacion } from "../Pagination/Pagination";
import { ItemsPerPage } from "../ItemsPerPage/ItemsPerPage";
import { Consumer } from "../../../Context/Context";
import DynamicTable from "../Table/DynamicTable/DynamicTable";

const ViewPanelContainer = props => {
  const { name } = props;

  return (
    <Container fluid className="mainPanel animated fadeIn">
      <Consumer>
        {context => (
          <div className="panelContainer">
            <Row>
              <Col>
                <h5>{name}</h5>
              </Col>
              <AddButton className="float-right" link={context.addButtonLink} />
            </Row>
            <hr />
            <Row>
              <SearchForm
                onChange={e => props.searchFunc(e.target.value)}
                label="Búsqueda"
              />
            </Row>
            <hr />
            <Row>
              <Col lg={12}>{props.children}</Col>
            </Row>
            <Row>
              {context.data ? (
                <DynamicTable data={context.data} headers={context.headers} />
              ) : null}
            </Row>
            <Row>
              <Col lg={10}>
                <Paginacion />
              </Col>
              <Col lg={2}>
                <ItemsPerPage />
              </Col>
            </Row>
          </div>
        )}
      </Consumer>
    </Container>
  );
};

export default ViewPanelContainer;
