import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import RegFormBuilder from '../../../../Resources/RegFormBuilder';

export default function EditCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/company/${idCompany}`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/company/${idCompany}`;
	return (
		<RegFormBuilder
			path={path}
			editPath={editPath}
			field="company"
			render={(properties) => {
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
							handleInputRender={properties.handleInputRender} // Nested or Regular
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

