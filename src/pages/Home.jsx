import { connect } from "react-redux";
import GreetingMessage from "../components/GreetingMessage/GreetingMessage";
import authSelectors from "../redux/auth/auth-selectors";

const AuthenticatedHomePage = (
  <h1>
    Your registration/login succes. To get started, go to the "contacts" tabю
  </h1>
);

const Home = ({ isAuthenticated }) => {
  return <>{isAuthenticated ? AuthenticatedHomePage : <GreetingMessage />}</>;
};
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Home);
