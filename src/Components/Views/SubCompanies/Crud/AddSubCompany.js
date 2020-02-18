import React from 'react';
import NewPanel from '../../../UI/Panel/NewPanel';
import * as localData from '../Data';
import { Provider } from '../../../../Context/Context';
import Regular from '../../../../Resources/Add/Regular';

export default function AddSubCompany(props) {
	const { idCompany } = props.match.params;
	const postPath = `https://murmuring-journey-73788.herokuapp.com/empresa/${idCompany}`;
	return (
		<Regular
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
