import React from 'react'
import './Hero.css'

export const HeroSection = () => {
  const scroll = ()=>{
    document.getElementById('about').scrollIntoView({behavior:'smooth'})
  }
  return (
    <div id="home" className='bg-cover h-screen relative bg-fixed w-full' style={{
      backgroundImage:`url('https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg?auto=compress&cs=tinysrgb&w=600')`
      }}>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='absolute inset-0 font-bold max-md:text-6xl text-8xl text-white h-screen flex justify-center items-center'>
             <div><div className='text text-center mb-4'>E-CELL</div>
              <div className='text text-center flex max-md:flex-col'><div className='mx-4'>MNNIT</div><div>Allahabad</div></div>
              <div 
              className='scrolldown absolute cursor-pointer left-1/2 bottom-0 w-[40px] h-[40px] translate-y-[-80px] translate-x-[-50%] rotate-45'
              onClick={scroll}
             >
                  <span className='absolute mt-0 ml-0 block w-[100%] h-[100%] border-b-2 border-r-2 border-solid border-white'></span>
                  <span className='absolute mt-0 ml-0 block w-[100%] h-[100%] border-b-2 border-r-2 border-solid border-white'></span>
                  <span className='absolute mt-0 ml-0 block w-[100%] h-[100%] border-b-2 border-r-2 border-solid border-white'></span>
              </div>
  
              </div>
          </div>
      </div>
  )
}
