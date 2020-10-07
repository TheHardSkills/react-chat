import React from "react";
import "../App.css";

function User(props) {
  console.log("props", props);

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
