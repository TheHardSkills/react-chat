import React from "react";
import "../App.css";

function User(props) {
  return (
    <>
      {props.user ? (
        <div className="userBlock">
          <p>{props.user}</p>
        </div>
      ) : null}
    </>
  );
}

export default User;
