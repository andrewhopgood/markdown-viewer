import React, { useState } from "react";
import "./App.css";
import md from "./data/md";
import Editor from "./components/Editor";
import Preview from "./components/Previewer";
import Titlebar from "./components/Titlebar";

let marked = require("marked");

function App() {
  const [editorText, setEditorText] = useState(md.data);

  const previewText = (e) => {
    setEditorText(e.target.value);
  };

  return (
    <div className="App">
      <div id="editor__container">
        <Titlebar title="Editor" />
        <Editor previewText={previewText} editorText={editorText} />
      </div>
      <div id="preview__container">
        <Titlebar title="Previewer" />
        <Preview marked={marked} editorText={editorText} />
      </div>
    </div>
  );
}

export default App;
