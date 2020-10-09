import React, { useState } from "react";

import MessageBox from "./MessageBox";
import UsersBlock from "./UsersBlock";
import AllUsersBlock from "./AllUsersBlock"
import MessageForm from "./MessageSendingForm";

import {
    sendUserMessage,
    unsubscribe,
    showOnlineUsers,
    downloadMessageHistory,
    showAllUsers,
    getMuteInfo,
    disconnect,
    connect,

} from "../eventsListen/socketService";
import { useEffect } from "react";
import { useCallback } from "react";

function ChatPage() {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [historyMessages, setHistoryMessages] = useState([]);
    const [muteStatus, setMuteStatus] = useState(false);
    const [banStatus, setBanStatus] = useState(false);


    const handleSendClick = useCallback((text) => {
        sendUserMessage(text);
    }, []);

    //componentDidMount
    useEffect(() => {
        connect();
        function updateUsers(users) {
            setUsers(users);

        }
        showOnlineUsers(updateUsers);

        downloadMessageHistory((messages) => {
            setHistoryMessages(messages);
        });

        showAllUsers((allUsers) => {
            setAllUsers(allUsers);
        });

        downloadMessageHistory((messages) => {
            setHistoryMessages(messages);
        });

        getMuteInfo((muteStatus) => {
            setMuteStatus(muteStatus);
        });

        disconnect(() => {
            setBanStatus(!banStatus)
        })

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <MessageForm onSendClick={handleSendClick} muteStatus={muteStatus} />
            <MessageBox messages={historyMessages} />
            <UsersBlock users={users} />

            { allUsers
                ? <AllUsersBlock users={allUsers} />
                : null
            }
        </>
    );
}

export default ChatPage;
