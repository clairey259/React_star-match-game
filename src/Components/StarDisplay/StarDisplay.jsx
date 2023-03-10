import React from "react";
import BasicStar from "../BasicStar/BasicStar";
import Styles from "./StarDisplay.module.scss";
import { range } from "../../Utils";
import PlayAgain from "../PlayAgain/PlayAgain";

const StarDisplay = (props) => {
  return (
    <div className={Styles.starBox}>
      {range(1, props.numberOfStars).map((number) => (
        <BasicStar key={number} text={number} />
      ))}
    </div>
  );
};

export default StarDisplay;
