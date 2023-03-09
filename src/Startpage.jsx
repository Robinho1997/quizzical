import React from 'react'

function StartPage(props) {
  return (
    <div className="menu">
      <h1 className='page-title'>Quizzical</h1>
      <span className='page-description'>Test your general knowledge in this multiple choice Quizzical!</span>
      <button className='start-button' onClick={() => props.start()}>Start Quizzical</button>
    </div>
  )
}

export default StartPage