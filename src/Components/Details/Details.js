import React from 'react'
import "./Details.css"

const Details = ({name, propery}) => {
  return (
    <div>
        <span>{name}</span>
        <span>{propery}</span>
    </div>
  )
}

export default Details