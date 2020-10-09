import React from "react";
import Message from "./Message";

function MessageBox(props) {
  console.log("props", props);
  return (
    <>
      {props.messages ? (
        <div className="MessageBox">
          {props.messages.map((message, i) => {
            if (message.senderUsername === props.currentUserName) {
              return (<Message clsNm={"msgsCtntUsr"} message={message.messageText} senderUsername={message.senderUsername} key={i} />)
            } else {
              return (<Message clsNm={"msgsOthrUsrs"} message={message.messageText} senderUsername={message.senderUsername} key={i} />)
            }
          })}
        </div>
      ) : null}
    </>
  );
}

export default MessageBox;
