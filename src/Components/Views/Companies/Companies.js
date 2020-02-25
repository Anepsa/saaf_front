import React from 'react';
import CardBuilder from '../../../Resources/CardBuilder';
import CardPanel from '../../UI/Panel/CardPanel';
import {END_POINT} from '../../../config/endpoints.js';
// import * as localData from "./Data";
import { Provider } from '../../../Context/Context';

export default function Companies(props) {
	// const { idCompany, idSubCompany } = props.match.params;
	//const path = `https://murmuring-journey-73788.herokuapp.com/company`;
	const path = END_POINT.COMPANY;

	return (
		<CardBuilder
			path={path}
			// editPath={editPath}
			field="company"
			render={(properties) => {
				console.log(properties);
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							apiPut: properties.apiPut,
							addButtonLink: `/company/post`,
							deactFunc: properties.deactFunc,
							deactLink: END_POINT.COMPANY,

							deleteFunc: properties.deleteFunc,
							deleteLink: END_POINT.COMPANY,

							editLink: `/put/company`
						}}
					>
						<CardPanel
							name="Compañías"
							data={properties.data.payload}
							path="/put/company/:idCompany"
							editLink={`https://murmuring-journey-73788.herokuapp.com/put/company}`} // TODO: investigar para que se usa.
						/>
					</Provider>
				);
			}}
		/>
	);
}
