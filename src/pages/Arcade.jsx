import React from 'react'
import arcade2 from '../assets/arcade1.png'
import arcade1 from '../assets/arcade2.jpg'

const Arcade = () => {
  return (
    <div className="w-full bg-white text-black">
      <main>
        
        <section className="relative w-full h-[600px] md:h-[700px] flex justify-center items-center overflow-hidden">
          <img 
            src={arcade1} 
            alt="Sonic" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />

          <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4">
            <img 
              className="w-[75%] md:w-[500px] object-contain drop-shadow-2xl" 
              src={arcade2} 
              alt="Apple Arcade" 
            />

            <button className="bg-[#ff3b30] hover:bg-[#e03126] text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-2xl cursor-pointer active:scale-95 text-base md:text-lg">
              Try it free
            </button>
          </div>
        </section>

        
        <section className="max-w-4xl mt-[80px] mx-auto px-4 py-20 text-center flex flex-col gap-16">
          
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ff3b30] mb-2">
              Unlimited access
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              to 200+ incredibly fun games,<br />
              with more added all the time.
            </p>
          </div>

          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ff3b30] mb-2">
              Play across your Apple devices.
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              And get immersed on Apple Vision Pro.
            </p>
          </div>

          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ff3b30] mb-2">
              No ads.
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              No interruptions.<br />
              No in-app purchases.
            </p>
          </div>

          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ff3b30] mb-2">
              Online or offline,
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              games are always at your fingertips.
            </p>
          </div>

        
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ff3b30] mb-2">
              Share your subscription
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              with up to five family members.
            </p>
          </div>

         
          <div className="flex items-center justify-center gap-3 text-3xl md:text-5xl font-extrabold text-gray-900 my-12 tracking-tight">
  <span>Look for</span>
  
 
  <span className="inline-flex items-center justify-center text-4xl md:text-6xl text-[#0071e3] transform -translate-y-1">
    🕹️
  </span>
  
  <span>on</span>
  

  <div className="inline-flex items-center justify-center w-11 h-11 md:w-16 md:h-16 bg-[#0071e3] rounded-2xl text-white font-bold shadow-lg">
    <span className="text-2xl md:text-4xl font-extrabold tracking-tighter">A</span>
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 my-12" >
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
    
    
    <div className="bg-gray-50 border border-gray-200/80 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold tracking-wider text-[#ff3b30] uppercase bg-red-50 px-3 py-1 rounded-full inline-block mb-4">
          Free 1-month trial
        </span>

        <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight min-h-[48px] flex items-center justify-center">
          $6.99<span className="text-lg font-normal text-gray-500 ml-1">/mo.</span>
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-xs mx-auto">
          After the free trial, get unlimited access to 200+ games for the price of one premium game each month.
        </p>
      </div>

      <button className="w-full bg-[#ff3b30] hover:bg-[#e03126] text-white font-medium py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-base cursor-pointer">
        Try it free
      </button>
    </div>

    
    <div className="bg-gray-50 border border-gray-200/80 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold tracking-wider text-[#ff3b30] uppercase bg-red-50 px-3 py-1 rounded-full inline-block mb-4">
          Free 1-month trial
        </span>

        <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight min-h-[48px] flex items-center justify-center">
          Apple One
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-xs mx-auto">
          Bundle Apple Arcade with up to five other great services for one low monthly price. And enjoy more for less.
        </p>
      </div>

      <button className="w-full bg-[#ff3b30] hover:bg-[#e03126] text-white font-medium py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-base cursor-pointer">
        Try Apple One free
      </button>
    </div>

    
    <div className="bg-gray-50 border border-gray-200/80 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold tracking-wider text-[#ff3b30] uppercase bg-red-50 px-3 py-1 rounded-full inline-block mb-4">
          Buy an Apple device
        </span>

        <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight min-h-[48px] flex items-center justify-center">
          3 months free
        </div>

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-xs mx-auto">
          Apple Arcade is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.*
        </p>
      </div>

      <button className="w-full bg-[#ff3b30] hover:bg-[#e03126] text-white font-medium py-3.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-base cursor-pointer">
        Try it free
      </button>
    </div>

  </div>
</div>

<div>
    <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Action. Adventure. Puzzles. <br />
Let the gaming begin.</p>
</div>

        </section>
      </main>
    </div>
  )
}

export default Arcade