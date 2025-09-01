import Editor from "./components/Editor";
import React from "react";
import ChatSidebar from "./components/ChatSidebar";


const App: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
     <div className="flex-1 p-4">
        <Editor />
      </div>
      <div className="w-96 border-l bg-white shadow-lg">
        <ChatSidebar />
      </div>
    </div>
  );
};

export default App;
