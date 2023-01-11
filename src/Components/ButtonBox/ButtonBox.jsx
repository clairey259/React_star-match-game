import { render } from '@testing-library/react';
import React from 'react'
import BasicButton from '../BasicButton/BasicButton'
import Styles from './ButtonBox.module.scss';

const ButtonBox = (props) => {
     const buttonNumberArr = [];
        for (let i = 1; i <= props.numberOfButtons; i++) {
            buttonNumberArr.push(i);
        }
        const getButtonJSX = (number) => {
            <BasicButton id={number} text={number}/>
    }
    
  return (
    <div className={Styles.buttonBox}>
    {buttonNumberArr.map(getButtonJSX)}
    </div>
  )
}

export default ButtonBox