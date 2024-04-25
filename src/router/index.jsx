import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as WrapperRoutes,
} from "react-router-dom";
import { Home, Login } from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
      </WrapperRoutes>
    </BrowserRouter>
  );
};

export default Routes;
