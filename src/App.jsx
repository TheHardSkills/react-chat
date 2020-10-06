import React from "react";
import "./App.css";
import MessageBox from "./components/MessageBox";
import UsersBlock from "./components/UsersBlock";

function App() {
  return (
    <div className="App">
      <MessageBox />
      <UsersBlock />
    </div>
  );
}

export default App;
