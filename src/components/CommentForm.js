import React, { useState } from "react";

const CommentForm = ({ handelSubmit, submitLabel,  hasCancelButton = false, initialText = '', handelCancel}) => {

  const [text, setText] = useState(initialText);

  const isTextareaDisabled = text.length === 0

  const onSubmit = event => {
    event.preventDefault()
    handelSubmit(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea className="comment-form-textarea" value={text} onChange={(e) => setText(e.target.value)} />

      <button className="comment-form-button" disabled={isTextareaDisabled} >{submitLabel}</button>

      {hasCancelButton && (
        <button type="button" className="comment-form-button comment-form-cancel-button" onClick={handelCancel}>Cancel</button>
      )}
    </form>
  )
};

export default CommentForm;
