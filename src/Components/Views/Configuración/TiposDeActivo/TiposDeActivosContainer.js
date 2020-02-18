import React from "react";
import ApiCaller from "../../../../Resources/ApiCaller";
import ViewPanel from "../../../UI/Panel/ViewPanel";
import * as localData from "./Data";
import { Provider } from "../../../../Context/Context";

export default function ConfigEmpleadosContainer(props) {
  const { idCompany, idSubCompany } = props.match.params;
  // https://murmuring-journey-73788.herokuapp.com/proveedor/get/${idCompany}/${idSubCompany}?desde=0&limite=10&order_by_clave=&order_by_nombre=&order_by_importe=&order_by_estado=&search=
  const path = `https://murmuring-journey-73788.herokuapp.com/proveedor/get/${idCompany}/${idSubCompany}?desde=0&limite=10&order_by_clave=&order_by_nombre=&order_by_importe=&order_by_estado=&search=`;
  // https://murmuring-journey-73788.herokuapp.com/proveedor/get/${idCompany}/${idSubCompany}?desde=0&limite=10&order_by_clave=&order_by_nombre=&order_by_importe=&order_by_estado=&search=

  const editPath = `https://murmuring-journey-73788.herokuapp.com/camposempleados/put/${idCompany}/${idSubCompany}`;
  return (
    <ApiCaller
      path={path}
      editPath={editPath}
      field="proveedores"
      render={properties => {
        if (properties.data.loading)
          return <img id="loading-spinner" src="/loading.svg" alt="" />;
        return (
          <Provider
            value={{
              apiPut: properties.apiPut,
              addButtonLink: `/camposempleados/post/${idCompany}/${idSubCompany}`,
              editButtonLink: `/camposempleados/put/${idCompany}/${idSubCompany}`
            }}
          >
            <ViewPanel
              name="Tipos de Activo"
              headers={localData.headers}
              data={properties.data.payload}
            />
          </Provider>
        );
      }}
    />
  );
}
