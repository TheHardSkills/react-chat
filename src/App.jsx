import React, { useState } from "react";
import "./App.css";
import MessageBox from "./components/MessageBox";
import UsersBlock from "./components/UsersBlock";
import MessageForm from "./components/MessageSendingForm";

import {
  sendUserMessage,
  subscribeToMessages,
  unsubscribe,
} from "./eventsListen/socketService";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
  // const [msgObj, setMsg] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendClick = useCallback((text) => {
    console.log(text);
    sendUserMessage(text);
  }, []);

  useEffect(() => {
    function updateMessages(message) {
      setMessages((messages) => [...messages, message]);
    }
    subscribeToMessages(updateMessages);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <MessageForm onSendClick={handleSendClick} />
      <MessageBox messages={messages} />
      <UsersBlock />
    </div>
  );
}

export default App;
