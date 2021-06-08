import { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import authSelectors from "../redux/auth/auth-selectors";
import Home from "./Home.jsx";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { name, email, password } = this.state;
    const { isAuthenticated } = this.props;

    return (
      <div>
        {isAuthenticated ? (
          <Home />
        ) : (
          <>
            <h1>Страница регистрации</h1>

            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>
                Имя
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>

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

              <button type="submit">Зарегистрироваться</button>
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
  onRegister: authOperations.register,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
