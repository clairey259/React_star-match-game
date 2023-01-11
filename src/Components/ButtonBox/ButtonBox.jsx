import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import Styles from "./ButtonBox.module.scss";

const ButtonBox = () => {
  function range(start, end) {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
  }

  return (
    <div className={Styles.buttonBox}>
      {range(1, 9).map((number) => (
          <BasicButton id={number} text={number} />
      ))}
    </div>
  );
};

export default ButtonBox;
