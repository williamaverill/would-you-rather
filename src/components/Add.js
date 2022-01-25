import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import { generateUID } from "../_DATA";
import { handleCreateQuestion } from "../actions/shared";

const WrappedAdd = (props) => {
  const navigation = useNavigate();

  return (
    <Add
      navigation={navigation}
      users={props.users}
      dispatch={props.dispatch}
    />
  );
};

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      optionOne: "",
      optionTwo: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.optionOne);
    console.log(this.state.optionTwo);
    this.props.dispatch(
      handleCreateQuestion({
        id: generateUID(),
        author: this.state.user.id,
        timestamp: Date.now(),
        optionOne: {
          votes: [],
          text: this.state.optionOne,
        },
        optionTwo: {
          votes: [],
          text: this.state.optionTwo,
        },
      })
    );
    this.props.navigation("/home", { replace: true });
  }

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
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Would You Rather</h1>
        <form onSubmit={this.handleSubmit}>
          <p></p>
          <label style={{ width: 222 }}>Enter option A</label>
          <p></p>
          <input
            style={{ width: 222 }}
            type="text"
            onChange={(event) =>
              this.setState({
                optionOne: event.target.value,
              })
            }
            value={this.state.optionOne}
          ></input>
          <p></p>
          <label style={{ width: 222 }}>Enter option B</label>
          <p></p>
          <input
            style={{ width: 222 }}
            type="text"
            onChange={(event) =>
              this.setState({
                optionTwo: event.target.value,
              })
            }
            value={this.state.optionTwo}
          ></input>
          <p></p>
          <Button
            style={{ width: "222px" }}
            variant="outline-warning"
            type="submit"
          >
            Create
          </Button>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
}))(WrappedAdd);
