import React from 'react';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
import PutFormBuilder from '../../../../../Resources/Put/PutFormBuilder';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import NewPanel from '../../../../UI/Panel/NewPanel';
import RolesService from '../../../../../Services/RolesService';
import { END_POINT } from '../../../../../config/endpoints.js';

export default function EditRoles(props) {
	const { idCompany, idSubCompany, idRol } = props.match.params;
	console.log("params");
	console.log(props);
	const path = END_POINT.GET_ROLES + idCompany + "/" + idRol; // Para obtener que permisos tiene ese rol
	const editPath = END_POINT.PUT_ROLES + idCompany + "/" + idRol; // funcion para editar el rol
	const getCompany = END_POINT.COMPANY + idCompany; // Para saber que permisos mostrar
	return (
		<RolesService
			forms={localData.nestedForms}
			path={path}
			editPath={editPath}
			getCompanyPath={getCompany}
			esEdit={true}
			field="permisos"
			stateField="meses"
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							// handleNestedInputChange: properties.handleNestedInputChange,
							editButtonLink: `/roles/put/${idCompany}`,
							apiPut: properties.apiPut,
							apiSubmit: properties.apiPut
						}}
					>
						<NewPanel
							handleNestedInputChange={properties.handleNestedInputChange}
							handleInputChange={properties.handleInputChange} // Nested or Regular
							handleCheckboxChange={properties.handleCheckboxChange}
							forms={properties.forms}
							name="Editar Configuración Empleados"
							headers={localData.headers}
							innerData={properties.data.payload.meses}
							outerData={properties.data.payload}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
