import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ img, name, price, price2, idP }) => {

  const navigate = useNavigate();

  return (
    <div className='border-b md:border-none pb-5 md:pb-20'>
        <img src={img} alt="" className='mx-auto h-[90px] md:h-[120px] lg:h-[250px]' />
        <p className='text-lg md:text-xl lg:text-2xl text-white mb-5 font-semibold'>{name}</p>
        <p className='text-md md:text-lg lg::text-xl text-white'>Rp.{price} / ¼kg</p>
        <p className='text-md md:text-lg lg::text-xl text-white'>Rp.{price2} / ½kg</p>
        <button onClick={()=>navigate(`/checkout/${idP}`)} className='my-5 transition-all duration-500 hover:scale-110 py-1 px-4 lg:px-8 mx-auto text-white border text-md lg:text-xl w-max border-white rounded-full'>Beli Sekarang</button>
    </div>
  )
}

export default Card