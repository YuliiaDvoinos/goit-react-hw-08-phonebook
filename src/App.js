import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import NavBar from "./components/NavBar";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </Container>
  );
}

export default App;
