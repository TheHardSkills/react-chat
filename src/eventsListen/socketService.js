import io from "socket.io-client";

const currentToken = localStorage.getItem("token");
let socket;

const connect = () => {
  socket = io(`http://localhost:3002/?token=${currentToken}`);
  console.log("socket", socket.io);
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
};
const banUser = (banUserId) => {
  socket.emit("ban", banUserId);
};

const getMuteInfo = (cbck) => {
  //ссылка на ф-ю - колбэк
  socket.on("muted", () => {
    cbck(true);
  });
  socket.on("unmuted", () => {
    cbck(false);
  });
};

const unsubscribe = () => {
  socket.close();
};

const disconnect = () => {
  socket.on("disconnect", () => {
    document.location = "http://localhost:3000/";
  });
};

export {
  sendUserMessage,
  unsubscribe,
  showOnlineUsers,
  downloadMessageHistory,
  showAllUsers,
  muteUser,
  banUser,
  getMuteInfo,
  disconnect,
  connect,
};
