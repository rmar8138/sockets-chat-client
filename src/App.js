import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/room/:roomName" component={Room} />
    </Switch>
  </Router>
);

export default App;
