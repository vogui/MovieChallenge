import Login from "./Auth0/Login";
import Logout from "./Auth0/Logout";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Login />
        <Logout />
      </header>
    </div>
  );
}

export default App;
