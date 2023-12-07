import React from 'react'
import logo from '../Assets/loading black.png'

const Loading = () => {
  return (
    <div className='fixed h-screen w-full top-0 left-0 grid'>
        <div className="wrapper p-10 border rounded-lg m-auto bg-white flex drop-shadow-[35px_35px_35px_rgba(0.75,0.75,0.75,0.75)]">
            <img src={logo} alt="" className='animate-spin h-[75px]' />
            <p className='text-3xl font-semibold my-auto ml-5'>Loading. . . .</p>
        </div>
    </div>
  )
}

export default Loading