import React, { useState } from 'react';
import './App.css';



function App() {

  const [editorText, setEditorText] = useState("Hi");

  const previewText = (e) => {
    setEditorText(e.target.value);
  }

  return (
    <div className="App">

      <textarea onChange={previewText} id="editor" ></textarea>
      <div id="preview">{editorText}</div>
    </div>
  );
}

export default App;
