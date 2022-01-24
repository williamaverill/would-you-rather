import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";

import ConnectedLogIn from "./LogIn";
import ConnectedHome from "./Home";
import ConnectedQuestion from "./Question";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <div style={{ display: "flex", flex: 1 }}>
        <Routes>
          <Route path="/" element={<ConnectedLogIn />} />
          <Route path="/home" element={<ConnectedHome />} />
          <Route path="home/questions/:id" element={<ConnectedQuestion />} />
        </Routes>
      </div>
    );
  }
}

export default connect((state) => ({}))(App);
