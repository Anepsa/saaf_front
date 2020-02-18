import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddButton } from "../Buttons/AddButton";
import { Consumer } from "../../../Context/Context";
import CompanyCard from "../Cards/CompanyCard";

const CardPanel = props => {
  const { name, data, deactFunc } = props;
  const mappedCards = data.map(company => {
    console.log(company);
    const { estado, _id, nombre, nombre_corto } = company;
    return (
      <Col key={_id} md={6}>
        <CompanyCard
          url={`https://murmuring-journey-73788.herokuapp.com/company/${_id}`} // This URL is for Deletion only
          estado={estado}
          key={_id}
          idCompany={_id}
          nombre={nombre}
          nombre_corto={nombre_corto}
          link={`/empresa/${_id}`}
          editLink={`put/company/${_id}`}
          dispatcher={"selectCompany"}
          deactFunc={deactFunc}
          itemData={company}
        ></CompanyCard>
      </Col>
    );
  });

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
              <Col lg={12}>{mappedCards}</Col>
            </Row>
          </div>
        )}
      </Consumer>
    </Container>
  );
};

export default CardPanel;
