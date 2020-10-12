import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';

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

        function updateUsersOnline(users) {
            setUsers(users);
        }
        showOnlineUsers(updateUsersOnline);

        downloadMessageHistory((messages) => {
            setHistoryMessages(messages);
        });

        showAllUsers((allUsers) => {
            setAllUsers(allUsers);
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
    const currentUsername = localStorage.getItem("username");

    return (
        <Container>
            <Row>
                <Col lg md={3} xs={12} className="msgComponent">
                    <MessageForm onSendClick={handleSendClick} muteStatus={muteStatus} />
                </Col>
                <Col lg md={3} xs={12}>
                    <MessageBox messages={historyMessages} currentUserName={currentUsername} />
                </Col>
                <Col lg md={3} xs={6}>
                    <UsersBlock users={users} />
                </Col>
                {allUsers
                    ?
                    <Col lg md={3} xs={6}><AllUsersBlock users={allUsers} /></Col>
                    : null
                }
            </Row>
        </Container>
    );
}

export default ChatPage;
