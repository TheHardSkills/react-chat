import React from "react";
import Message from "./Message";

class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = {
      arrMsgs: [],
    };
  }
  componentDidMount() {
    this.getAllMessages();
  }
  getAllMessages() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ arrMsgs: data });
      });
  }
  render() {
    return (
      <div className="MessageBox">
        {this.state.arrMsgs.map((msg) => (
          <Message text={msg.body} />
        ))}
      </div>
    );
  }
}

export default MessageBox;
