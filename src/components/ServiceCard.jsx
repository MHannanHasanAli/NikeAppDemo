import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='flex justify-center items-center w-11 h-11 bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} height={24} width={24}/>
      </div>
      <h3 className='font-palanquin font-bold text-3xl mt-5 leading-normal'>{label}</h3>
      <p className='font-montserrat text-slate-gray leading-normal text-lg mt-3 break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
