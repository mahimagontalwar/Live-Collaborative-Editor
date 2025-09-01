import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import FloatingToolbar from "./FloatingToolbar";
import PreviewModal from "./PreviewModal";
import ChatSidebar from "./ChatSidebar";
import { getAIEdit } from "../services/aiService";

interface Message {
  user: string;
  ai: string;
}

const LiveEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Select text in the editor to see the toolbar.</p>`,
  });

  const [selectionText, setSelectionText] = useState<string | null>(null);
  const [editedText, setEditedText] = useState<string | null>(null);
  const [toolbarPos, setToolbarPos] = useState<{ top: number; left: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      const text = selection.toString();
      setSelectionText(text);
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      setToolbarPos({ top: rect.top + window.scrollY - 50, left: rect.left + window.scrollX });
    } else {
      setSelectionText(null);
      setToolbarPos(null);
    }
  };

  const handleAIEdit = async () => {
    if (!selectionText) return;
    setLoading(true);
    const result = await getAIEdit(selectionText);
    setEditedText(result);
    setLoading(false);
    setShowPreview(true);
  };

  const handleConfirm = () => {
    if (!editedText || !selectionText || !editor) return;
    const contentHtml = editor.getHTML();
    const newHtml = contentHtml.replace(selectionText, editedText);
    editor.commands.setContent(newHtml);
    setShowPreview(false);
    setSelectionText(null);
    setEditedText(null);
    setToolbarPos(null);
  };

  const handleCancel = () => {
    setShowPreview(false);
    setEditedText(null);
  };

  const handleSendMessage = async (msg: string) => {
    setChatMessages([...chatMessages, { user: msg, ai: "" }]);
    const aiResp = await getAIEdit(msg);
    setChatMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1].ai = aiResp;
      return updated;
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Editor Area */}
      <div className="flex-1 p-4 relative" onMouseUp={handleTextSelect}>
        <EditorContent editor={editor} className="border border-gray-300 min-h-[400px] p-2 bg-white rounded" />
        {selectionText && toolbarPos && (
          <FloatingToolbar
            position={toolbarPos}
            loading={loading}
            onAIEdit={handleAIEdit}
            onPreview={() => setShowPreview(true)}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
        {showPreview && editedText && selectionText && (
          <PreviewModal
            original={selectionText}
            edited={editedText}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </div>

      {/* Chat Sidebar */}
      <ChatSidebar messages={chatMessages} onSend={handleSendMessage} />
    </div>
  );
};

export default LiveEditor;
