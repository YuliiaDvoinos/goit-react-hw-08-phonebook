import { NavLink } from "react-router-dom";
import styles from "./auth-bar.module.css";

const AuthBar = () => {
  return (
    <div className={styles.registrationContainer}>
      <NavLink to="./register">Register</NavLink>
      <NavLink to="./login">Login</NavLink>
    </div>
  );
};
export default AuthBar;
