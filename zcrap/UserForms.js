import React from "react";
import { Row, Form } from "react-bootstrap";

import Panel from "../../../../UI/Panel";
import Rol from "../../../../Functionality/Filters/Usuarios/Rol";
import CorreoElectronico from "../../../../Functionality/Filters/Usuarios/CorreoElectronico";
import { SubmitButton } from "../../../../UI/Buttons/SubmitButton";
import { CancelButton } from "../../../../UI/Buttons/CancelButton";
import { TextForm } from "../../../../UI/Panel/TextForm";
import axios from "axios";

export default function FilterForm(props) {
  const { method, url, headers, data } = props;
  const fetchApiData = () => {
    // Make a request for a user with a given ID
    axios
      .get("/user?ID=12345")
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };
  console.log(props.match.params);
  return (
    <Panel name="Editar Usuario">
      <Form>
        <Row>
          <TextForm type="email" label="Correo Electrónico" />
          <Rol />
          <SubmitButton />
          <CancelButton />
        </Row>
      </Form>
    </Panel>
  );
}
