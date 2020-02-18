import React from 'react';
import ApiCaller from '../../../../Resources/ApiCaller';
import * as localData from './Data';
import { Provider } from '../../../../Context/Context';
import RolesTable from './Table/RolesTable';
import SimplePanel from '../../../UI/Panel/SimplePanel';
import OuterDynamicTable from '../../../UI/Table/DynamicTable/OuterDynamicTable';

export default function Roles(props) {
	const { idCompany } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/permisos/get/${idCompany}?desde=0&limite=10&orderby_name=&orderby_apellido=&orderby_email=&search`;
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
							deactLink: `https://murmuring-journey-73788.herokuapp.com/roles/put/${idCompany}`,
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
