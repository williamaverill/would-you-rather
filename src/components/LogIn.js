import React from "react";
import { connect } from "react-redux";

import Users from "./Users";

class LogIn extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Users users={this.props.users} />
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
}))(LogIn);
