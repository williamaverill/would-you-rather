import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import { handleLogOut } from "../actions/users";

const WrappedHome = (props) => {
  const navigation = useNavigate();

  return (
    <Home
      navigation={navigation}
      users={props.users}
      dispatch={props.dispatch}
    />
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  handleClick = () => {
    if (Object.keys(this.state.user).length > 0) {
      this.props.dispatch(handleLogOut(this.state.user.id));
    }
  };

  componentDidMount() {
    this.setState(
      {
        user:
          this.props.users.filter((user) => user.authenticated === true)[0] ===
          undefined
            ? {}
            : this.props.users.filter((user) => user.authenticated === true)[0],
      },
      () => {
        if (Object.keys(this.state.user).length === 0) {
          this.props.navigation("/", { replace: true });
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Link to="/">
          <Button
            style={{ width: "222px" }}
            variant="outline-warning"
            onClick={this.handleClick}
          >
            Log Out
          </Button>
        </Link>
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
}))(WrappedHome);
