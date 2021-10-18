import React,{useEffect} from "react"
import './App.css';
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Grid } from "../elements";
import Header from "../components/Header";
import MeatList from "../pages/MeatList";

function App() {

  useEffect(() => {
  
  }, []);

  return (
    <React.Fragment>
       <Grid>
        <ConnectedRouter history={history}>
          <Header></Header>
          <Route path="/meat" exact component={MeatList} />
      </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
