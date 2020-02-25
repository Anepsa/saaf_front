import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import RegFormBuilder from '../../../../Resources/RegFormBuilder';
import { END_POINT } from '../../../../config/endpoints.js';

export default function EditCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const path = END_POINT.COMPANY + idCompany;
	const editPath = END_POINT.COMPANY + idCompany;
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

