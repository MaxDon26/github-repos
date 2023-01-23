import React from "react";
import "./textFiled.sass";

const TextField = ({ classes, ...rest }) => {
  return <input type="text" {...rest} className={"textField " + classes} />;
};

export default TextField;
