import React from 'react'
import { useState } from 'react';
function HOC(CompomentOg) {
    function hof(){
        const [likeImageCounter, setLikeImageCounter] = useState(0);
        const handleLikeImageCount = ()=>{
        setLikeImageCounter(likeImageCounter+1);
    }
    return  <CompomentOg count ={likeImageCounter} handle = {handleLikeImageCount}/>
    }
    return hof 
}
export default  HOC