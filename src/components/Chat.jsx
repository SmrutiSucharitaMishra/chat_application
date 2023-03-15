import React from 'react'
import Messages from './Messages';
import vdocl from "../img/vdocl.png";
import peoplee from "../img/peoplee.png";
import readmore from "../img/readmore.png";
import Input from "./Input"



const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>LIKI</span>
        <div className='chatIcons'>
          <img src={vdocl} alt=""/>
          <img src={peoplee} alt=""/>
          <img src={readmore} alt=""/>
        </div>
  
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat
