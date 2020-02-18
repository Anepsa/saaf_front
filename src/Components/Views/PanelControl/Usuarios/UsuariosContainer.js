import React from 'react';
import ApiCaller from '../../../../Resources/ApiCaller';
import ViewPanel from '../../../UI/Panel/ViewPanel';
import * as localData from './Data';
import { Provider } from '../../../../Context/Context';

export default function Usuarios(props) {
	const { idCompany, idSubCompany, idUsuario } = props.match.params;
	const path = `https://murmuring-journey-73788.herokuapp.com/usuarios/get/${idCompany}?desde=0&limite=10&orderby_name=&orderby_apellido=&orderby_email=&search`;
	const editPath = `https://murmuring-journey-73788.herokuapp.com/usuarios/put/${idCompany}/${idUsuario}`;
	// http://localhost:3000/usuarios/get/${idCompany}?desde=0&limite=10&orderby_name=&orderby_apellido=&orderby_email=&search
	return (
		<ApiCaller
			path={path}
			editPath={editPath}
			field="usuarios" // Response Field Name// ***
			render={(properties) => {
				if (properties.data.loading) return <img id="loading-spinner" src="/loading.svg" alt="" />;
				return (
					<Provider
						value={{
							apiPut: properties.apiPut,
							addButtonLink: `/usuarios/post/${idCompany}`, //***
							editButtonLink: `/usuarios/put/${idCompany}`, //***
							deactLink: `https://murmuring-journey-73788.herokuapp.com/usuarios/put/${idCompany}`,
							deactFunc: properties.deactFunc,
							dataSelector : "datos"
						}}
					>
						<ViewPanel headers={localData.headers} data={properties.data.payload} name="Usuariosss" />
					</Provider>
				);
			}}
		/>
	);
}
