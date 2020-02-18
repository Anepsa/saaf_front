import React from "react";
import { DropdownForm } from "../Forms/DropdownForm";
import "./ItemsPerPage.css";
import { Col } from "react-bootstrap";
export const ItemsPerPage = () => {
  return (
    <Col className="itemsPerPage">
      <span className="span-text">Mostrando:</span> <DropdownForm />{" "}
      {/* <span className="span-text">por Página</span> */}
    </Col>
  );
};
