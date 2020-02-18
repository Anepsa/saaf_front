import React from 'react';
import NewPanel from '../../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
import FormBuilder from '../../../../../Resources/FormBuilder';

export default function EditUsuarios(props) {
	const { idCompany, idSubCompany, idUsuario } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/usuarios/get/${idCompany}/${idUsuario}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/usuarios/put/${idCompany}/${idUsuario}`;
	return (
		<FormBuilder
			path={path}
			editPath={editPath}
			field="usuario"
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							// handleNestedInputChange: properties.handleNestedInputChange,
							editButtonLink: `/usuarios/put/${idCompany}`,
							apiPut: properties.apiPut,
							apiSubmit: properties.apiPut
						}}
					>
						<NewPanel
							handleInputChange={properties.handleInputChange} // Nested or Not
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
