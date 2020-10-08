import React from "react";
import "./App.css";
import ChatPage from "./components/ChatPage";
import LoginPage from "./components/LoginPage";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/chat" component={ChatPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
