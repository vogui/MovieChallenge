import { Route, Switch } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import Home from "./home/Home";
import Login from "./login/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
