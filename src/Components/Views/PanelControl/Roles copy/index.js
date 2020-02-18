import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
// TABLE HEADERS DATA
import * as LocalData from "../../../../assets/TableHeaders";
import FormattedTable from "../../../UI/Table/FormattedTable";
import Panel from "../../../UI/Panel";

export default class Roles extends Component {
  render() {
    return (
      <Panel hasAddButton name="Roles">
        <FormattedTable
          tableHeaders={LocalData.roles}
        >
          {/* Mapped Table Data goes Here */}
          <Link to="/roles/edit">
            <Button size="sm">Editar</Button>
          </Link>
        </FormattedTable>
      </Panel>
    );
  }
}
