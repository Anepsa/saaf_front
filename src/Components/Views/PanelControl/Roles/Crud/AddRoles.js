import React from 'react';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
// import Regular from '../../../../../Resources/Add/Regular';
import Nested from '../../../../../Resources/Add/Nested';
import FormBuilder from '../../../../../Resources/FormBuilder';
import RolesService from '../../../../../Services/RolesService';
import NewPanel from '../../../../UI/Panel/NewPanel';
import { END_POINT } from '../../../../../config/endpoints.js';

export default function AddRoles(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const postPath = END_POINT.POST_ROLES + idCompany; // Para guardar el nuevo Rol
	const getPermisosPath = END_POINT.POST_ROLES + idCompany;
	const getCompany = END_POINT.COMPANY + idCompany; // Para saber que permisos mostrar
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
