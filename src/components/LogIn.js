import React from "react";
import { connect } from "react-redux";

import { handleLogIn } from "../actions/users";

import Users from "./Users";

class LogIn extends React.Component {
  render() {
    return <Users users={this.props.users} />;
  }
}

export default connect((state) => ({
  users: state.users,
}))(LogIn);
