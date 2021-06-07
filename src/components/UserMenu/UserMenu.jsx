import React from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/contacts-book-operations.js";
import authSelectors from "../../redux/contacts-book-selectors";

import defaultAvatar from "./defaul-image.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => {
  console.log(name);
  return (
    <div style={styles.container}>
      <img src={avatar} alt="avatar" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
