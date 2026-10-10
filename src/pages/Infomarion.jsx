import React from 'react'
import iphone16 from '../assets/iphone16.png'
import oo from '../assets/ryoiktenkai.png'



const Infomarion = () => {
  return (
    <div> 
      <div className='flex items-center justify-center flex-col p-10 gap-[40px] bg-gradient-to-b from-[#243673] to-[#e6f0fa] '>
        <h1 className=''>
        iphone 16
      </h1>
       <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-white
        drop-shadow-[0_0_5px_#60a5fa]
        [text-shadow:0_0_8px_#60a5fa,0_0_18px_#a855f7,0_0_30px_#ec4899,0_0_45px_#f59e0b]">
        Hello, Apple Intelligence.
      </h1>
      <img className='w-[900px]' src={iphone16} alt="" />
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-1xl font-normal px-8 py-4 rounded-full transition duration-300">View pricing</button>
      <p className='w-[400px] '>Pre-order starting at 5:00 a.m. PDT on 9.13 Available starting 9.20 Apple Intelligence coming this fall</p>
      </div>
      <section className='pt-7 bg-white text-black'>
        <div className="container">
          <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Get the highlights.</h1>
          <p className='text-blue-600 '>Watch the film  </p>
        </div>
        </div>
        <div className='container2'>
          <img className='img' src={oo} alt="" />
        </div>
      </section>
      
    </div>
  )
}

export default Infomarion