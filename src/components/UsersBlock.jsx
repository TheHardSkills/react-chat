import React from "react";
import User from "./User";

function UsersBlock(props) {
  return (
    <>
      {props.users ? (
        <div className="UsersBlock">
          {props.users.map((user, i) => {
            return <User user={user} key={i} />;
          })}
        </div>
      ) : null}
    </>
  );
}

export default UsersBlock;
