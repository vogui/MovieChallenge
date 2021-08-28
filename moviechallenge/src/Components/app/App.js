import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Home from "../home/Home";
import Login from "../login/Login";
import LoadingModal from "../modals/LoadingModal";
import { useAuth0 } from "@auth0/auth0-react";
import {Div} from './styles'

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <Div>
      {isLoading ? (
        <LoadingModal />
      ) : (
        <>
          <NavBar login={isAuthenticated} />
          <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Redirect to="/home" /> : <Login />}
            </Route>
            <Route path="/home" component={Home} />
          </Switch>
          </div>
        </>
      )}
    </Div>
  );
}

export default App;
