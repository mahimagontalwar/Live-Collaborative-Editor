import React from "react";

interface Props {
  original: string;
  edited: string;
  onClose: () => void;
  onApply: () => void;
}

const PreviewModal: React.FC<Props> = ({ original, edited, onClose, onApply }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[600px] p-6">
        <h2 className="text-xl font-bold mb-4">Preview Changes</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Original</h3>
            <div className="p-3 border rounded bg-gray-50">{original}</div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">AI Edited</h3>
            <div className="p-3 border rounded bg-gray-50">{edited}</div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onApply} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
