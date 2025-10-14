import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <img src="https://plus.unsplash.com/premium_photo-1752881116951-604dca8c8fcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025" alt="" />
      <h1>{props.user}, {props.age}</h1>
      <p>{props.description}</p>
      <button>view</button>
      </div>
    </div>
  )
}

export default Card
