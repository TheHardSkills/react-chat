import React, { useState } from "react";
import "../App.css";

function MessageForm(props) {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    props.onSendClick(inputText);
  };
  return (
    <div className="messageForm">
      <form>
        <input value={inputText} onChange={handleChange} />
        <button type="button" onClick={handleSend}>
          Send message
        </button>
      </form>
    </div>
  );
}

export default MessageForm;
