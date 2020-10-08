import React from "react";
import "../App.css";

function UserForAdmin(props) {
    const ban = () => {

    }
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
                            <button>Unmute</button>
                            :
                            <button>Mute</button>
                    }

                </div>
            ) : null}
        </>
    );
}

export default UserForAdmin;
