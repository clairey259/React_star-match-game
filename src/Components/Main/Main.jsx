import React, { useEffect, useState } from "react";
import { getRandomInt, randomSumIn, range, sumArray } from "../../Utils";
import ButtonBox from "../ButtonBox/ButtonBox";
import PlayAgain from "../PlayAgain/PlayAgain";
import StarDisplay from "../StarDisplay/StarDisplay";
import Timer from "../Timer/Timer";
import Styles from "./Main.module.scss";

const Main = (props) => {
  console.log(range(1, 9))
  const [availableNumbers, setAvailableNumbers] = useState(range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [numberOfStars, setStars] = useState(getRandomInt(10));
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length > 0) {
      const timerID = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerID)
    }
  });

  const candidatesAreWrong = sumArray(candidateNumbers) > numberOfStars;
  const gameStatus = availableNumbers.length === 0 
  ? 'won' 
  : secondsLeft === 0 ? "lost" : "active";

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
    if (gameStatus != 'active' || currentStatus === "used") {
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
      {gameStatus != 'active' ? (
        <PlayAgain startNewGame={props.startNewGame} gameStatus={gameStatus}/>
      ) : (
        <StarDisplay numberOfStars={numberOfStars} />
      )}
      <ButtonBox numberStatus={numberStatus} onNumberClick={onNumberClick} />
      <Timer secondsLeft={secondsLeft} />
    </div>
  );
};

export default Main;
