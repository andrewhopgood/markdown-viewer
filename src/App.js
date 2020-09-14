import React, { useState } from 'react';
import './App.css';

import md from './data/md'
let marked = require("marked");


function App() {

  const [editorText, setEditorText] = useState(md.data);


  const previewText = (e) => {
    setEditorText(e.target.value);
  }

  return (
    <div className="App">

      <textarea onChange={previewText} value={editorText} id="editor" ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(editorText, { breaks: true }) }}></div>
    </div>
  );
}

export default App;
