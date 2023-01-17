import React from 'react'

const Timer = (props) => {
  return (
    <div>{`Time Remaining: ${props.secondsLeft}`}</div>
  )
}

export default Timer