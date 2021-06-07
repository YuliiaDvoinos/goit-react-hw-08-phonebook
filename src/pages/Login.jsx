import { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/contacts-book-operations.js";
import authSelectors from "../redux/contacts-book-selectors";
import Home from "./Home.jsx";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    const { isAuthenticated } = this.props;
    return (
      <div>
        {isAuthenticated ? (
          <Home />
        ) : (
          <>
            {" "}
            <h1>Страница логина</h1>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>
                Почта
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Пароль
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit">Войти</button>
            </form>
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
