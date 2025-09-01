import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import FloatingToolbar from "./FloatingToolbar";
import PreviewModal from "./PreviewModal";

const Editor: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start typing here...</p>",
  });

  const [selectedText, setSelectedText] = useState("");
  const [modalData, setModalData] = useState<{ original: string; edited: string } | null>(null);

  const handleSelect = () => {
    if (!editor) return;
    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, " ");
    setSelectedText(text);
  };

  return (
    <div className="relative h-full">
      <EditorContent editor={editor} onMouseUp={handleSelect} className="prose max-w-none p-4 bg-white rounded shadow" />

      {selectedText && (
        <FloatingToolbar
          selectedText={selectedText}
          onAIEdit={(edited) => setModalData({ original: selectedText, edited })}
        />
      )}

      {modalData && (
        <PreviewModal
          original={modalData.original}
          edited={modalData.edited}
          onClose={() => setModalData(null)}
          onApply={() => {
            if (editor) {
              editor.commands.insertContentAt(editor.state.selection, modalData.edited);
            }
            setModalData(null);
          }}
        />
      )}
    </div>
  );
};

export default Editor;
