import React from 'react';
import ApiCaller from '../../../../Resources/ApiCaller';
import * as localData from './Data';
import { Provider } from '../../../../Context/Context';
import RolesTable from './Table/RolesTable';
import SimplePanel from '../../../UI/Panel/SimplePanel';
import OuterDynamicTable from '../../../UI/Table/DynamicTable/OuterDynamicTable';
import { END_POINT } from '../../../../config/endpoints.js';

export default function Roles(props) {
	const { idCompany } = props.match.params;
	const path = END_POINT.GET_ROLES + idCompany + "?desde=0&limite=10&orderby_name=&orderby_apellido=&orderby_email=&search";
	console.log("Roles props")
	console.log(props)
	return (
		<ApiCaller
			path={path}
			field="roles" // Response Field Name// ***
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							apiSubmit: properties.apiPut,
							addButtonLink: `/roles/post/${idCompany}`, //***
							deactLink: END_POINT.PUT_ROLES + idCompany,
							deactFunc: properties.deactFunc
						}}
					>
						<SimplePanel name="Roles">
							<RolesTable
								dataSelector="persmisos"
								headers={localData.headers}
								data={properties.data.payload}
								editButtonLink={`/roles/put/${idCompany}`} //***
							/>
						</SimplePanel>
					</Provider>
				);
			}}
		/>
	);
}
