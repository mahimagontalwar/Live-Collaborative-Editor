import React from "react";

interface Props {
  position: { top: number; left: number };
  onAIEdit: () => void;
  onPreview: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
}

const FloatingToolbar: React.FC<Props> = ({ position, onAIEdit, onPreview, onConfirm, onCancel, loading }) => {
  return (
    <div
      className="absolute bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg flex gap-2 z-50"
      style={{ top: position.top, left: position.left }}
    >
      <button
        onClick={onAIEdit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
      >
        {loading ? "Thinking..." : "Edit with AI"}
      </button>
      <button
        onClick={onPreview}
        className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-300"
      >
        Preview
      </button>
      <button
        onClick={onConfirm}
        className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
      >
        ✅ Confirm
      </button>
      <button
        onClick={onCancel}
        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
      >
        ❌ Cancel
      </button>
    </div>
  );
};

export default FloatingToolbar;
