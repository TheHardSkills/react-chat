import React from "react";
import "../App.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="messageBlock">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Message;
