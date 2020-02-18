import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import Regular from '../../../../Resources/Add/Regular';

export default function AddCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/company/${idCompany}`;
	const postPath = `https://murmuring-journey-73788.herokuapp.com/company`;
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
							handleInputRender={properties.handleInputRender} 
							forms={localData.nestedForms}
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
