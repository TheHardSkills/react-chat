import React from "react";
import "../App.css";

function UserForAdmin(props) {
    const sayStatus = () => {
        console.log("status:");
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
                            <button onClick={sayStatus}>Unmute</button>
                            :
                            <button>Mute</button>
                    }

                </div>
            ) : null}
        </>
    );
}

export default UserForAdmin;
