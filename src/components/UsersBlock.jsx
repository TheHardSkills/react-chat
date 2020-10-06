import React from "react";
import User from "./User";

class UsersBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      arrMsgs: [],
    };
    this.key = 0;
  }
  getAllUsers() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ arrMsgs: data });
      });
  }
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    return (
      <div className="UsersBlock">
        {this.state.arrMsgs.map((msg) => {
          this.key++;
          return <User text={msg.email} key={this.key} />;
        })}
      </div>
    );
  }
}

export default UsersBlock;
