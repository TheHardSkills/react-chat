import React from "react";
import "../App.css";
import {
  sendUserMessage,
  messageListener,
} from "../eventsListen/eventsListener";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="messageForm">
        <form>
          <input id="inputWithMessageFromClient"></input>
          <button type="button" onClick={messageListener}>
            Send message
          </button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
