import React, { useState } from 'react';
import './App.css';
import md from './data/md'
import Editor from "./components/Editor"
import Preview from "./components/Preview"

let marked = require("marked");




function App() {

  const [editorText, setEditorText] = useState(md.data);


  const previewText = (e) => {
    setEditorText(e.target.value);
  }

  return (
    <div className="App">

      <Editor previewText={previewText} editorText={editorText} />
      <Preview marked={marked} editorText={editorText} />
    </div>
  );
}

export default App;
