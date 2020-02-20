import React from 'react';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
// import Regular from '../../../../../Resources/Add/Regular';
import Nested from '../../../../../Resources/Add/Nested';
import FormBuilder from '../../../../../Resources/FormBuilder';
import RolesService from '../../../../../Services/RolesService';
import NewPanel from '../../../../UI/Panel/NewPanel';


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


export default function AddRoles(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const postPath = `https://murmuring-journey-73788.herokuapp.com/permisos/post/${idCompany}`;
	const getPermisosPath = `https://murmuring-journey-73788.herokuapp.com/permisos/post/${idCompany}`;
	if(true){
		const forms = [];
		localData.nestedForms.forEach(form => { forms.push(form)}); // Agrega el nombre.
		checkBox.forEach(form => { forms.push(form)}); // Agregar los forms checkox.
		return (
			<RolesService
			postPath={postPath}
			getPermisosPath={getPermisosPath}
			field="roles"
			stateField="permisos"
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
					value={{
						apiSubmit: properties.apiSubmit
					}}
					>
						<NewPanel
							apiSubmit={properties.apiSubmit}
							handleNestedInputChange={properties.handleNestedInputChange}
							handleInputChange={properties.handleInputChange} // Nested or Regular
							handleCheckboxChange={properties.handleCheckboxChange}
							forms={forms}
							name="Agregar Roles"
							headers={localData.headers}
							data={properties.data.payload}
							/>
					</Provider>
				);
			}}
			/>
		);
	}
}
