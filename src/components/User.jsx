import React from "react";
import "../App.css";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="userBlock">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default User;
