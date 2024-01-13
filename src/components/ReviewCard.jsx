import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,Name,Rating,Feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]' />
      <p className='info-text m-auto text-center max-w-96 mt-4'>{Feedback}</p>
      <div className='flex gap-1 mt-3'>
        <img src={star} width={24} height={24} className='object-contain m-0' />
        <p className='info-text text-xl'>({Rating})</p>
      </div>
      <h3 className='font-palanquin font-bold text-3xl mt-1 text-center'>{Name}</h3>
    </div>
   
  )
}

export default ReviewCard
