import React, { useState } from "react";
import { getRandomInt, randomSumIn, range, sumArray } from "../../Utils";
import ButtonBox from "../ButtonBox/ButtonBox";
import PlayAgain from "../PlayAgain/PlayAgain";
import StarDisplay from "../StarDisplay/StarDisplay";
import Styles from "./Main.module.scss";

const Main = () => {
  const [availableNumbers, setAvailableNumbers] = useState(range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [numberOfStars, setStars] = useState(getRandomInt(10));

  const candidatesAreWrong = sumArray(candidateNumbers) > numberOfStars;
  const gameIsFinished = availableNumbers.length === 0;

  const resetGame = () => {
    setStars(getRandomInt(10));
    setAvailableNumbers(range(1, 9));
    setCandidateNumbers([])
  }

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === "used") {
      return;
    }
    const newCandidateNumbers =
      currentStatus === "available"
        ? candidateNumbers.concat(number)
        : candidateNumbers.filter((cn) => cn !== number);
    if (sumArray(newCandidateNumbers) !== numberOfStars) {
      setCandidateNumbers(newCandidateNumbers);
    } else {
      const newAvailableNumbers = availableNumbers.filter(
        (number) => !newCandidateNumbers.includes(number)
      );

      setStars(randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      setCandidateNumbers([]);
    }
  };

  return (
    <div className={Styles.main}>
      {gameIsFinished ? (
        <PlayAgain resetGame={resetGame}/>
      ) : (
        <StarDisplay numberOfStars={numberOfStars} />
      )}
      <ButtonBox numberStatus={numberStatus} onNumberClick={onNumberClick} />
    </div>
  );
};

export default Main;
