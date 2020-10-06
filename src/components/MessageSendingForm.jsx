import React from "react";
import "../App.css";
import { sendUserMessage } from "../eventsListen/eventsListener";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="messageForm">
        <form>
          <input id="inputWithMessageFromClient"></input>
          <button type="button" onClick={sendUserMessage}>
            Send message
          </button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
