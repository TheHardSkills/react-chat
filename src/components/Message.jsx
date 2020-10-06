import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    //this.props = props;
  }
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default Message;
