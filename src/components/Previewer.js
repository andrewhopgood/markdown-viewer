import React from "react";
import "../styles/Previewer.css";

export default function Preview({ marked, editorText }) {
  return (
    <div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(editorText, { breaks: true }),
        }}
      ></div>
    </div>
  );
}
