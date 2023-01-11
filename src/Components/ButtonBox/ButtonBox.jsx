import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import Styles from "./ButtonBox.module.scss";

const ButtonBox = (props) => {

  return (
    <div className={Styles.buttonBox}>
      {props.range(1, 9).map((number) => (
          <BasicButton id={number} text={number} />
      ))}
    </div>
  );
};

export default ButtonBox;
