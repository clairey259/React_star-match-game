import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import Styles from "./ButtonBox.module.scss";
import { range } from "../../Utils";

const ButtonBox = () => {

  return (
    <div className={Styles.buttonBox}>
      {range(1, 9).map((number) => (
          <BasicButton id={number} text={number} />
      ))}
    </div>
  );
};

export default ButtonBox;
