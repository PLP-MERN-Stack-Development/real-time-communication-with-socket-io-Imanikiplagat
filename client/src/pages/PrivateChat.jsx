// src/pages/PrivateChat.jsx
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSocket } from "../socket/socket";
import Navbar from "../components/Navbar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import TypingIndicator from "../components/TypingIndicator";

const PrivateChat = () => {
  const { userId } = useParams();
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const {
    connect,
    messages,
    sendPrivateMessage,
    typingUsers,
    setTyping,
  } = useSocket();

  useEffect(() => {
    if (!username) {
      navigate("/");
      return;
    }
    connect(username);
  }, [username]);

  const handleSend = (msg) => {
    sendPrivateMessage(userId, msg);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar username={username} title={`Private Chat`} />

      {/* Chat Area */}
      <div className="flex flex-col flex-1 bg-white">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} currentUser={username} />
          ))}
        </div>

        {/* Typing indicator */}
        <TypingIndicator typingUsers={typingUsers} />

        {/* Input box */}
        <ChatInput sendMessage={handleSend} setTyping={setTyping} />
      </div>
    </div>
  );
};

export default PrivateChat;
