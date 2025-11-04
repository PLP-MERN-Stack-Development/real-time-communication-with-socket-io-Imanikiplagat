// src/components/ChatMessage.jsx
const ChatMessage = ({ message, currentUser }) => {
  const isOwnMessage = message.sender === currentUser;
  const isSystem = message.system;

  if (isSystem) {
    return (
      <div className="text-center text-gray-500 italic text-sm my-2">
        {message.message}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col mb-2 ${
        isOwnMessage ? "items-end" : "items-start"
      }`}
    >
      {!isOwnMessage && (
        <span className="text-xs text-gray-500 mb-1">{message.sender}</span>
      )}
      <div
        className={`p-2 rounded-lg max-w-[60%] ${
          isOwnMessage
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        {message.message}
      </div>
      <span className="text-[10px] text-gray-400 mt-1">
        {new Date(message.timestamp).toLocaleTimeString()}
      </span>
    </div>
  );
};

export default ChatMessage;
