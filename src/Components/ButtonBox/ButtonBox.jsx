import { render } from "@testing-library/react";
import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import Styles from "./ButtonBox.module.scss";

const ButtonBox = () => {
  const buttonNumberArr = [];
  //   for (let i = 1; i <= 9; i++) {
  //     buttonNumberArr.push(i);
  //   }

  function range(start, end) {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
  }

  //   const getButtonJSX = (number) => {
  //     <BasicButton id={number} text={number} />;
  //   };

  return (
    <div className={Styles.buttonBox}>
      {range(1, 9).map((number) => (
          <BasicButton id={number} text={number} />
      ))}
    </div>
  );
};

export default ButtonBox;
