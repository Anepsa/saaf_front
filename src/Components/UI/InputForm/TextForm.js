import React from "react";
import { Form, Button } from "react-bootstrap";

export const TextForm = props => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{props.label}</Form.Label>
          <Form.Control onChange={this.props.change} type={props.type} placeholder={props.placeholder} />
        </Form.Group>
      </Form>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};






