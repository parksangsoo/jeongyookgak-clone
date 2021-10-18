import React, { useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MeatList from "../pages/MeatList";
import Detail from "../pages/Detail";

function App() {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/meat" exact component={MeatList} />
        <Route path = "/detail" exact component={Detail} />
        <Footer />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
