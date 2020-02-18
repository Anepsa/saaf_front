import React from "react";
import { Form, Col } from "react-bootstrap";
import { Checkbox, Radio } from "react-icheck";
export const TextForm = props => {
  const { name, onChange, type, placeholder, label, formId, value } = props;
  return (
    <Col md={1}>
      <Form.Group controlId={formId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          defaultValue={value}
          name={name}
          onChange={onChange}
          type={type}
          // value = {value}
          placeholder={placeholder}
        />
              {/* <Checkbox
                id="checkbox1"
                checkboxClass="icheckbox_square-blue"
                // increaseArea="20%"
                label= " Estado Asignado"
              /> */}
      </Form.Group>
         

    </Col>
  );
};
