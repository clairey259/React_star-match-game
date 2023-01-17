import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import Styles from "./ButtonBox.module.scss";
import { range } from "../../Utils";

const ButtonBox = (props) => {

  return (
    <div className={Styles.buttonBox}>
      {range(1, 9).map((number) => (
          <BasicButton key={number} text={number} status={props.numberStatus(number)} onNumberClick={props.onNumberClick}/>
      ))}
    </div>
  );
};

export default ButtonBox;
