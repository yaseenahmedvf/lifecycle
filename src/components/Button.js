import React from 'react'

function Button(props) {
  return (
    <button className="btn btn-primary mx-3">
    {props.name}
  </button>
  )
}

export default Button