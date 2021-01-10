import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import IndexPage from "./pages/Index";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/Product";
import RegisterPage from "./pages/Register";
import CompleteRegister from "./pages/CompleteRegister";
import history from "./utils/history";

const routes = [
  {
    id: 1,
    url: "/",
    component: IndexPage,
    exact: true,
  },
  {
    id: 2,
    url: "/home",
    component: IndexPage,
    exact: true,
  },
  {
    id: 3,
    url: "/contact",
    component: ContactPage,
    exact: true,
  },
  {
    id: 4,
    url: "/product",
    component: ProductPage,
    exact: true,
  },
  {
    id: 5,
    url: "/login",
    component: LoginPage,
    exact: true,
  },
  {
    id: 6,
    url: "/register",
    component: RegisterPage,
    exact: true,
  },
  {
    id: 7,
    url: "/register/complete",
    component: CompleteRegister,
    exact: false,
  },
];

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((r) => (
          <Route
            key={r.id}
            exact={r.exact}
            path={r.url}
            component={r.component}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
}
