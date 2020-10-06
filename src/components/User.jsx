import React from "react";
import "../App.css";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="userBlock">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default User;
