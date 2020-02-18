import React from 'react';
import NewPanel from '../../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../../Context/Context';
// import Regular from '../../../../../Resources/Add/Regular';
import Nested from '../../../../../Resources/Add/Nested';

export default function AddCompany(props) {
	const { idCompany, idSubCompany, idCampoEmpleado } = props.match.params;
	const postPath = `https://murmuring-journey-73788.herokuapp.com/usuarios/post/${idCompany}`;
	return (
		<Nested
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
							forms={localData.nestedForms}
							name="Agregar Usuarios"
							headers={localData.headers}
							data={properties.data.payload}
						/>
					</Provider>
				);
			}}
		/>
	);
}
