import React from 'react';
import CardBuilder from '../../../Resources/CardBuilder';
import CardPanel from '../../UI/Panel/CardPanel';
// import * as localData from "./Data";
import { Provider } from '../../../Context/Context';

export default function SubCompanies(props) {
	const { idCompany, idSubCompany } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/empresa/${idCompany}`;
	const deactLink = `https://murmuring-journey-73788.herokuapp.com/empresa/${idCompany}`;
	const deleteLink = `https://murmuring-journey-73788.herokuapp.com/empresa/${idCompany}`;
	const addButtonLink = `/company/post`;
	// const editPath = `https://murmuring-journey-73788.herokuapp.com/camposempleados/put/${idSubCompany}`;
	// Need To Create generateUrl( ) function to avoid code duplication
	return (
		<CardBuilder
			path={path}
			// editPath={editPath}
			field="empresa"
			render={(properties) => {
				console.log(properties);
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							addButtonLink: `/empresa/${idCompany}/post`,
							deactFunc: properties.deactFunc,
							deactLink: deactLink,

							deleteFunc: properties.deleteFunc,
							deleteLink: deleteLink,

							editLink: `/put/empresa/${idCompany}`
						}}
					>
						<CardPanel isSubCompany={true} name="Empresas" data={properties.data.payload} />
					</Provider>
				);
			}}
		/>
	);
}
