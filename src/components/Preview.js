import React from 'react'



export default function Preview({ marked, editorText }) {
    return (
        <>
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(editorText, { breaks: true }) }}></div>

        </>
    )
}
