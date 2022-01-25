import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Card } from "react-bootstrap";

import { handleLogOut } from "../actions/users";

const WrappedHome = (props) => {
  const navigation = useNavigate();

  return (
    <Home
      navigation={navigation}
      users={props.users}
      questions={props.questions}
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

  compare = (a, b) => {
    if (a.timestamp < b.timestamp) {
      return 1;
    }
    if (a.timestamp > b.timestamp) {
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
        <h1>Welcome,&nbsp;{this.state.user.name}</h1>
        <Link to="/">
          <Button
            style={{ width: "222px" }}
            variant="outline-warning"
            onClick={this.handleClick}
          >
            Log Out
          </Button>
        </Link>
        <Tabs>
          <TabList>
            <Tab>Unanswered Polls</Tab>
            <Tab>Answered Polls</Tab>
            <Link to={"/leaderboard"}>
              <Tab>Leaderboard</Tab>
            </Link>
            <Link to={"/add"}>
              <Tab>Create A New Poll</Tab>
            </Link>
          </TabList>
          <TabPanel
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul>
              {this.props.questions.sort(this.compare).map((question) => {
                if (
                  !question.optionOne.votes.includes(this.state.user.id) &&
                  !question.optionTwo.votes.includes(this.state.user.id)
                ) {
                  return (
                    <div key={question.id}>
                      <Card>
                        <Card.Body>
                          <Card.Title>Would you rather?</Card.Title>
                          <Card.Subtitle>
                            By&nbsp;{question.author}&nbsp;on&nbsp;
                            {new Date(question.timestamp).toString()}
                          </Card.Subtitle>
                          <Card.Text></Card.Text>
                          <Card.Text>
                            A)&nbsp;{question.optionOne.text}
                          </Card.Text>
                          <Card.Text>
                            B)&nbsp;{question.optionTwo.text}
                          </Card.Text>
                          <Link to={"/questions/:" + question.id}>
                            <Card.Link href="#">View Details</Card.Link>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                }
              })}
            </ul>
          </TabPanel>
          <TabPanel
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul>
              {this.props.questions.sort(this.compare).map((question) => {
                if (
                  question.optionOne.votes.includes(this.state.user.id) ||
                  question.optionTwo.votes.includes(this.state.user.id)
                ) {
                  return (
                    <div key={question.id}>
                      <Card>
                        <Card.Body>
                          <Card.Title>Would you rather?</Card.Title>
                          <Card.Subtitle>
                            By&nbsp;{question.author}&nbsp;on&nbsp;
                            {new Date(question.timestamp).toString()}
                          </Card.Subtitle>
                          <Card.Text></Card.Text>
                          <Card.Text>
                            A)&nbsp;{question.optionOne.text}
                          </Card.Text>
                          <Card.Text>
                            B)&nbsp;{question.optionTwo.text}
                          </Card.Text>
                          <Link to={"/questions/:" + question.id}>
                            <Card.Link href="#">View Details</Card.Link>
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                }
              })}
            </ul>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default connect((state) => ({
  users: state.users,
  questions: state.questions,
}))(WrappedHome);
