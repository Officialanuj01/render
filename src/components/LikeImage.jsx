import React, { useState } from 'react'
import HOC from './HOC'


function LikeImage(props) {

  return (
    <div>
      <button onClick={props.handle}>Like Image {props.count}</button>
    </div>
  )
}
export default HOC(LikeImage)