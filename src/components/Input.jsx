import React from 'react'
import aatach from "../img/aatach.png";
import img from "../img/img.png"

const Input=()=> {
  return (
    <div className='input'>
      <input type="text" placeholder="Type Something..."/>
      <div className='send'>
        <img src={aatach}alt=''/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file"> 
            <img src={img} alt=''/>
     </label>
     <button>Send </button>
      </div>
    </div>
  )
}

export default Input