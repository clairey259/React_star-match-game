import React from 'react'
import BasicStar from '../BasicStar/BasicStar';
import Styles from './StarDisplay.module.scss';
import { range } from '../../Utils';

const StarDisplay = () => {
  return (
    <div className={Styles.starBox}>
    {range(1, 9).map((number) => (
          <BasicStar id={number} text={number} />
      ))}
    </div>
  )
}

export default StarDisplay