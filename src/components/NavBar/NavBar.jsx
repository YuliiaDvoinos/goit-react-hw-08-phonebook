import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
const useStyles = createUseStyles({
  header: {
    background: "aliceblue",
    padding: 30,
    display: "flex",
    justifyContent: "space-between",
  },
  registrationContainer: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
});
const NavBar = () => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className={styles.registrationContainer}>
        <NavLink to="./register">Register</NavLink>
        <NavLink to="./login">Login</NavLink>
      </div>
    </header>
  );
};
export default NavBar;
