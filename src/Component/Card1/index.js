import React from 'react'
import "./style.css"
function Card1({text, per}) {
  return (
    <div className='card'>
        <h1>{per}</h1>
        <p>{text}</p>
    </div>
  )
}

export default Card1