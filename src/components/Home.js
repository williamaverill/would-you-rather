import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <Link to="/login">
        <Button style={{ width: "222px" }} variant="outline-warning">
          Log Out
        </Button>
      </Link>
    </div>
  );
}
