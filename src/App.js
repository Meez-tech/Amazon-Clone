import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          {/* Default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /* We need React-Router to achieve below  */
}
{
  /* localhost.com/ */
}
{
  /* localhost.com/Checkout */
}
{
  /* localhost.com/Login */
}
