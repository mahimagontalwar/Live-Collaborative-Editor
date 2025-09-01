import React from "react";

interface Props {
  original: string;
  edited: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const PreviewModal: React.FC<Props> = ({ original, edited, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-4 w-1/2 shadow-lg">
        <h2 className="font-bold mb-2">Preview AI Edit</h2>
        <div className="flex gap-4">
          <div className="flex-1 p-2 border border-gray-300">
            <h3 className="font-semibold mb-1">Original</h3>
            <p>{original}</p>
          </div>
          <div className="flex-1 p-2 border border-gray-300">
            <h3 className="font-semibold mb-1">AI Suggestion</h3>
            <p>{edited}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            ✅ Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
