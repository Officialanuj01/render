import React from 'react'

export default function postrender(props) {
  return (
    <div>
      <button onClick={props.funct}>post Image {props.count}</button>
      
    </div>
  )
}
