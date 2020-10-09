import React from "react";
import "../App.css";
import { muteUser } from "../eventsListen/socketService"

function UserForAdmin(props) {
    return (
        <>
            {props.user ? (
                <div className="adminUserBlock">
                    <p>{props.user}</p>
                    {
                        props.banStatus
                            ?
                            <button>Unban</button>
                            :
                            <button>Ban</button>
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
