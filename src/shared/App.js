import React, { useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../pages/Main";
import MeatList from "../pages/MeatList";

function App() {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/meat" exact component={MeatList} />
        <Footer />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
