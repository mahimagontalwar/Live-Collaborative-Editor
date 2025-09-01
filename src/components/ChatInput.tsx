import React, { useState } from "react";

interface Props {
  onSend: (msg: string) => void;
}

const ChatInput: React.FC<Props> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-2 py-1"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
