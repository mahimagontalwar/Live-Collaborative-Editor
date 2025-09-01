import Editor from "./components/LiveEditor";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
     <div className="flex-1 p-4">
        <Editor />
      </div>
    </div>
  );
};

export default App;
