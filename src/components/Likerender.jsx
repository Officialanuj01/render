import React from 'react'

export default function Likerender(props) {
  return (
    <div>
      <button onClick={props.funct}>Like Image {props.count}</button>
      
    </div>
  )
}
