import React from "react";
// import Message from "./Message";

class MessageBox extends React.Component {
  state = {
    arrMsgs: [],
  };
  key = 0;

  componentDidMount() {
    this.getAllMessages();
    console.log("dsgjhsd");
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
        {/* {this.state.arrMsgs.map((msg) => {
          this.key++;
          return <Message text={msg.body} key={this.key} />;
        })} */}
      </div>
    );
  }
}

export default MessageBox;
