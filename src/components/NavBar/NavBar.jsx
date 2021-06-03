import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthBar from "../AuthBar";
import UserMenu from "../UserMenu";
import authSelectors from "../../redux/contacts-book-selectors";
const useStyles = createUseStyles({
  header: {
    background: "aliceblue",
    padding: 30,
    display: "flex",
    justifyContent: "space-between",
  },
});
const NavBar = (isAuthenticated) => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      {isAuthenticated ? <UserMenu /> : <AuthBar />}
    </header>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
