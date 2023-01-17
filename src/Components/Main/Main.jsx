import React, { useState } from "react";
import { getRandomInt, range, sumArray } from "../../Utils";
import ButtonBox from "../ButtonBox/ButtonBox";
import StarDisplay from "../StarDisplay/StarDisplay";
import Styles from "./Main.module.scss";

const Main = () => {
  const [availableNumbers, setAvailableNumbers] = useState(range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [numberOfStars, setStars] = useState(getRandomInt(10));
  console.log(sumArray([1, 2]));
  const candidatesAreWrong = sumArray(candidateNumbers) > numberOfStars;
  console.log(candidatesAreWrong);

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  return (
    <div className={Styles.main}>
      <StarDisplay numberOfStars={numberOfStars} />
      <ButtonBox numberStatus={numberStatus} />
    </div>
  );
};

export default Main;
