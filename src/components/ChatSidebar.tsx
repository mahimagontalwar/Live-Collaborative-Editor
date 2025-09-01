import React, { useState } from "react";
import { getAIResponse } from "../services/aiService";


const ChatSidebar: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const response = await getAIResponse(input);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
     <div className="flex-1 p-4 space-y-2 overflow-hidden">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-200 self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Ask AI..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
