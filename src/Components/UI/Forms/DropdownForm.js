import React from "react";
import { Form, Col } from "react-bootstrap";
export const DropdownForm = props => {
  const { name, onChange, label, formId } = props;
  return (
    <Form.Group controlId="formGridState">
      <Form.Control formId={formId} name={name} onChange={onChange} as="select">
        <option>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
        
      </Form.Control>
    </Form.Group>
  );
};
