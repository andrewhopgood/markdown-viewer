import React from "react";
import "../styles/Editor.css";

export default function Editor({ previewText, editorText }) {
  return (
    <div>
      <textarea
        onChange={previewText}
        value={editorText}
        id="editor"
      ></textarea>
    </div>
  );
}
