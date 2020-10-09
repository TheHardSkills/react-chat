import React from "react";
import UserForAdmin from "./UserForAdmin";

function AllUsersBlock(props) {
    return (
        <>
            {props.users ? (
                <div className="AllUsersBlock">
                    {props.users.map((user, i) => {
                        return <UserForAdmin user={user.username} banStatus={user.onBan} muteStatus={user.onMute} key={i} userId={user._id} />;
                    })}
                </div>
            ) : null}
        </>
    );
}

export default AllUsersBlock;
