import React from 'react';
import NewPanel from '../../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
import FormBuilder from '../../../../../Resources/FormBuilder';
import PutFormBuilder from '../../../../../Resources/Put/PutFormBuilder';
import ComplexPanel from '../../../../UI/Panel/ComplexPanel';

export default function EditInpcs(props) {
	const { idCompany, idSubCompany, idInpc } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/inpc/get/${idCompany}/${idInpc}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/inpc/put/${idCompany}/${idInpc}`;
	return (
		<PutFormBuilder
			path={path}
			editPath={editPath}
			field="inpc"
			stateField= "meses"
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							// handleNestedInputChange: properties.handleNestedInputChange,
							editButtonLink: `/inpc/put/${idCompany}`,
							apiPut: properties.apiPut,
							apiSubmit: properties.apiPut
						}}
					>
						<ComplexPanel
							handleNestedInputChange={properties.handleNestedInputChange}
							handleInputChange={properties.handleInputChange} // Nested or Regular
							forms={localData.nestedForms}
							name="Editar Configuración Empleados"
							headers={localData.headers}
							innerData={properties.data.payload.meses}
							outerData={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
