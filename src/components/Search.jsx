import React from 'react'

const Search = ()=> {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type="text" placeholder='find a user'/>
        </div>
        <div className="userChat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg45jUi84SYeCf4uNAaprS7aoKzS8AohaLwQ&usqp=CAU" alt="" />
            <div className="userChatInfo">
               <span>Minu</span>
            </div>
        </div>
    </div>

  )
}


export default Search
  
