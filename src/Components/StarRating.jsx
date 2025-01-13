import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Rating.css'

const StarRating = ({noOfStar = 5}) => {

  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setClick(index)
  }
  
  const handleMouseMove = (index) => {
    setHover(index)
  }
  
  const handleMouseLeave = () => {
    setHover(0);
  }

  return (
    <div className='ratingDiv'>
      {[...Array.from({ length: noOfStar }).map((_, index) => {
        const starIndex = index += 1;
        return (
          <FaStar
            className={starIndex <= (hover || click) ? "active" : "inactive"}
            key={starIndex}
            onClick={()=>handleClick(starIndex)}
            onMouseMove={()=>handleMouseMove(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        )
      })]}
    </div>
  )
}

export default StarRating