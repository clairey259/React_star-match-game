import React from 'react'
import BasicButton from '../BasicButton/BasicButton';
import Styles from '../BasicButton/BasicButton.module.scss';

const PlayAgain = () => {
  return (
    <>
        <BasicButton className={Styles.button} text="Play Again"/>
    </>
  )
}

export default PlayAgain