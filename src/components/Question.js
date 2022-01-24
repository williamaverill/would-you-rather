import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const WrappedQuestion = (props) => {
  const navigation = useNavigate();
  const { id } = useParams();

  return (
    <Question
      navigation={navigation}
      users={props.users}
      questions={props.questions}
      dispatch={props.dispatch}
      id={id}
    />
  );
};

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    console.log(this.props.id);
    this.setState({
      user:
        this.props.users.filter((user) => user.authenticated === true)[0] ===
        undefined
          ? {}
          : this.props.users.filter((user) => user.authenticated === true)[0],
    });
  }

  render() {
    if (Object.keys(this.state.user).length > 0) {
      if (
        !this.props.questions
          .find((question) => question.id === this.props.id.substring(1))
          .optionOne.votes.includes(this.state.user.id) &&
        !this.props.questions
          .find((question) => question.id === this.props.id.substring(1))
          .optionTwo.votes.includes(this.state.user.id)
      ) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card>
              <Card.Body>
                <Card.Title>Would you rather?</Card.Title>
                <Card.Text></Card.Text>
                <img
                  src={
                    this.props.users.find(
                      (user) =>
                        user.id ===
                        this.props.questions.find(
                          (question) =>
                            question.id === this.props.id.substring(1)
                        ).author
                    ).avatarURL
                  }
                />
                <Card.Text></Card.Text>
                <Card.Text>
                  A)&nbsp;
                  {
                    this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionOne.text
                  }
                </Card.Text>
                <Card.Text>
                  B)&nbsp;
                  {
                    this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionTwo.text
                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      } else {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card>
              <Card.Body>
                <Card.Title>Would you rather?</Card.Title>
                <Card.Text></Card.Text>
                <img
                  src={
                    this.props.users.find(
                      (user) =>
                        user.id ===
                        this.props.questions.find(
                          (question) =>
                            question.id === this.props.id.substring(1)
                        ).author
                    ).avatarURL
                  }
                />

                <Card.Text
                  style={
                    this.props.questions
                      .find(
                        (question) => question.id === this.props.id.substring(1)
                      )
                      .optionOne.votes.includes(this.state.user.id)
                      ? { color: "orange" }
                      : { color: "black" }
                  }
                >
                  A)&nbsp;
                  {
                    this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionOne.text
                  }
                </Card.Text>

                <Card.Text>
                  # of votes =&nbsp;
                  {
                    this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionOne.votes.length
                  }
                </Card.Text>
                <Card.Text>
                  {Math.round(
                    (this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionOne.votes.length /
                      (this.props.questions.find(
                        (question) => question.id === this.props.id.substring(1)
                      ).optionOne.votes.length +
                        this.props.questions.find(
                          (question) =>
                            question.id === this.props.id.substring(1)
                        ).optionTwo.votes.length)) *
                      100
                  )}
                  % of votes
                </Card.Text>
                <Card.Text
                  style={
                    this.props.questions
                      .find(
                        (question) => question.id === this.props.id.substring(1)
                      )
                      .optionTwo.votes.includes(this.state.user.id)
                      ? { color: "orange" }
                      : { color: "black" }
                  }
                >
                  B)&nbsp;
                  {
                    this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionTwo.text
                  }
                </Card.Text>
                <Card.Text>
                  # of votes =&nbsp;
                  {
                    this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionTwo.votes.length
                  }
                </Card.Text>
                <Card.Text>
                  {Math.round(
                    (this.props.questions.find(
                      (question) => question.id === this.props.id.substring(1)
                    ).optionTwo.votes.length /
                      (this.props.questions.find(
                        (question) => question.id === this.props.id.substring(1)
                      ).optionOne.votes.length +
                        this.props.questions.find(
                          (question) =>
                            question.id === this.props.id.substring(1)
                        ).optionTwo.votes.length)) *
                      100
                  )}
                  % of votes
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      }
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          v
        >
          <h1 style={{ color: "red" }}>404: Page Not Found</h1>
          <h3>Please Log In</h3>
        </div>
      );
    }
  }
}

export default connect((state) => ({
  users: state.users,
  questions: state.questions,
}))(WrappedQuestion);
