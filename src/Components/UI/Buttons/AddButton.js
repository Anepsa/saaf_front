import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddButton = props => {
  return (
    <Link to={props.link}>
      <Button size="sm" onClick={props.clicked}>
        Agregar <FontAwesomeIcon className="darkIcon" style={{marginLeft: "15px"}} icon={faPlus}></FontAwesomeIcon>
      </Button>
    </Link>
  );
};
