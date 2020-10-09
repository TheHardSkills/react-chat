import io from "socket.io-client";

// const currentToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblN0YXR1cyI6dHJ1ZSwib25NdXRlIjpmYWxzZSwidXNlcm5hbWUiOiJLaW8iLCJpZCI6IjVmNzQ0YTMxODljMjg4MTU4NzNmNDZmYyIsImlhdCI6MTYwMjA4NjU0OCwiZXhwIjoxNjAyMTcyOTQ4fQ.19pfcKDtbe_-aXZ0Y3SnrwDecfz2SgyTSVzUm0WNKHw";
const currentToken = localStorage.getItem("token");
let socket;

const connect = () => {
  socket = io(`http://localhost:3002/?token=${currentToken}`);
};

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
};

const showAllUsers = (cbck) => {
  socket.on("show all users", (allOnlnUsrsArr) => {
    cbck(allOnlnUsrsArr);
  });
};

const showOnlineUsers = (cbck) => {
  socket.on("user online", (allOnlnUsrsArr) => {
    cbck(allOnlnUsrsArr);
  });
};

const downloadMessageHistory = (cbck) => {
  socket.on("download message history", (allMessages) => {
    cbck(allMessages);
  });
};

const muteUser = (userId) => {
  socket.emit("mute", userId);
  console.log("mute user id = ", userId);
};
const banUser = (banUserId) => {
  socket.emit("ban", banUserId);
};

const unsubscribe = () => {
  socket.close();
};

export {
  sendUserMessage,
  unsubscribe,
  showOnlineUsers,
  downloadMessageHistory,
  showAllUsers,
  muteUser,
  connect,
};
