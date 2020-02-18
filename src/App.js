import React, { useState, Component } from 'react';
import './App.css';
import TopNavigation from './Components/UI/Navbar/Navbar';
import Sidebar from './Components/UI/Sidebar/';
import Login from './Components/Views/Login/Index';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import ActivosFijos from './Components/Views/ActivosFijos';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// browserHistory
// import Usuarios from "./Components/Views/PanelControl/Usuarios";
// import UsuariosEdit from "./Components/Views/PanelControl/Usuarios/CRUD/EditUsers";
// import RolesEdit from './Components/Views/PanelControl/Roles/Edit/RolesEdit';
// ==================Redux==================
import { connect } from 'react-redux';

import Companies from './Components/Views/Companies/Companies';

import Proveedores from './Components/Views/Configuración/Proveedores/Proveedores';

import AddProvider from './Components/Views/Configuración/Proveedores/CRUD/AddProvider';
import TreeView from './TreeView';
import Proyectos from './Components/Views/Configuración/Proyectos/Proyectos';
import EditProyecto from './Components/Views/Configuración/Proyectos/CRUD/EditProyecto';
import AddProyecto from './Components/Views/Configuración/Proyectos/CRUD/AddProyecto';
import Treesss from './TreeView copy';
import CostCenters from './Components/Views/Configuración/CostCenter/CostCenters';
import EditCostCenter from './Components/Views/Configuración/CostCenter/Crud/EditCostCenter';
import AddCostCenter from './Components/Views/Configuración/CostCenter/Crud/AddCostCenter';
// import EditUser from './Components/Views/PanelControl/Users/Crud/EditUser';
import Tdc from './Components/Views/PanelControl/TDC/Tdc';
import AddTdc from './Components/Views/PanelControl/TDC/CRUD/AddTdc';
import EditTdc from './Components/Views/PanelControl/TDC/CRUD/EditTdc';
import SubCompanies from './Components/Views/SubCompanies/SubCompanies';

import NewTableContainer from './Components/UI/Table/NewTableContainer';

// import EmpleadosContainer from "./Components/Views/Configuración/Empleados/EmpleadosContainer";
import CuentasContablesContainer from './Components/Views/Configuración/CuentasContables/CuentasContablesContainer';
import EditCuentasContables from './Components/Views/Configuración/CuentasContables/Crud/EditCuentasContables';
import AddCuentasContables from './Components/Views/Configuración/CuentasContables/Crud/AddCuentasContables';
import TiposDeActivosContainer from './Components/Views/Configuración/TiposDeActivo/TiposDeActivosContainer';
import EditTiposDeActivos from './Components/Views/Configuración/TiposDeActivo/Crud/EditTiposDeActivos';
import AddTiposDeActivos from './Components/Views/Configuración/TiposDeActivo/Crud/AddTiposDeActivos';

import UsuariosContainer from './Components/Views/PanelControl/Usuarios/UsuariosContainer';
import { NotFound } from './Components/Views/Other/NotFound';
import ConfigEmpleadosContainer from './Components/Views/Configuración/ConfigEmpleados/ConfigEmpleadosContainer';
// import AddConfigEmpleados from './Components/Views/Configuración/ConfigEmpleados/Crud/AddConfigEmpleados';
import EditConfigEmpleados from './Components/Views/Configuración/ConfigEmpleados/Crud/EditConfigEmpleados';
import EditCompany from './Components/Views/Companies/Crud/EditCompany';
import AddCompany from './Components/Views/Companies/Crud/AddCompany';
import AddSubCompany from './Components/Views/SubCompanies/Crud/AddSubCompany';
import EditSubCompany from './Components/Views/SubCompanies/Crud/EditSubCompany';
import AddUsuarios from './Components/Views/PanelControl/Usuarios/Crud/AddUsuarios';
import EditUsuarios from './Components/Views/PanelControl/Usuarios/Crud/EditUsuarios';
import Inpcs from './Components/Views/PanelControl/Inpc/Inpcs';
import AddInpcs from './Components/Views/PanelControl/Inpc/Crud/AddInpcs';
import EditInpcs from './Components/Views/PanelControl/Inpc/Crud/EditInpcs';
import AddRoles from './Components/Views/PanelControl/Roles/Crud/AddRoles';
import EditRoles from './Components/Views/PanelControl/Roles/Crud/EditRoles';
import Roles from './Components/Views/PanelControl/Roles/Roles';

// import { Test } from "./Components/ATEST/test";
function App(props) {
	console.log(props.history);
	const PrivateRoute = ({ component: Component, ...rest }) => {
		return (
			// Show the component only when the user is logged in
			// Otherwise, redirect the user to /signin page
			<Route
				{...rest}
				render={(props) => (sessionStorage.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)}
			/>
		);
	};

	// const appWide = sessionStorage.isCompanySelected ? "200px" : "0";
	const showSideBar = sessionStorage.sessionToken ? <Sidebar /> : null;

	// const showSideBar = props.companyId ? <Sidebar /> : <Sidebar />;
	const appWide = sessionStorage.company ? '200px' : '200px';
	const customHistory = createBrowserHistory();

	return (
		<Router history={customHistory}>
			{/* <Switch> */}
			<div className="App" style={{ marginLeft: appWide }}>
				<TopNavigation />
				{showSideBar}
				<NotificationContainer />

				<Route
					exact
					path="/"
					render={() => (sessionStorage.sessionToken ? <Companies /> : <Redirect to="/login" />)}
				/>
				{/* ================Authentication==================== */}
				<Route
					path="/login"
					render={() => (sessionStorage.sessionToken ? <Redirect to="/company" /> : <Login />)}
				/>

				{/* ================Subcompanies==================== */}
				{/* ================tree==================== */}
				<PrivateRoute exact path="/treeview" component={TreeView} />
				<PrivateRoute exact path="/tredeview" component={Treesss} />
				{/* ================Companies ==================== */}
				<Switch>
					<PrivateRoute exact path="/company" component={Companies} />

					<PrivateRoute exact strict path="/company/post" component={AddCompany} />

					<PrivateRoute exact path="/put/company/:idCompany" component={EditCompany} />

					{/* ================SubCompany==================== */}
					<PrivateRoute exact strict path="/empresa/:idCompany" component={SubCompanies} />

					<PrivateRoute exact strict path="/empresa/:idCompany/post" component={AddSubCompany} />
					<PrivateRoute
						exact
						strict
						path="/put/empresa/:idCompany/:idSubCompany"
						component={EditSubCompany}
					/>
					{/* http://localhost:3000/empresa/:idcompany?desde=0&limite=1 */}
					{/* ====================================================
                           PANEL DE CONTROL
          ==================================================== */}
					{/* ================uUSERS==================== */}
					<PrivateRoute exact path="/usuarios/get/:idCompany" component={UsuariosContainer} />
					<PrivateRoute exact path="/usuarios/post/:idCompany" component={AddUsuarios} />
					<PrivateRoute exact path="/usuarios/put/:idCompany/:idUsuario" component={EditUsuarios} />
					{/* ================INPC==================== */}
					<PrivateRoute exact path="/inpc/get/:idCompany" component={Inpcs} />
					<PrivateRoute exact path="/inpc/post/:idCompany" component={AddInpcs} />
					<PrivateRoute exact path="/inpc/put/:idCompany/:idInpc" component={EditInpcs} />
					{/* ================Roles==================== */}
					<PrivateRoute exact path="/roles/get/:idCompany" component={Roles} />
					<PrivateRoute exact path="/roles/post/:idCompany" component={AddRoles} />
					<PrivateRoute exact path="/roles/put/:idCompany/:idRol" component={EditRoles} />
					{/* ================TIPO DE CAMBIO==================== */}
					<PrivateRoute exact path="/tiposdecambio/get/:idCompany" component={Tdc} />
					<PrivateRoute exact path="/tiposdecambio/post/:idCompany" component={AddTdc} />
					<PrivateRoute exact path="/tiposdecambio/put/:idCompany/idUser" component={EditTdc} />
					{/* ====================================================
                           CONFIGURACION
          ==================================================== */}
					{/* ================Proveedores==================== */}
					<PrivateRoute exact path="/proveedor/get/:idCompany/:idSubCompany" component={Proveedores} />
					<PrivateRoute exact path="/tiposdecambio/put/:idCompany/idUser" component={EditTdc} />
					<PrivateRoute exact path="/proveedor/post/:idCompany/:idSubCompany" component={AddProvider} />

					{/* ================ConfigEmpleados==================== */}
					<PrivateRoute
						exact
						path="/camposempleados/get/:idCompany/:idSubCompany"
						component={ConfigEmpleadosContainer}
					/>
					<PrivateRoute
						exact
						path="/camposempleados/put/:idCompany/:idSubCompany/:idCampoEmpleado"
						component={EditConfigEmpleados}
					/>
					<PrivateRoute
						exact
						path="/camposempleados/post/:idCompany/:idSubCompany"
						// component={AddConfigEmpleados}
					/>
					{/* ================Proyectos==================== */}
					<PrivateRoute exact path="/proyecto/get/:idCompany/:idSubCompany" component={Proyectos} />
					<PrivateRoute
						exact
						path="/proyecto/edit/:idCompany/:idSubCompany/:idProject"
						component={EditProyecto}
					/>
					<PrivateRoute exact path="/proyecto/post/:idCompany/:idSubCompany" component={AddProyecto} />
					{/* ================Cost Centers==================== */}
					<PrivateRoute exact path="/centrodecostos/get/:idCompany/:idSubCompany" component={CostCenters} />
					<PrivateRoute
						exact
						path="/centrodecostos/edit/:idCompany/:idSubCompany/:idCentroDeCostos"
						component={EditCostCenter}
					/>
					<PrivateRoute
						exact
						path="/centrodecostos/post/:idCompany/:idSubCompany"
						component={AddCostCenter}
					/>
					{/* ================Empleados==================== */}
					{/* <PrivateRoute
            exact
            path="/empleados/get/:idCompany/:idSubCompany"
            component={EmpleadosContainer}
          />
          <PrivateRoute
            exact
            path="/empleados/edit/:idCompany/:idSubCompany/:idEmpleado"
            component={EditEmpleados}
          />
          <PrivateRoute
            exact
            path="/empleados/post/:idCompany/:idSubCompany"
            component={AddEmpleados}
          /> */}

					{/* ================Cuentas Contables==================== */}
					<PrivateRoute
						exact
						path="/cuentascontables/get/:idCompany/:idSubCompany"
						component={CuentasContablesContainer}
					/>
					<PrivateRoute
						exact
						path="/cuentascontables/edit/:idCompany/:idSubCompany/:idCuentaContable"
						component={EditCuentasContables}
					/>
					<PrivateRoute
						exact
						path="/cuentascontables/post/:idCompany/:idSubCompany"
						component={AddCuentasContables}
					/>
					{/* ================Tipos de Activos=================== */}
					<PrivateRoute
						exact
						path="/tiposactivo/get/:idCompany/:idSubCompany"
						component={TiposDeActivosContainer}
					/>

					<PrivateRoute
						exact
						path="/tiposactivo/edit/:idCompany/:idSubCompany/:idCuentaContable"
						component={EditTiposDeActivos}
					/>
					<PrivateRoute
						exact
						path="/tiposactivo/post/:idCompany/:idSubCompany"
						component={AddTiposDeActivos}
					/>
				</Switch>
			</div>

			{/* ===============Testing================= */}
			<PrivateRoute
				path="/testing"
				// exact
				component={NewTableContainer}
			/>

			{/* </Switch> */}
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		sessionToken: state.sessionToken,
		dataToken: state.dataToken,
		isLoggedIn: state.isLoggedIn,
		companyId: state.companyId,
		notificationMsg: state.notificationMsg
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// onLoginSubmit: token => dispatch(actionCreators.logIn(token))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
