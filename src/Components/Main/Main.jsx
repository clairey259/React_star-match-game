import React from 'react'
import ButtonBox from '../ButtonBox/ButtonBox'
import StarDisplay from '../StarDisplay/StarDisplay'

const Main = () => {
  return (
    <>
        <StarDisplay />
        <ButtonBox numberOfButtons={9}/>
    </>
  )
}

export default Main