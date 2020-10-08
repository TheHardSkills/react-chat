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
    connect,

} from "../eventsListen/socketService";
import { useEffect } from "react";
import { useCallback } from "react";

function ChatPage() {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [historyMessages, setHistoryMessages] = useState([]);

    const handleSendClick = useCallback((text) => {
        sendUserMessage(text);
    }, []);

    //componentDidMount
    useEffect(() => {
        connect();
        function updateUsers(users) {
            setUsers(users);
            console.log("users", users);

        }
        showOnlineUsers(updateUsers);

        downloadMessageHistory((messages) => {
            setHistoryMessages(messages);
        });

        showAllUsers((allUsers) => {
            setAllUsers(allUsers);
            console.log("allUsers", allUsers);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <MessageForm onSendClick={handleSendClick} />
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
