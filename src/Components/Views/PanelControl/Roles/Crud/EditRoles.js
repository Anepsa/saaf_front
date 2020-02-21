import React from 'react';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
import PutFormBuilder from '../../../../../Resources/Put/PutFormBuilder';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import NewPanel from '../../../../UI/Panel/NewPanel';
import RolesService from '../../../../../Services/RolesService';

export default function EditRoles(props) {
	const { idCompany, idSubCompany, idRol } = props.match.params;
	console.log("params");
	console.log(props);
	const path = `https://murmuring-journey-73788.herokuapp.com/permisos/get/${idCompany}/${idRol}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/permisos/put/${idCompany}/${idRol}`;
	const getCompany = `https://murmuring-journey-73788.herokuapp.com/company/${idCompany}`;
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
