import React from 'react'
import Styles from './Timer.module.scss';
const Timer = (props) => {
  return (
    <div className={Styles.timer}>{`Time Remaining: ${props.secondsLeft}`}</div>
  )
}

export default Timer