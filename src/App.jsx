import React, { useState } from "react";
import "./App.css";
import MessageBox from "./components/MessageBox";
import UsersBlock from "./components/UsersBlock";
import MessageForm from "./components/MessageSendingForm";

import {
  sendUserMessage,
  subscribeToMessages,
  unsubscribe,
  showOnlineUsers,
  downloadMessageHistory,
} from "./eventsListen/socketService";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [historyMessages, setHistoryMessages] = useState([]);

  const handleSendClick = useCallback((text) => {
    console.log(text);
    sendUserMessage(text);
  }, []);

  //componentDidMount
  useEffect(() => {
    function updateUsers(users) {
      setUsers(users);
    }
    showOnlineUsers(updateUsers);
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    function renderHistoryMessages(messages) {
      setHistoryMessages(messages);
    }
    downloadMessageHistory(renderHistoryMessages);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <MessageForm onSendClick={handleSendClick} />
      <MessageBox messages={historyMessages} />
      <UsersBlock users={users} />
    </div>
  );
}

export default App;
