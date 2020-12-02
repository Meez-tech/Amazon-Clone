import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //Code to run based on a condition
  //useEffect HOOK (VIP)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //cleanup operation
      unsubscribe();
    };
  }, []);

  console.log("USER IS ====> ", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
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
