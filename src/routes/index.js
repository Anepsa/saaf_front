import React from "react";
import { Route , Switch} from "react-router";

export const index = () => {
    function PrivateRoute({ children, ...rest }) {
        return (
          <Route
            {...rest}
            render={({ location }) =>
              sessionStorage.isLoggedIn ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
        );
      }
  return (
    <div>
      <Switch>
      
    

          <Route
            exact
            path="/"
            render={() =>
              sessionStorage.isLoggedIn ? (
                <Redirect to="/company" />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* ================Authentication==================== */}
          <Route
            path="/login"
            render={() =>
              sessionStorage.sessionToken ? (
                <Redirect to="/company" />
              ) : (
                <Login />
              )
            }
          />

          {/* ================Companies==================== */}
          <PrivateRoute
            exact
            strict
            path="/editcompany"
            component={EditCompany}
          />
          <Route
            exact
            path="/company"
            render={() =>
              sessionStorage.sessionToken ? (
                <Companies />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          {/* ================Specific Company==================== */}
          {/* <PrivateRoute  strict path="/company/:id" component={SubCompanyCards} /> */}
          <PrivateRoute
            exact
            strict
            path="/company/:id"
            component={SubCompanies}
          />
          {/* ================Activos==================== */}
          <PrivateRoute exact path="/assets" component={ActivosFijos} />
          {/* ================INPC==================== */}
          <PrivateRoute exact path="/inpc" component={Inpc} />
          <PrivateRoute exact path="/inpc/edit" component={InpcEdit} />
          {/* ================Tipo de Cambio==================== */}
          <PrivateRoute exact path="/tipo_cambio" component={TipoCambio} />

          <PrivateRoute
            exact
            path="/tipo_cambio/edit"
            component={TipoCambioEdit}
          />
          {/* ================Roles==================== */}
          <PrivateRoute exact path="/:id/usuarios" component={Usuarios} />
          <PrivateRoute
            exact
            path="/:id/usuarios/edit"
            component={UsuariosEdit}
          />
          {/* ================Roles==================== */}
          <PrivateRoute exact path="/roles" component={Roles} />
          <PrivateRoute exact path="/roles/edit" component={RolesEdit} />
          {/* ================Empresa==================== */}
          <PrivateRoute
            exact
            path="/company/:id/subcompanies/:id"
            component={Empresa}
          />
          {/* ================Company Add==================== */}
          <PrivateRoute exact path="/company/add" component={CompanyCardsAdd} />

          {/* ================Company Edit==================== */}
          <PrivateRoute
            exact
            path="/company/:id/edit"
            component={CompanyCardsEdit}
          />
          <PrivateRoute exact path="/usuarios/edit" component={UsuariosEdit} />
      
      </Switch>
    </div>
  );
};
