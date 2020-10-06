import React from "react";
import Message from "./Message";

class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      arrMsgs: ["First", "Second", "Third"],
    };
    this.addMsg = this.addMsg.bind(this);
  }
  addMsg() {
    this.setState({
      arrMsgs: [...this.state.arrMsgs, "Text"],
    });
  }
  render() {
    return (
      <div>
        {this.state.arrMsgs.map((msg) => (
          <Message text={msg} />
        ))}
        <button onClick={this.addMsg}>Button </button>
      </div>
    );
  }
}

export default MessageBox;
