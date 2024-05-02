import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as WrapperRoutes,
} from "react-router-dom";
import routes from "./routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        {routes.map((item, key) => (
          <Route key={key} path={item.path} Component={item.element} />
        ))}
      </WrapperRoutes>
    </BrowserRouter>
  );
};

export default Routes;
