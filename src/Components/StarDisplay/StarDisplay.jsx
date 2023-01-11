import React from 'react'
import BasicStar from '../BasicStar/BasicStar';
import Styles from './StarDisplay.module.scss';

const StarDisplay = (props) => {
  return (
    <div className={Styles.starBox}>
    {props.range(1, 9).map((number) => (
          <BasicStar id={number} text={number} />
      ))}
    </div>
  )
}

export default StarDisplay