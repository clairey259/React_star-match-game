import React from 'react';
import ButtonBox from '../ButtonBox/ButtonBox';
import StarDisplay from '../StarDisplay/StarDisplay';
import Styles from './Main.module.scss';

const Main = () => {


  return (
    <div className={Styles.main}>
        <StarDisplay />
        <ButtonBox />
    </div>
  )
}

export default Main