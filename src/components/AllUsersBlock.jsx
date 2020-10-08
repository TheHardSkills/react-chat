import React from "react";
import UserForAdmin from "./UserForAdmin";

function AllUsersBlock(props) {
    return (
        <>
            {props.users ? (
                <div className="AllUsersBlock">
                    {props.users.map((user) => {
                        return <UserForAdmin user={user.username} banStatus={user.onBan} muteStatus={user.onMute} />;
                    })}
                </div>
            ) : null}
        </>
    );
}

export default AllUsersBlock;
