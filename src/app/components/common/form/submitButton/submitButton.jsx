import React from "react";
import "./submitButton.sass";

const SubmitButton = ({ onSubmit, icon, classes, disabled }) => {
  return (
    <button
      type="submit"
      onClick={onSubmit}
      disabled={disabled}
      className={
        "submit " + classes + (disabled === true ? " btn-secondary" : "")
      }
    >
      <i className={icon + " icon"}></i>
    </button>
  );
};

export default SubmitButton;
