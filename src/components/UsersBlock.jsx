import React from "react";
import User from "./User";

function UsersBlock(props) {
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
