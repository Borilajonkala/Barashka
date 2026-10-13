import React from 'react'
import iphone16 from '../assets/iphone16.png'
import yare from '../assets/yare.png'
import yareyare from '../assets/bankai.png'
import yar from '../assets/yoooooo.png'
import yor from '../assets/messege.png'
import yaree from '../assets/half.png'
import yaroe from '../assets/phon.png'
import hand from '../assets/hands.png'
import sam from '../assets/samsung.png'


const Information = () => {
  return (
    <div className="font-sans antialiased text-white bg-white "> 
      <div className="flex items-center justify-center flex-col pt-16 pb-12 px-4 gap-6 bg-gradient-to-b from-[#151b36] via-[#1e274a] to-[#0f1224] text-center min-h-[85vh] relative overflow-hidden">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium">
          iPhone 16
        </h2>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_5px_#60a5fa] [text-shadow:0_0_8px_#60a5fa,0_0_18px_#a855f7,0_0_30px_#ec4899]">
          Hello, Apple Intelligence.
        </h1>
        <div className="w-full max-w-[850px] my-4 z-10">
          <img className="w-full h-auto object-contain" src={iphone16} alt="iPhone 16" />
        </div>
        <div className="flex flex-col items-center gap-3 z-10">
          <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-normal px-5 py-2.5 rounded-full transition duration-300 shadow-md">
            View pricing
          </button>
          <div className="text-xs md:text-sm text-gray-400 space-y-1">
            <p className="font-semibold text-gray-300">From $799 or $33.29/mo. for 24 mo.</p>
            <p>Pre-order starting at 5:00 a.m. PDT on 9.13</p>
            <p>Available starting 9.20</p>
            <p>Apple Intelligence coming this fall</p>
          </div>
        </div>
      </div>
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Get the highlights.
            </h2>
            <a href="#watch" className="text-[#0066cc] hover:underline flex items-center gap-1 text-sm font-medium group">
              Watch the film 
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
          <div className="w-full bg-gradient-to-br from-[#0f1123] via-[#1a1d36] to-[#070814] rounded-[28px] overflow-hidden p-8 md:p-12 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-lg">
             <div className="flex flex-col space-y-3 max-w-xs md:pl-4">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                The first iPhone built for Apple Intelligence.
              </h3>
              <p className="text-lg md:text-xl text-gray-400 font-medium tracking-tight">
                Personal, private, powerful.<sup className="text-xs text-blue-400 ml-0.5">2</sup>
              </p>
            </div>
            <div className="flex justify-center items-center relative">
              {/* Orqa fondagi neon effekt */}
              <div className="absolute w-60 h-80 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="relative w-[240px] h-[490px] bg-black rounded-[40px] p-2.5 shadow-2xl ring-1 ring-white/10 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0.5 rounded-[38px] border border-purple-500/40 pointer-events-none z-20"></div>
                <div className="relative w-full h-full rounded-[32px] bg-gradient-to-b from-[#1a2542] via-[#3a205a] to-[#120a2b] overflow-hidden flex flex-col items-center justify-between p-4">
                   <div className="w-22 h-5.5 bg-black rounded-full z-30 mt-0.5 flex items-center justify-end px-2.5">
                    <div className="w-1 h-1 bg-blue-950 rounded-full border border-blue-400/20"></div>
                  </div>
                  <div className="text-center mt-1 z-20">
                    <p className="text-[9px] font-medium tracking-wide text-indigo-200/70 uppercase">Monday, September 9</p>
                    <h4 className="text-4xl font-bold tracking-tighter text-white/90 mt-0.5">9:41</h4>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-600/40 blur-xl"></div>
                  </div>
                  <div className="w-full flex justify-between items-center px-1 mb-0.5 z-20">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 text-[10px]">
                      🔦
                    </div>
                    <div className="w-16 h-0.5 bg-white/60 rounded-full"></div>
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 text-[10px]">
                      📷
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div> 

        </div>
      </section>
      <section className='bg-white text-black pt-[50px]'>
        <div className=" w-[90%]">
          <h1 className='text-2xl ml-[100px] font-semibold ' >Take a closer look.</h1>
          <img className='ml-[200px]' src={yare} alt="" />
        </div>
      </section>
      <section className='bg-white text-black pt-[100px] flex items-center justify-center flex-col gap-[20px]'>
        <h1 className='text-center text-4xl font-semibold bg-gradient-to-r from-[#9b66ff] via-[#e24490] to-[#ff5c35] bg-clip-text text-transparent pb-2'>Apple Intelligence</h1>
        <h1 className='text-center text-4xl font-bold text-[#1d1d1f]'>AI-opening possibilities</h1>
        <img className='pt-[60px]' src={yareyare} alt="" />
      </section>
      <section className='bg-white text-black pt-[100px] flex items-center justify-center flex-col  gap-[50px]'>
        <p className='w-[600px]'>iPhone 16 is built for Apple Intelligence, the personal intelligence write, express yourself, and get things done effortlessly . With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.</p>
        <h1 className='text-2xl md:text-3xl font-bold tracking-tight text-[#1d1d1f] text-center antialiased font-sans'>Explore new tools that help you write, focus, and communicate.</h1>
        <div className='flex items-center justify-between gap-[40px] '>
          <div className='flex items-center justify-center flex-col p-[40px] w-[513px]'>
          <img src={yar} alt="" />
          <p>Writing Tools can proofread your text and rewritedifferent versions until the tone and wording arejust right, and summarize selected text with a tap.They’re available nearly everywhere you write,including third-party apps.</p>
          </div>
          <div className='w-[513px]'>
              <p>Writing Tools can proofread your text and rewrite
different versions until the tone and wording are
just right, and summarize selected text with a tap.
They’re available nearly everywhere you write,
including third-party apps.</p>
               <img src={yor} alt="" />
               <p>
                Priority messages in Mail elevate time-sensitive
messages to the top of your inbox — like an
invitation that has a deadline today or a check-in
reminder for your flight this afternoon.
               </p>
               <img src={yaree} alt="" />
          </div>
        </div>
      </section>
      <section className='text-black mt-[90px] flex items-center justify-center flex-col gap-[30px] '>
        <img src={yaroe} alt="" />
        <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] text-center antialiased font-sans max-w-2xl mx-auto leading-tight'>Great powers come with great
privacy.</h1>
        <div className='flex items-center gap-[50px]'>
          <p className='w-[320px]'>Apple Intelligence is designed to
protect your privacy at every step. It’s
integrated into the core of iPhone
through on-device processing. So it’s
aware of your personal information
without collecting your personal
information.</p>
        <p className='w-[320px]'> Intelligence is designed to
protect your privacy at every step. It’s
integrated into the core of iPhone
through on-device processing. So it’s
aware of your personal information
without collecting your personal
information.</p>
        </div>
      </section>
      <section className='mt-[90px]'>
    <div className="font-sans antialiased tracking-tight text-center md:text-left flex items-center justify-cenetr flex-col gap-[20px]">
    <h2 className="text-3xl md:text-4.5xl font-semibold text-[#4378ff] mb-1">
      Take total Camera Control.
    </h2>
    <p className="text-3xl md:text-4.5xl font-bold text-[#1d1d1f]">
      Touch. Zoom. Click. Quick.
    </p>
    </div>
      </section>  
      <section className='mt-[60px]'>
        <img className='w-[100%]' src={hand} alt="" />
      </section>
      <section className='text-black mt-[50px]'>
        <p className='w-[800px] ml-[150px]'>functions like exposure or depth of field, and toggle through each lens or use digital zoom
to frame your shot — just how you like it. functions like exposure or depth of field, and toggle through each lens or use digital zoom
to frame your shot — just how you like it.</p>
        <div className='flex items-center justify-between mt-[50px]'>
          <div className='flex items-center justify-center flex-col'>
            <img className='rounded' src={sam} alt="" />
            <p className='w-[360px] p-[30px] gap-[20px]'>Click to launch the Camera app. Click again to
instantly take a photo.</p>
          </div>
          <div className='flex items-start justify-center flex-col'>
            <img className='rounded' src={sam} alt="" />
            <p className='w-[360px] p-[30px] gap-[20px]'>Click to launch the Camera app. Click again to
instantly take a photo.</p>
          </div>
          <div className='flex items-start justify-center flex-col'>
            <img className='rounded' src={sam} alt="" />
            <p className='w-[360px] p-[30px] gap-[20px]'>Click to launch the Camera app. Click again to
instantly take a photo.</p>
          </div>
          
        </div>
      </section>
      
    </div>
  )
}

export default Information
