import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";

import ConnectedLogIn from "./LogIn";
import Home from "./Home";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/login" element={<ConnectedLogIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default connect((state) => ({}))(App);
