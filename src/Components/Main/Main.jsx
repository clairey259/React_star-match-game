import React from 'react';
import ButtonBox from '../ButtonBox/ButtonBox';
import StarDisplay from '../StarDisplay/StarDisplay';
import Styles from './Main.module.scss';

const Main = (props) => {
  return (
    <div className={Styles.main}>
        <StarDisplay range={props.range}/>
        <ButtonBox range={props.range}/>
    </div>
  )
}

export default Main