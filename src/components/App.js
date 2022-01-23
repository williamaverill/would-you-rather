import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return <div></div>;
  }
}

export default connect((state) => ({}))(App);
