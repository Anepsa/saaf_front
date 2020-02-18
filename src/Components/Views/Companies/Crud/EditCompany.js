import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import RegFormBuilder from '../../../../Resources/RegFormBuilder';

export default function EditCompany(props) {

	// console.log("************************************************");
	// console.log("localData.nestedForms");
	// console.log(localData.nestedForms);
	// console.log("************************************************");
	
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/company/${idCompany}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/company/${idCompany}`;
	return (
		<RegFormBuilder
		path={path}
		editPath={editPath}
		field="company"
		render={(properties) => {
			// console.log("************************************************");
			// console.log("properties.data.payload");
			// console.log(properties.data.payload);
			// console.log("************************************************");
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							// handleNestedInputChange: properties.handleNestedInputChange,
							addButtonLink: `/camposempleados/post/${idCompany}/${idSubCompany}`,
							editButtonLink: `/camposempleados/put/${idCompany}/${idSubCompany}`,
							apiSubmit: properties.apiPut
						}}
					>
						<NewPanel
							apiSubmit={properties.apiPut}
							handleInputChange={properties.handleInputChange} // Nested or Regular
							handleCheckboxChange={properties.handleCheckboxChange} // Funcion Agregar data a state
							handleInputRender={properties.handleInputRender} // Funcion Agregar data a state
							forms={localData.nestedForms}
							name="Editar Compañía"
							headers={localData.headers}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}

