import React from "react";
import User from "./User";

function UsersBlock(props) {
  console.log("props.users", props.users);
  return (
    <>
      {props.users ? (
        <div className="UsersBlock">
          {props.users.map((user) => {
            return <User user={user} />;
          })}
        </div>
      ) : null}
    </>
  );
}

export default UsersBlock;
