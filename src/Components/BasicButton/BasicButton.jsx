import React from 'react'
import Styles from './BasicButton.module.scss';
const BasicButton = (props) => {
  return (
    <button className={Styles.button}>{props.text}</button>
  )
}

export default BasicButton