import React from 'react'

export default function Editor({ previewText, editorText }) {
    return (
        <>
            <textarea onChange={previewText} value={editorText} id="editor" ></textarea>
        </>
    )
}
