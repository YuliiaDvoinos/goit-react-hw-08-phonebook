import { connect } from "react-redux";
import GreetingMessage from "../components/GreetingMessage/GreetingMessage";
import authSelectors from "../redux/contacts-book-selectors";

const Home = ({ isAuthenticated }) => {
  return <>{isAuthenticated ? <></> : <GreetingMessage />}</>;
};
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Home);
