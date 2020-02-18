import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import RegFormBuilder from '../../../../Resources/RegFormBuilder';

export default function EditSubCompany(props) {
	const { idCompany, idSubCompany } = props.match.params;
	// http://localhost:3000/empresa/:idCompany/:idEmpresa
	const path = `https://murmuring-journey-73788.herokuapp.com/empresa/${idCompany}/${idSubCompany}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/empresa/${idCompany}/${idSubCompany}`;
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
