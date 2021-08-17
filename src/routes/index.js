import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Login from "../components/login";
import SignUp from "../components/signup";
import Home from "../page/home";

const Routes = () => {
  return (
    <Router>
      <Route
        path="/"
        render={() => {
          return <Redirect to="/log-in" />;
        }}
      />
      <Route path="/log-in" component={Login}  />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" component={Home} exact/>
    </Router>
  );
};

export default Routes;
