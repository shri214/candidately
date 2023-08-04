import React from 'react'
import "./style.css"

function Button({clName, btnName, events}) {
  return (
    <div className={clName}>
        {btnName}
    </div>
  )
}

export default Button