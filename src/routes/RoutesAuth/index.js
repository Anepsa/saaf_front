import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CompanyCards from "../../Components/CompanyCards";


const RoutesAuth = () => {
  const routes = (
    <React.Fragment>
      <Route exact path={"/activos"} component={CompanyCards} />
      <Route>
        <Redirect to={""} />
      </Route>
 
    </React.Fragment>
  );
  return routes;
};

export default RoutesAuth;
