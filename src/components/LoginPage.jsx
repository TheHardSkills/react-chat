import React, { useState, useCallback } from "react";
import { Row, Col, Container } from 'react-bootstrap';

import "../App.css";
import { sendRequestWithUserData } from "../eventsListen/loginService";

function LoginPage() {

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleUsernameChange = (e) => {
    setInputUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSendClick = () => {
    sendRequestWithUserData({ inputUsername, inputPassword });
    localStorage.setItem("username", inputUsername);
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <form>
            <input value={inputUsername} onChange={handleUsernameChange} />
            <input
              value={inputPassword}
              onChange={handlePasswordChange}
              type="password"
            />
            <button className="signInBttn" type="button" onClick={handleSendClick}>
              Sign in
        </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
