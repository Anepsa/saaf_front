import React from 'react';
import NewPanel from '../../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
// import Regular from '../../../../../Resources/Add/Regular';
import Nested from '../../../../../Resources/Add/Nested';
import UsersService from '../../.././../../Services/UsersService';
import { END_POINT } from '../../../../../config/endpoints.js';

export default function AddCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const postPath = END_POINT.POST_USER + idCompany;
	return (
		<UsersService // Antes Nested
			postPath={postPath}
			field="company"
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
							handleInputChange={properties.handleInputChange} // Nested or Regular
							forms={localData.nestedForms}
							name="Agregar Usuarios"
							headers={localData.headers}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
