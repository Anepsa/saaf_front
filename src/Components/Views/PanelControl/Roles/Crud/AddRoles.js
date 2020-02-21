import React from 'react';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
// import Regular from '../../../../../Resources/Add/Regular';
import Nested from '../../../../../Resources/Add/Nested';
import FormBuilder from '../../../../../Resources/FormBuilder';
import RolesService from '../../../../../Services/RolesService';
import NewPanel from '../../../../UI/Panel/NewPanel';

export default function AddRoles(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const postPath = `https://murmuring-journey-73788.herokuapp.com/permisos/post/${idCompany}`;
	const getPermisosPath = `https://murmuring-journey-73788.herokuapp.com/permisos/post/${idCompany}`;
	const getCompany = `https://murmuring-journey-73788.herokuapp.com/company/${idCompany}`;
	if(true){
		return (
			<RolesService
			postPath={postPath}
			getPermisosPath={getPermisosPath}
			getCompanyPath={getCompany}
			forms={localData.nestedForms}
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
							forms={properties.forms}
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
