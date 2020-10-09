import React from "react";
import "../App.css";

function Message(props) {
  return (
    <div className="messageBlock">
      <p>{props.message}</p>
      <p className="author">{props.senderUsername}</p>
    </div>
  );
}

export default Message;
