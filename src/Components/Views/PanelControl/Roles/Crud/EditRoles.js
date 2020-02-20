import React from 'react';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
import PutFormBuilder from '../../../../../Resources/Put/PutFormBuilder';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import NewPanel from '../../../../UI/Panel/NewPanel';
import RolesService from '../../../../../Services/RolesService';

const checkBox = [
	{
		name: 'companies_edit',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'users_get',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'users_add',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'users_update',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'users_toggle',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'roles_get',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'roles_add',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	},
	{
		name: 'roles_update',
		type: 'checkbox',
		longName: 'Nombre',
		stateKey: 'permisos',
		isNested: true // Need to optimize in WithForms
	}
];

export default function EditRoles(props) {
	const { idCompany, idSubCompany, idRol } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/permisos/get/${idCompany}/${idRol}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/permisos/put/${idCompany}/${idRol}`;

	const forms = [];
	localData.nestedForms.forEach(form => { forms.push(form) }); // Agrega el nombre.
	checkBox.forEach(form => { forms.push(form) }); // Agregar los forms checkox.

	return (
		<RolesService
			path={path}
			editPath={editPath}
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
							forms={forms}
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
