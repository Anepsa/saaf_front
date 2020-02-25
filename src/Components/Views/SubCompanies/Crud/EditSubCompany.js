import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import RegFormBuilder from '../../../../Resources/RegFormBuilder';
import { END_POINT } from '../../../../config/endpoints.js';

export default function EditSubCompany(props) {
	const { idCompany, idSubCompany } = props.match.params;
	// http://localhost:3000/empresa/:idCompany/:idEmpresa
	const path = END_POINT.SUB_COMPANY + idCompany + "/" + idSubCompany;
	const editPath = END_POINT.SUB_COMPANY + idCompany + "/" + idSubCompany;
	return (
		<RegFormBuilder
			path={path}
			editPath={editPath}
			field="empresa"
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							apiSubmit: properties.apiPut
						}}
					>
						<NewPanel
							apiSubmit={properties.apiPut}
							handleInputChange={properties.handleInputChange} // Nested or Regular
							handleCheckboxChange={properties.handleCheckboxChange} // Nested or Regular
							handleInputRender={properties.handleInputRender} 
							forms={localData.nestedForms}
							name="Editar Empresa"
							headers={localData.headers}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
