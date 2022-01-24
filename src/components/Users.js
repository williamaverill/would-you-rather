import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "reactjs-dropdown-component";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import { handleLogIn } from "../actions/users";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  selectUser = (user) => {
    this.setState({
      user: user,
    });
  };

  handleClick = () => {
    if (Object.keys(this.state.user).length > 0) {
      this.props.dispatch(handleLogIn(this.state.user.value));
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dropdown
          name="user"
          title="Select user"
          list={this.props.users.map((user) => {
            const item = {};
            item.label = user.name;
            item.value = user.id;

            return item;
          })}
          onChange={(userName) => {
            this.selectUser(userName);
            console.log(userName);
          }}
        />
        <Link to="/home">
          <Button
            style={{ width: "222px" }}
            variant="outline-warning"
            onClick={this.handleClick}
          >
            Log In
          </Button>
        </Link>
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
}))(Users);
