import React from "react";
import "../App.css";
import { muteUser, banUser } from "../eventsListen/socketService"

function UserForAdmin(props) {
    return (
        <>
            {props.user ? (
                <div className="adminUserBlock">
                    <p>{props.user}</p>
                    {
                        props.banStatus
                            ?
                            <button onClick={() => { banUser(props.userId) }}>Unban</button>
                            :
                            <button onClick={() => { banUser(props.userId) }}>Ban</button>
                    }
                    {
                        props.muteStatus
                            ?
                            <button onClick={() => { muteUser(props.userId) }}>Unmute</button>
                            :
                            <button onClick={() => { muteUser(props.userId) }}>Mute</button>
                    }

                </div>
            ) : null}
        </>
    );
}

export default UserForAdmin;
