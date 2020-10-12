import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';

function MessageForm(props) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const resetInput = () => {
    setInputText("");
  }

  const handleSend = () => {
    props.onSendClick(inputText);
    resetInput();
  };

  return (
    <form className="messageForm">
      <input value={inputText} onChange={handleChange} />
      <button type="button" onClick={handleSend} disabled={props.muteStatus}>
        Send message
              </button>
    </form>
  );
}

export default MessageForm;
