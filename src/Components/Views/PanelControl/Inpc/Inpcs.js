import React from 'react';
import ApiCaller from '../../../../Resources/ApiCaller';
import ViewPanel from '../../../UI/Panel/ViewPanel';
import * as localData from './Data';
import { Provider } from '../../../../Context/Context';
import OuterStatePanel from '../../../UI/Panel/OuterStatePanel';
import { END_POINT } from '../../../../config/endpoints.js';

export default function Inpcs(props) {
	const { idCompany, idSubCompany, idInpc } = props.match.params;
	const path = END_POINT.GET_INPC + idCompany + "?desde=0&limite=10&orderby_name=&orderby_apellido=&orderby_email=&search";
	// http://localhost:3000/inpc/get/${idCompany}?desde=0&limite=10&orderby_name=&orderby_apellido=&orderby_email=&search
	return (
		<ApiCaller
			path={path}
			field="Inpc" // Response Field Name// ***
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							apiPut: properties.apiPut,
							addButtonLink: `/inpc/post/${idCompany}`, //***
							editButtonLink: `/inpc/put/${idCompany}`, //***
							deactLink: END_POINT.PUT_INPC + idCompany,
							deactFunc: properties.deactFunc,
							dataSelector: 'meses'
						}}
					>
						<OuterStatePanel headers={localData.headers} data={properties.data.payload} name="Inpcsss" />
					</Provider>
				);
			}}
		/>
	);
}
