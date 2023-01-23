import React, { useState } from "react";

import SubmitButton from "../../common/form/submitButton/submitButton";
import TextField from "../../common/form/textField/textField";
import "./commentForm.sass";

const CommentForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <div className="comment">
      <form className="comment__form">
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Комментарий к проекту"
          classes="comment__form_input"
        />
        <SubmitButton
          onSubmit={handleSubmit}
          classes="comment__form_submit"
          icon="bi bi-pencil"
        />
      </form>
    </div>
  );
};

export default CommentForm;
