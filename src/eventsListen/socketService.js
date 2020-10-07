import io from "socket.io-client";

const currentToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblN0YXR1cyI6dHJ1ZSwib25NdXRlIjpmYWxzZSwidXNlcm5hbWUiOiJLaW8iLCJpZCI6IjVmNzQ0YTMxODljMjg4MTU4NzNmNDZmYyIsImlhdCI6MTYwMTk5ODMxOSwiZXhwIjoxNjAyMDg0NzE5fQ._xhfa4AEjQDS_2DejedQzggg-m9M_jfy7HckzjVDUxc";
const socket = io(`http://localhost:3000/?token=${currentToken}`);

const sendUserMessage = (messageText) => {
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

const subscribeToMessages = (cb) => {
  socket.on("message", (msgInfo) => {
    console.log("msgInfo", msgInfo);
    cb(msgInfo);
  });
};

const unsubscribe = () => {
  socket.close();
};

export { sendUserMessage, unsubscribe, subscribeToMessages };
