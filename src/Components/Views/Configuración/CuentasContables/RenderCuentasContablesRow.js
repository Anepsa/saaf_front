import React from "react";
import { EditButton } from "../../../UI/Buttons/EditButton";
import { DeactivateButton } from "../../../UI/Buttons/DeactivateButton";
export const RenderCuentasContablesRow = props => {
  const { editButtonLink } = props;
  const mappedData = props.data.map((key, index) => {
    return <td key={props.data[key]}>{key}</td>;
  });
  return (
    <React.Fragment>
      {mappedData}
      <td>Sí</td>
      <td>
        <EditButton link={editButtonLink} />
        <DeactivateButton />
      </td>
    </React.Fragment>
  );
};
