import React from "react";
import BasicButton from "../BasicButton/BasicButton";
import ButtonStyles from "../BasicButton/BasicButton.module.scss";
import ContainerStyles from "../StarDisplay/StarDisplay.module.scss";
import Styles from "./PlayAgain.module.scss";

const PlayAgain = (props) => {
  return (
    <div className={ContainerStyles.starBox}>
      <div
        className={Styles.message}
        style={{ color: props.gameStatus === "lost" ? "red" : "green" }}
      >
        {props.gameStatus === "lost" ? "GameOver" : "Well Done!"}
      </div>
      <button onClick={props.resetGame} className={ButtonStyles.button}>
        Play Again
      </button>
    </div>
  );
};

export default PlayAgain;
