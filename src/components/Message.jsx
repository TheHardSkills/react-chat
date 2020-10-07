import React from "react";
import "../App.css";

// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     //messageText
//     return (
//       <div className="messageBlock">
//         <p>{this.props.message}</p>
//       </div>
//     );
//   }
// }

// export default Message;

/////////////////////////////////

function Message(props) {
  //messageText
  return (
    <div className="messageBlock">
      <p>{props.message}</p>
    </div>
  );
}

export default Message;
