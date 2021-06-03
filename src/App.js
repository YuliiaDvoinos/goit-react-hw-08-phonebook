import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";
import routes from "./routes";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
import Container from "./components/Container/Container";

const Home = lazy(() =>
  import("./pages/Home" /*webpackChunkName: "home-page"*/)
);
const Register = lazy(() =>
  import("./pages/Register" /*webpackChunkName: "register-page"*/)
);
const Login = lazy(() =>
  import("./pages/Login" /*webpackChunkName: "login-page"*/)
);
const Contacts = lazy(() =>
  import("./pages/Contacts" /*webpackChunkName: "contacts-page"*/)
);
function App() {
  return (
    <Container>
      <div className="App">
        <NavBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.HomePage} component={Home} />
            <Route path={routes.RegisterPage} component={Register} />
            <Route path={routes.LoginPage} component={Login} />
            <Route path={routes.ContactsPage} component={Contacts} />
          </Switch>
        </Suspense>
      </div>
    </Container>
  );
}

export default App;
