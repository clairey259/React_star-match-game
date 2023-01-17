import React from "react";
import Styles from "./BasicButton.module.scss";
const BasicButton = (props) => {
  const colours = {
    available: "lightgrey",
    used: "lightgreen",
    wrong: "lightcoral",
    candidate: "deepskyblue",
  };
  return (
    <button
      className={Styles.button}
      style={{ backgroundColor: colours[props.status] }}
      onClick={() => props.onNumberClick(props.text, props.status)}
    >
      {props.text}
    </button>
  );
};

export default BasicButton;
