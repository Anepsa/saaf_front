import React from 'react';
import CardBuilder from '../../../Resources/CardBuilder';
import CardPanel from '../../UI/Panel/CardPanel';
// import * as localData from "./Data";
import { Provider } from '../../../Context/Context';

export default function Companies(props) {
	// const { idCompany, idSubCompany } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/company`;

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
							deactLink: `https://murmuring-journey-73788.herokuapp.com/company`,

							deleteFunc: properties.deleteFunc,
							deleteLink: `https://murmuring-journey-73788.herokuapp.com/company`,

							editLink: `/put/company`
						}}
					>
						<CardPanel
							name="Compañías"
							data={properties.data.payload}
							path="/put/company/:idCompany"
							editLink={`https://murmuring-journey-73788.herokuapp.com/put/company}`}
						/>
					</Provider>
				);
			}}
		/>
	);
}
