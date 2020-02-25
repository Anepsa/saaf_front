import React from 'react';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
// import Regular from '../../../../../Resources/Add/Regular';
import Nested from '../../../../../Resources/Add/Nested';
import FormBuilder from '../../../../../Resources/FormBuilder';
import AddFormBuilder from '../../../../../Resources/Add/AddFormBuilder';
import NewPanel from '../../../../UI/Panel/NewPanel';
import { END_POINT } from '../../../../../config/endpoints.js';

export default function AddCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	//TODO: Corregir que se envian los meses en 1 y no con el valor escrito.
	const postPath = END_POINT.POST_INPC + idCompany;
	return (
		<AddFormBuilder
			postPath={postPath}
			field="company"
			stateField="meses"
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
							forms={localData.nestedForms}
							name="Agregar Inpcs"
							headers={localData.headers}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
