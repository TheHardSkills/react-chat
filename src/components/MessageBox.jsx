import React from "react";
import Message from "./Message";

function MessageBox(props) {
  return (
    <>
      {props.messages ? (
        <div className="MessageBox">
          {props.messages.map((message, i) => {
            return <Message message={message.messageText} key={i} />;
          })}
        </div>
      ) : null}
    </>
  );
}

export default MessageBox;
