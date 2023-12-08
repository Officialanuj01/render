import React from 'react'
import { useState } from 'react';
export default function render(props) {

    const [likeImageCounter, setLikeImageCounter] = useState(0);
        const handleLikeImageCount = ()=>{
        setLikeImageCounter(likeImageCounter+1);
        }
  return (
    props.ren(likeImageCounter,handleLikeImageCount)
  )
}
