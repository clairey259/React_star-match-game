import React from 'react'
import BasicButton from '../BasicButton/BasicButton';
import Styles from '../BasicButton/BasicButton.module.scss';
import ContainerStyles from '../StarDisplay/StarDisplay.module.scss'

const PlayAgain = (props) => {
  return (
    <div className={ContainerStyles.starBox}>
        <button onClick={props.resetGame} className={Styles.button}>Play Again</button>
    </div>
  )
}

export default PlayAgain