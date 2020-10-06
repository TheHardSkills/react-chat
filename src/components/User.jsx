import React from "react";
import "../App.css";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      fetch(`/users/${this.props.id}`).then((user) => {
        this.setState({ user: user });
      });
    }
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
