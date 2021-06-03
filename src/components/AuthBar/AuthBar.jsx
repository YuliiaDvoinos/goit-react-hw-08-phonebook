import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
const useStyles = createUseStyles({
  registrationContainer: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
});
const AuthBar = () => {
  const styles = useStyles();
  return (
    <div className={styles.registrationContainer}>
      <NavLink to="./register">Register</NavLink>
      <NavLink to="./login">Login</NavLink>
    </div>
  );
};
export default AuthBar;
