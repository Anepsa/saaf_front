import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import Regular from '../../../../Resources/Add/Regular';
import { END_POINT } from '../../../../config/endpoints.js';

export default function AddCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	// TODO: Cambiar la url a la de config/endpoints.js
	const path = END_POINT.COMPANY + idCompany;
	const postPath = END_POINT.COMPANY;
	return (
		<Regular
			path={path}
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
							handleCheckboxChange={properties.handleCheckboxChange} 
							handleInputRender={properties.handleInputRender} 
							forms={localData.nestedForms}
							ocultarCheckbox={true}
							name="Agregar Compañía"
							headers={localData.headers}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
