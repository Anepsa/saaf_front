import React from "react";
import ApiCaller from "../../../../Resources/ApiCaller";
import ViewPanel from "../../../UI/Panel/ViewPanel";
import * as localData from "./Data";
import { Provider } from "../../../../Context/Context";

export default function ConfigEmpleadosContainer(props) {
  const { idCompany, idSubCompany } = props.match.params;
  const path = `https://murmuring-journey-73788.herokuapp.com/camposempleados/get/${idCompany}/${idSubCompany}?order_by_nombre=&order_by_estado=&desde=&limite=&search=`;
  const editPath = `https://murmuring-journey-73788.herokuapp.com/camposempleados/put/${idCompany}/${idSubCompany}`;
  // Need To Create generateUrl( ) function to avoid code duplication
  return (
    <ApiCaller
      path={path}
      editPath={editPath}
      field="campoempleado"
      render={properties => {
        if (properties.data.loading)
          return <img id="loading-spinner" src="/loading.svg" alt="" />;
        return (
          <Provider
            value={{
              deactFunc: properties.deactFunc,
              deactLink: `https://murmuring-journey-73788.herokuapp.com/camposempleados/put/${idCompany}/${idSubCompany}`,
              apiPut: properties.apiPut,
              addButtonLink: `/camposempleados/post/${idCompany}/${idSubCompany}`,
              editButtonLink: `/camposempleados/put/${idCompany}/${idSubCompany}`
            }}
          >


            <ViewPanel
              dataselector="datos"
              name="Configuración de Empleados"
              headers={localData.headers}
              data={properties.data.payload}
            />
          </Provider>
        );
      }}
    />
  );
}
