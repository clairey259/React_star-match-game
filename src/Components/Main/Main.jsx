import React, { useState } from 'react';
import { getRandomInt } from '../../Utils';
import ButtonBox from '../ButtonBox/ButtonBox';
import StarDisplay from '../StarDisplay/StarDisplay';
import Styles from './Main.module.scss';



const Main = () => {

const [availableNumbers, setAvailableNumbers] = useState([1, 2, 3]);

const [candidateNumbers, setCandidateNumbers] = useState([]);

const [numberOfStars, setStars] = useState(getRandomInt(10));

  return (
    <div className={Styles.main}>
        <StarDisplay numberOfStars={numberOfStars}/>
        <ButtonBox />
    </div>
  )
}

export default Main