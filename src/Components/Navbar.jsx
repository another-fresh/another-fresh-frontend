import React from 'react'
import logo from '../Assets/logo1.png'
import logo2 from '../Assets/logo2.png'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ open, close, menu }) => {

  const navigate = useNavigate();

  return (
    <div className='py-5 md:py-7 xl:py-10'>
        <div className="container mx-auto grid md:flex md:w-10/12 2xl:w-full">
          <div className="w-full md:w-1/2 grid">
            <img src={logo} alt="" className='w-8/12 md:w-1/2 m-auto md:m-0' />
          </div>
          <div className="w-1/2 hidden md:grid">
            <div className="flex">
              <button onClick={()=>navigate('/')} className='text-xl my-auto ml-auto text-white transition-all duration-500 hover:scale-110'>Home</button>
              <button className='text-xl my-auto ml-20 text-white transition-all duration-500 hover:scale-110' onClick={()=>navigate('/list')}>Price List</button>
            </div>
          </div>
          <button onClick={open} className='text-white p-1 rounded absolute top-8 left-5 grid md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <div className={`side grid md:hidden absolute top-0 transition-all duration-500 p-5 bg-white h-screen w-10/12 ${menu === true ? 'left-0' : '-left-[700px]'}`}>
            <div className="flex h-max">
              <div className="w-10/12 grid h-max">
                <img src={logo2} alt="" className='w-3/4 my-auto' />
              </div>
              <div className="w-2/12 h-[40px] grid">
                <button onClick={close} className='my-auto h-max w-max'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid h-max">
              <button className='text-xl mt-10' onClick={()=>navigate('/')}>Home</button>
              <button className='text-xl my-10' onClick={()=>navigate('/list')}>Price List</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar