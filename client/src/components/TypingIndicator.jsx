// src/components/TypingIndicator.jsx
const TypingIndicator = ({ typingUsers }) => {
  if (!typingUsers.length) return null;

  return (
    <div className="text-sm text-gray-500 px-4 py-1 bg-gray-50">
      {typingUsers.join(", ")}{" "}
      {typingUsers.length > 1 ? "are typing..." : "is typing..."}
    </div>
  );
};

export default TypingIndicator;
