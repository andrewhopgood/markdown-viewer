import React, { useState } from 'react';
import './App.css';


let marked = require("marked");
function App() {

  const [editorText, setEditorText] = useState("Hi");

  const previewText = (e) => {
    setEditorText(e.target.value);
  }

  return (
    <div className="App">

      <textarea onChange={previewText} value={editorText} id="editor" ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(editorText) }}></div>
    </div>
  );
}

export default App;
