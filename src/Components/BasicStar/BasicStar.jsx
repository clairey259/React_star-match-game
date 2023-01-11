import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Styles from './BasicStar.module.scss'
const BasicStar = () => {
  return (
    <>
      <FontAwesomeIcon icon={faStar} className={Styles.star}/>
    </>
  );
};

export default BasicStar;
