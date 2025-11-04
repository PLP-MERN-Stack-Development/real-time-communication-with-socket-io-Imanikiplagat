// src/components/ChatInput.jsx
import { useState } from "react";

const ChatInput = ({ sendMessage, setTyping }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
    setTyping(false);
  };

  const handleTyping = (e) => {
    const value = e.target.value;
    setMessage(value);
    setTyping(value.trim().length > 0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-gray-300 p-3 bg-white"
    >
      <input
        type="text"
        value={message}
        onChange={handleTyping}
        placeholder="Type your message..."
        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
