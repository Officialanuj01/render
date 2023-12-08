import React, { useState } from 'react'
import HOC from './HOC'

function LikePost(props) {

  return (
    <div>
      <button onClick={props.handle}>Like Post {props.count}</button>
    </div>
  )
}

export default HOC(LikePost)
