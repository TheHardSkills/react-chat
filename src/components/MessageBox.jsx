import React from "react";
import Message from "./Message";

// class MessageBox extends React.Component {
//   componentDidMount() {
//     console.log("dsgjhsd");
//   }

//   render() {
//     if (this.props.messages) {
//       console.log("this.props.messages", this.props.messages);
//       return (
//         <div className="MessageBox">
//           {this.props.messages.map((message, i) => {
//             console.log("message = ", message);
//             return <Message message={message.messageText} key={i} />;
//           })}
//         </div>
//       );
//     } else {
//       return <Message message="no one msg" key={this.key} />;
//     }
//   }
// }

// export default MessageBox;

///////////////////////////////////////////

function MessageBox(props) {
  if (props.messages) {
    console.log("props.messages", props.messages);
    return (
      <div className="MessageBox">
        {props.messages.map((message, i) => {
          return <Message message={message.messageText} key={i} />;
        })}
      </div>
    );
  } else {
    return <Message message="no one msg" key="1" />;
  }
}

export default MessageBox;
