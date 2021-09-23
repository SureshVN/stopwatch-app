import React from 'react'

import './timer.styles.scss'

const Timer = ({time}) => {
  const hr = Math.floor((time / 3600000) % 60);
  const min = Math.floor((time / 60000) % 60);
  const sec = Math.floor((time / 1000) % 60);
  const milliSec = ((time / 10) % 100);

  return (

	<div className="timer-container">
    <div className='timer'>
      { 
        hr !== 0 && (<span className="digits hr">{hr}<small className='denoter'>h</small></span>)
      } 
      { 
        (hr !== 0 || min !== 0) && (<span className="digits min">{min}<small className='denoter'>m</small></span>)
      } 
      <span className="digits sec">
        {min !== 0 ? ("0" + sec).slice(-2) : sec}
        <small className='denoter'>s</small>
      </span>
      <span className="digits milli-sec">
        {("0" + milliSec).slice(-2)}
      </span>
      </div>
    </div>
)
}

export default Timer;