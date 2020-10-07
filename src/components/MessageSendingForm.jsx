import React from "react";
import "../App.css";

class MessageForm extends React.Component {
  state = {
    inputText: "",
  };

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleSend = () => {
    this.props.onSendClick(this.state.inputText);
  };

  render() {
    return (
      <div className="messageForm">
        <form>
          <input value={this.state.inputText} onChange={this.handleChange} />
          <button type="button" onClick={this.handleSend}>
            Send message
          </button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
