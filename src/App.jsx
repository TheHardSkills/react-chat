import React from "react";
import "./App.css";
import MessageBox from "./components/MessageBox";
import UsersBlock from "./components/UsersBlock";
import MessageForm from "./components/MessageSendingForm";

function App() {
  return (
    <div className="App">
      <MessageForm />
      <MessageBox />
      <UsersBlock />
    </div>
  );
}

export default App;
