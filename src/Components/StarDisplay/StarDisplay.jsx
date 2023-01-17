import React from 'react'
import BasicStar from '../BasicStar/BasicStar';
import Styles from './StarDisplay.module.scss';
import { range } from '../../Utils';

const StarDisplay = (props) => {

  return (
    <div className={Styles.starBox}>
    {range(1, props.numberOfStars).map((number) => (
          <BasicStar id={number} text={number} />
      ))}
    </div>
  )
}

export default StarDisplay