// src/pages/ChatRoom.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../socket/socket";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import TypingIndicator from "../components/TypingIndicator";

const ChatRoom = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const {
    connect,
    messages,
    users,
    typingUsers,
    sendMessage,
    setTyping,
  } = useSocket();

  useEffect(() => {
    if (!username) {
      navigate("/");
      return;
    }
    connect(username);
  }, [username]);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar username={username} title="Global Chat" />

      <div className="flex flex-1">
        {/* Sidebar - user list */}
        <UserList users={users} currentUser={username} />

        {/* Main chat area */}
        <div className="flex flex-col flex-1 bg-white">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <ChatMessage key={index} message={msg} currentUser={username} />
            ))}
          </div>

          {/* Typing indicator */}
          <TypingIndicator typingUsers={typingUsers} />

          {/* Input box */}
          <ChatInput sendMessage={sendMessage} setTyping={setTyping} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
