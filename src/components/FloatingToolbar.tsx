import React, { useState } from "react";
import { getAIEdit } from "../services/aiService";


interface Props {
  selectedText: string;
  onAIEdit: (edited: string) => void;
}

const FloatingToolbar: React.FC<Props> = ({ selectedText, onAIEdit }) => {
  const [loading, setLoading] = useState(false);

  const handleAIEdit = async () => {
    setLoading(true);
    const result = await getAIEdit(selectedText);
    onAIEdit(result);
    setLoading(false);
  };

  return (
    <div className="absolute top-10 left-10 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg flex gap-2 z-50">
      <button
        onClick={handleAIEdit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
      >
        {loading ? "Thinking..." : "AI Edit"}
      </button>
    </div>
  );
};

export default FloatingToolbar;
