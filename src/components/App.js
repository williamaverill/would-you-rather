import React from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return <div>Hello, world!</div>;
  }
}

export default connect((state) => ({}))(App);
