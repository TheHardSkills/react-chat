import io from "socket.io-client";
import React from "react";
import Message from "../components/Message";

//const currentToken = localStorage.getItem("token");
const currentToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblN0YXR1cyI6dHJ1ZSwib25NdXRlIjpmYWxzZSwidXNlcm5hbWUiOiJLaW8iLCJpZCI6IjVmNzQ0YTMxODljMjg4MTU4NzNmNDZmYyIsImlhdCI6MTYwMTk5ODMxOSwiZXhwIjoxNjAyMDg0NzE5fQ._xhfa4AEjQDS_2DejedQzggg-m9M_jfy7HckzjVDUxc";
const socket = io(`http://localhost:3000/?token=${currentToken}`);

const sendUserMessage = () => {
  const messageText = document.getElementById("inputWithMessageFromClient")
    .value;
  if (messageText.length < 1) {
    alert("Write a message");
    return;
  }
  if (messageText.length >= 200) {
    alert("The message cannot exceed 200 characters");
    return;
  }
  socket.emit("chat message", messageText);
  console.log("messageText", messageText);
};
const messageListener = () => {
  socket.on("message", (msgInfo) => {
    //mssgBlckCreator(msgInfo.messageText, msgInfo.addTime, msgInfo.senderUsername);
    return <Message text={msgInfo.messageText} />;
  });
};

export { sendUserMessage, messageListener };
