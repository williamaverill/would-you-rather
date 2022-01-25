import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Card } from "react-bootstrap";

const WrappedLeaderboard = (props) => {
  const navigation = useNavigate();

  return (
    <Leaderboard
      navigation={navigation}
      users={props.users}
      dispatch={props.dispatch}
    />
  );
};

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  compare = (a, b) => {
    if (
      a.questions.length + Object.keys(a.answers).length <
      b.questions.length + Object.keys(b.answers).length
    ) {
      return 1;
    }
    if (
      a.questions.length + Object.keys(a.answers).length >
      b.questions.length + Object.keys(b.answers).length
    ) {
      return -1;
    }
    return 0;
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h1>Leaderboard</h1>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul>
            {this.props.users.sort(this.compare).map((user) => {
              return (
                <div key={user.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{user.name}</Card.Title>
                      <img alt="avatar" src={user.avatarURL}></img>
                      <Card.Text></Card.Text>
                      <Card.Text>
                        # of questions asked =&nbsp;{user.questions.length}
                      </Card.Text>
                      <Card.Text>
                        # of questions answered =&nbsp;
                        {Object.keys(user.answers).length}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
}))(WrappedLeaderboard);
