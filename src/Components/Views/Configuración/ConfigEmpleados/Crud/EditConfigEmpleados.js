import React from "react";
import NewPanel from "../../../../UI/Panel/NewPanel";
import * as localData from "../Data";
import { Provider } from "../../../../../Context/Context";
import FormBuilder from "../../../../../Resources/FormBuilder";

export default function ConfigEmpleadosContainer(props) {
  const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
  const path = `https://murmuring-journey-73788.herokuapp.com/camposempleados/get/${idCompany}/${idSubCompany}/${idCampoEmpleado}`;
  const editPath = `https://murmuring-journey-73788.herokuapp.com/camposempleados/put/${idCompany}/${idSubCompany}/${idCampoEmpleado}`;
  return (
    <FormBuilder
      path={path}
      editPath={editPath}
      field="campoempleado"
      render={properties => {
        if (properties.data.loading)
          return <img id="loading-spinner" src="/loading.svg" alt="" />;
        return (
          <Provider
            value={{
              handleNestedInputChange: properties.handleNestedInputChange,
              addButtonLink: `/camposempleados/post/${idCompany}/${idSubCompany}`,
              editButtonLink: `/camposempleados/put/${idCompany}/${idSubCompany}`,
              apiPut : properties.apiPut
              
            }}
          >
            <NewPanel
              apiPut={properties.apiPut}
              handleinputChange={properties.handleNestedInputChange}  // Nested or Not 
              forms={localData.nestedForms}
              name="Editar Configuración Empleados"
              headers={localData.headers}
              data={properties.data.payload}
            />
          </Provider>
        );
      }}
    />
  );
}
