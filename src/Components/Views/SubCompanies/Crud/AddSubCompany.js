import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import Regular from '../../../../Resources/Add/Regular';
import { END_POINT } from '../../../../config/endpoints.js';

export default function AddSubCompany(props) {
	const { idCompany } = props.match.params;
	const postPath = END_POINT.SUB_COMPANY + idCompany;
	return (
		<Regular
		postPath={postPath}
		field="company"
		render={(properties) => {
			console.log(properties)
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
							name="Agregar Empresa"
							headers={localData.headers}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
