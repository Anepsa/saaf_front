import React from 'react';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
import PutFormBuilder from '../../../../../Resources/Put/PutFormBuilder';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';

export default function EditRoles(props) {
	const { idCompany, idSubCompany, idRol } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/permisos/get/${idCompany}/${idRol}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/permisos/put/${idCompany}/${idRol}`;
	return (
		<PutFormBuilder
			path={path}
			editPath={editPath}
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
						<ComplexPanel
							handleNestedInputChange={properties.handleNestedInputChange}
							handleInputChange={properties.handleInputChange} // Nested or Regular
							forms={localData.nestedForms}
							name="Editar Configuración Empleados"
							headers={localData.headers}
							innerData={properties.data.payload.meses}
							outerData={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
