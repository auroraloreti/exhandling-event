import React from "react";

function MouseClicker() {
    const imgUrl = './handling/src/assets/231203-seok-matthew-instagram-update-v0-yuuztew6a34c1.webp'
    const name = 'matthew'
    const handleClick = (event) => {
        console.log(event.target.name)
    };
    return (
        <button onClick={handleClick}> <img src={imgUrl} >  Click </img> </button> 
    )
    
}

export default MouseClicker;