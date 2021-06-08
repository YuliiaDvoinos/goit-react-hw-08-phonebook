import { Route, Switch } from "react-router";
import { Component, lazy, Suspense } from "react";
import routes from "./routes";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
import Container from "./components/Container/Container";
import authOperations from "./redux/auth/auth-operations";
import { connect } from "react-redux";

const Home = lazy(() =>
  import("./pages/Home" /*webpackChunkName: "home-page"*/)
);
const Register = lazy(() =>
  import("./pages/Register" /*webpackChunkName: "register-page"*/)
);
const Login = lazy(() =>
  import("./pages/Login" /*webpackChunkName: "login-page"*/)
);
const ContactsPage = lazy(() =>
  import("./pages/Contacts" /*webpackChunkName: "contacts-page"*/)
);
class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <Container>
        <div className="App">
          <NavBar />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path={routes.HomePage} component={Home} />
              <Route path={routes.RegisterPage} component={Register} />
              <Route path={routes.LoginPage} component={Login} />
              <Route path={routes.ContactsPage} component={ContactsPage} />
            </Switch>
          </Suspense>
        </div>
      </Container>
    );
  }
}
const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
