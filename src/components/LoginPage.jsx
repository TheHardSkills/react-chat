import React, { useState, useCallback } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import { sendRequestWithUserData } from "../eventsListen/loginService";

function LoginPage() {
  const history = useHistory();

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
    history.push("/chat");
  };

  return (
    <div>
      <form>
        <input value={inputUsername} onChange={handleUsernameChange} />
        <input
          value={inputPassword}
          onChange={handlePasswordChange}
          type="password"
        />
        <button type="button" onClick={handleSendClick}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
