import React, { useState } from "react";

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
    <div className="messageForm">
      <form>
        <input value={inputText} onChange={handleChange} />
        <button type="button" onClick={handleSend} disabled={props.muteStatus}>
          Send message
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
