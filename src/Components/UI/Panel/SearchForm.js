import React from "react";
import { Form, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchForm = props => {
  const { name, onChange, type, placeholder, label, formId , value} = props;
  return (
    <Col lg={6}>
      <Form.Group className="searchForm"controlId={formId}>
      <FontAwesomeIcon className="searchIcon"icon={faSearch}/>
        <Form.Control
          defaultValue= {value}
          name={name}
          onChange={onChange}
          type={type}
          placeholder="Búsqueda"
        />      
      </Form.Group>
    </Col>
  );
};
