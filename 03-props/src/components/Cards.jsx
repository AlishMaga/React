import React from 'react'
import { Bookmark } from 'lucide-react';

const Cards = (props) => {
  return (
    <div className='Card'>
        <div>
          <div className='top'>
          <img src={props.image} alt="" />
          <button>Save <Bookmark  size={15}/></button>
        </div>
        <div className='middle'>
          <p>{props.company}<span> {props.postDate}</span></p> 
          <h2>{props.jobTitle}</h2>
          <div className='middle-post'>
            <h5>{props.type}</h5>
            
          </div>
        </div>
        </div>

        <div className='buttom'>
          <div><h2>{props.pay}</h2>
          <p>{props.location}</p></div>
          <div><button>Apply now</button></div>         
        </div>
      </div>
  )
}

export default Cards
