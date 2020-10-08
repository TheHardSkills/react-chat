import React, { useState } from "react";

import MessageBox from "./MessageBox";
import UsersBlock from "./UsersBlock";
import MessageForm from "./MessageSendingForm";

import {
    sendUserMessage,
    unsubscribe,
    showOnlineUsers,
    downloadMessageHistory, connect
} from "../eventsListen/socketService";
import { useEffect } from "react";
import { useCallback } from "react";

function ChatPage(props) {
    const [users, setUsers] = useState([]);
    const [historyMessages, setHistoryMessages] = useState([]);

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

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <>
            <MessageForm onSendClick={handleSendClick} />
            <MessageBox messages={historyMessages} />
            <UsersBlock users={users} />
        </>
    );
}

export default ChatPage;
