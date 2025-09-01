import React from "react";
import ChatInput from "./ChatInput";

interface Message {
  user: string;
  ai: string;
}

interface Props {
  messages: Message[];
  onSend: (msg: string) => void;
}

const ChatSidebar: React.FC<Props> = ({ messages, onSend }) => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 flex flex-col">
      <h2 className="font-bold mb-2">Chat with AI</h2>
      <div className="flex-1 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            <p className="text-gray-800 font-semibold">You: {msg.user}</p>
            {msg.ai && <p className="text-blue-600 ml-2">AI: {msg.ai}</p>}
          </div>
        ))}
      </div>
      <ChatInput onSend={onSend} />
    </div>
  );
};

export default ChatSidebar;
