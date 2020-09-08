import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/JournalApp/auth/login" component={LoginScreen}></Route>
          <Route exact path="/JournalApp/auth/register" component={RegisterScreen}></Route>
          <Redirect to="/JournalApp/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
