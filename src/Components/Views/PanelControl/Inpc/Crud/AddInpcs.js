import React from 'react';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
// import Regular from '../../../../../Resources/Add/Regular';
import Nested from '../../../../../Resources/Add/Nested';
import FormBuilder from '../../../../../Resources/FormBuilder';
import AddFormBuilder from '../../../../../Resources/Add/AddFormBuilder';
import NewPanel from '../../../../UI/Panel/NewPanel';

export default function AddCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const postPath = `https://murmuring-journey-73788.herokuapp.com/inpc/post/${idCompany}`;
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
