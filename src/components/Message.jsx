import React from "react";
import "../App.css";

function Message(props) {
  return (
    <div className="messageBlock">
      <p>{props.message}</p>
    </div>
  );
}

export default Message;
