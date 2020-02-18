import React from "react";
import { EditButton } from "../Buttons/EditButton";
import { DeactivateButton } from "../Buttons/DeactivateButton";
export const RenderRow = props => {
  const { editButtonLink } = props;
  const mappedData = props.data.map((td, index) => {
    return <td key={props.data[td]}>{td}</td>;
  });
  const hasMappedData = props.data ? mappedData : null;
  return (
    <React.Fragment>
      {hasMappedData}
      <td>
        {props.editButton}

        <DeactivateButton deactivate={props.deactivate} />
      </td>
    </React.Fragment>
  );
};
