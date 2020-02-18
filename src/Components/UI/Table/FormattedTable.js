import React from "react";
import { Table } from "react-bootstrap";
import { RenderRow } from "./RenderRow";
import { EditButton } from "../Buttons/EditButton";
import { DeactivateButton } from "../Buttons/DeactivateButton";

const FormattedTable = props => {
  return (
    <div name={props.panelName}>
      <Table responsive striped bordered hover>
        <thead className="text-center">
          <th>Clave</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Puesto</th>
          <th>Acciones</th>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>001</td>
            <td>Guillermo</td>
            <td>Del Toro</td>
            <td>Gerente</td>
            <td>
              <EditButton /> <DeactivateButton deactivate={props.deactivate} />
            </td>
          </tr>
          <tr>
            <td>002</td>
            <td>Alberto</td>
            <td>Valdéz</td>
            <td>Auxiliar</td>
            <td>
              <EditButton /> <DeactivateButton deactivate={props.deactivate} />
            </td>
          </tr>
          <tr>
            <td>003</td>
            <td>María</td>
            <td>Jimenez</td>
            <td>Asistente Directivo</td>
            <td>
              <EditButton /> <DeactivateButton deactivate={props.deactivate} />
            </td>
          </tr>

          <tr>
            <td>004</td>
            <td>Pedro</td>
            <td>Cisneros</td>
            <td>Técnico</td>
            <td>
              <EditButton /> <DeactivateButton deactivate={props.deactivate} />
            </td>
          </tr>
        </tbody>

        {/* <thead>{props.tableHeaders}</thead>
        <tbody className="text-center">{props.tableData}</tbody> */}
      </Table>
    </div>
  );
};

export default FormattedTable;

{
  /* <tbody className="text-center">
<tr>
  <td>Nombre</td>
  <td>Administrador</td>
  <td>Sí</td>
  <td>
    <EditButton /> <DeactivateButton deactivate={props.deactivate} />
  </td>
</tr>
<tr>
  <td>Apellido</td>
  <td>Recursos Humanos</td>
  <td>Sí</td>
  <td>
    <EditButton /> <DeactivateButton deactivate={props.deactivate} />
  </td>
</tr>
<tr>
  <td>Clave</td>
  <td>Seguridad e Información</td>
  <td>Sí</td>
  <td>
   <EditButton /> <DeactivateButton deactivate={props.deactivate} /> 
  </td>
</tr>
<tr>
  <td>Puesto</td>
  <td>Finanzas</td>
  <td>Sí</td>
  <td>
   <EditButton /> <DeactivateButton deactivate={props.deactivate} /> 
  </td>
</tr>
</tbody> */
}
