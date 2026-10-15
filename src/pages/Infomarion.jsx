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
import bg from '../assets/back.png'
import qur from '../assets/qurbaqa.png'
import qura from '../assets/family.png'
import friend from '../assets/friend.png'
import woman from '../assets/img.png'
import whatta from '../assets/whtata.png'
import whata from '../assets/A18.png'
import gey from '../assets/guy.png'
import gey22 from '../assets/gey2.png'



const Information = () => {
  return (
    <div className="font-sans antialiased text-black bg-white ">
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
      <section className='text-black flex items-center justify-center flex-col gap-[40px]'>
        <h1 className='text-[40px] leading-[1.15] font-bold tracking-[-1.5px] w-[600px]'><span className='text-[#D65BAD]'>New camera system.</span> Go to great lengths to get the perfect shot.</h1>
        <p className='w-[800px]'>The versatile new iPhone 16 camera system captures beautiful photos — from up closenpm run de or
          far away. The two-in-one 48MP Fusion camera lets you take stunning super-high-
          resolution images, or zoom in with the 2x optical-quality Telephoto. The Ultra Wide
          camera shoots extreme close-up macro photos or wider, more expansive pictures.
          Altogether, it’s like having four lenses in your pocket. And with spatial capture, you can
          even take photos and videos in 3D, which you can watch with Apple Vision Pro.</p>
        <img className='mr-[300px] w-[80%] h-[]' src={bg} alt="" />
      </section>
      <section className='flex items-center justify-center flex-col text-black gap-[50px] mt-[100px]'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-normal whitespace-pre-line font-sans select-none w-[400px]'>
          Focus on the little things.
          And the bigger picture.
        </h1>
        <p className='w-[600px]'>
          "The new Ultra Wide camera with autofocus takes incredibly sharp, detailed macro photos and videos. You can also frame more expansive scenes without taking a step back. And because it has a larger aperture and bigger pixels, it can capture up to 2.6x more light for higher image quality — even in low light."
        </p>
        <div>
          <img className='w-[1400px] h-[1100px] rounded' src={qur} alt="" />
        </div>
      </section>
      <section className='flex items-center justify-between flex-col mt-[100px] gap-[30px]'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-normal whitespace-pre-line font-sans select-none w-[650px]'>
          Bring a whole new dimension to
          your photos and videos.
        </h1>
        <img src={qura} alt="" />
        <p className='w-[600px] font-bold'>With its realigned cameras, iPhone 16 lets you take magical photos and videos in a whole new way using spatial capture. So you can relive those moments in immersive 3D with Apple Vision Pro.</p>
      </section>
      <section className="bg-white py-16 px-6 md:px-12 max-w-5xl mx-auto font-sans text-gray-900 select-none">

        <div className="mb-12">
          <span className="block text-2xl md:text-3xl font-bold text-gray-400 tracking-tight mb-1">
            Audio Mix.
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Make your voice heard.
          </h2>
        </div>
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-3xl rounded-[2.5rem] bg-gray-100 p-2 shadow-xl border border-gray-200">
            <img src={friend} alt="Audio Mix Interface" className="w-full h-auto rounded-[2.2rem] object-cover" />
          </div>
        </div>
        <div className="max-w-3xl mb-16">
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed tracking-tight">
            Powered by advanced intelligence and Spatial Audio capture, Audio Mix lets
            you <span className="text-gray-900 font-semibold">adjust the way voices sound in your videos</span> using three different voice
            options. Want to decrease background sound? Or just focus on the voices that
            are in frame? Simply select the mix and adjust intensity to get the sound you
            want after video capture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">
              In-frame
            </h3>
            <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
              Only captures the voices of the people on camera, even if
              people off-camera are talking during the recording.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">
              Studio
            </h3>
            <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
              Makes voices sound like you're recording in a professional
              studio equipped with sound-dampening walls. Great for
              vloggers or podcasters because the recording will
              sound like the mic is close to the subject's mouth, even if it's
              a few feet away.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">
              Cinematic
            </h3>
            <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
              Captures all of the voices around you and consolidates
              them toward the front of the screen — just like sound is
              formatted for the movies.
            </p>
          </div>

        </div>

      </section>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-normal whitespace-pre-line font-sans select-none w-[600px] ml-[100px]'>Choose your
        Photographic Style. Change it up.
        Change it back. </h1>
      <section className='flex items-center justify-center flex-col gap-[40px] mt-[150px]'>
        <img className='w-[100%]' src={woman} alt="" />
        <img className='w-[100%]' src={woman} alt="" />
        <img className='w-[100%]' src={woman} alt="" />
        <p className='w-[600px] '>
          Our latest generation of Photographic Styles gives you greater creative flexibility than ever before, so you can make every photo even more you. And you can add, change, or remove a style anytime you want.
        </p>
      </section>
      <section className='flex items-center justify-center flex-col mt-[150px]'>
        <div className='flex items-center justify-center '>
          <div className='flex items-center flex-col gap-[20px] w-[420px]'>
            <h1 className='text-2xl md:text-5xl font-bold text-gray-900 tracking-tight leading-normal whitespace-pre-line font-sans select-none'>
              Lock in your look.
            </h1>
            <p>We’ve created new styles that let you dial in your exact desired look with more advanced skin-tone rendering and set it across your photos. And thanks to the powerful A18 chip, you can see the change in a live preview before you apply it.</p>
          </div>
          <div>
            <img src={whatta} alt="" />
          </div>
        </div>

        <div className='flex items-center justify-center '>
          <div className='flex items-center flex-col gap-[20px] w-[420px]'>
            <h1 className='text-2xl md:text-5xl font-bold text-gray-900 tracking-tight leading-normal whitespace-pre-line font-sans select-none'>
              Lock in your look.
            </h1>
            <p>We’ve created new styles that let you dial in your exact desired look with more advanced skin-tone rendering and set it across your photos. And thanks to the powerful A18 chip, you can see the change in a live preview before you apply it.</p>
          </div>
          <div>
            <img src={whatta} alt="" />
          </div>
        </div>

        <div className='flex items-center justify-center '>
          <div className='flex items-center flex-col gap-[20px] w-[420px]'>
            <h1 className='text-2xl md:text-5xl font-bold text-gray-900 tracking-tight leading-normal whitespace-pre-line font-sans select-none'>
              Lock in your look.
            </h1>
            <p>We’ve created new styles that let you dial in your exact desired look with more advanced skin-tone rendering and set it across your photos. And thanks to the powerful A18 chip, you can see the change in a live preview before you apply it.</p>
          </div>
          <div>
            <img src={whatta} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-6 md:px-12 font-sans select-none min-h-screen flex flex-col justify-center items-center">
        <div className="">
          <img className='w-[100%]' src={whata} alt="" />
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent tracking-tight mb-2">
              A18 chip.
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hi, IQ.
            </p>
          </div>
          <div className="max-w-xl mb-12">
            <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed tracking-wide">
              Meet A18, <span className="text-white font-semibold">custom-built for Apple Intelligence</span> — and so much more.
              It jumps two generations ahead of the A16 Bionic chip in iPhone 15.
              And it powers next-level camera features like Photographic Styles
              and Camera Control. All with exceptional power efficiency to
              extend battery life.
            </p>
          </div>
          <div className="mb-6 flex items-center space-x-3 text-sm font-medium">
            <span className="text-gray-400">Compare with</span>
            <div className="relative">
            </div>
          </div>
          <div className="bg-zinc-950/40 p-6 md:p-8 rounded-2xl border border-zinc-900/80 shadow-[inset_0_1px_10px_rgba(255,255,255,0.01)]">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="block text-xs text-gray-500 font-medium">Up to</span>
                <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  60% faster
                </p>
                <span className="block text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">
                  6-core CPU
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-gray-500 font-medium">Up to</span>
                <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  2x faster
                </p>
                <span className="block text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">
                  5-core GPU
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section className="bg-white text-gray-900 py-20 px-6 md:px-12 font-sans select-none min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
            <div className="md:col-span-2 space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent tracking-tight">
                Even longer battery life.
              </h2>
              <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                You’ll need to recharge before it will.
              </p>
              <div className="pt-8 space-y-4 max-w-xl text-gray-500 text-xs md:text-sm font-medium leading-relaxed tracking-tight">
                <p>
                  iPhone 16 has been designed to make room for a larger battery, which works together with A18 to deliver <span className="text-gray-900 font-semibold">a big boost in battery life</span>, even with so many new features. So you can game, binge, and rock on — and on.
                </p>
                <p>
                  Snap on a new MagSafe charger for <span className="text-gray-900 font-semibold">even faster wireless charging</span> — up to 25W with a 30W power adapter or higher, enabling up to 50% charge in around 30 minutes.
                </p>
              </div>
            </div>
            <div className="space-y-8 pt-2 md:pt-0">
              <div className="space-y-1">
                <span className="block text-xs text-gray-400 font-medium">Up to</span>
                <p className="text-3xl md:text-4xl font-bold text-teal-600 tracking-tight">
                  27 hours
                </p>
                <span className="block text-xs text-gray-500 font-medium leading-tight">
                  video playback on iPhone 16 Plus
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-gray-400 font-medium">Up to</span>
                <p className="text-3xl md:text-4xl font-bold text-teal-600 tracking-tight">
                  22 hours
                </p>
                <span className="block text-xs text-gray-500 font-medium leading-tight">
                  video playback on iPhone 16
                </span>
              </div>
            </div>

          </div>
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-3xl rounded-[2.5rem] bg-zinc-100 p-3 shadow-2xl border border-gray-200/80 overflow-hidden">
            </div>
          </div>
          <div className="mb-6 flex items-center space-x-3 text-sm font-semibold">
            <span className="text-gray-500">Compare with</span>
            <div className="relative">
            </div>
          </div>
          <div className="bg-gray-50/50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[inset_0_1px_10px_rgba(0,0,0,0.01)]">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <span className="block text-xs text-gray-400 font-medium">Up to</span>
                <p className="text-xl md:text-3xl font-bold text-gray-950 tracking-tight">
                  5 more hours
                </p>
                <span className="block text-xs text-gray-500 font-medium">
                  video playback on iPhone 16
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs text-gray-400 font-medium">Up to</span>
                <p className="text-xl md:text-3xl font-bold text-gray-950 tracking-tight">
                  10 more hours
                </p>
                <span className="block text-xs text-gray-500 font-medium">
                  video playback on iPhone 16 Plus
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section className="bg-white text-gray-900 py-20 px-6 md:px-12 font-sans select-none min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 tracking-tight mb-2">
              Durable design.
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight max-w-xl">
              Who says beauty isn’t meant to last.
            </p>
            <p className="mt-8 text-gray-500 text-xs md:text-sm font-medium leading-relaxed tracking-tight max-w-2xl">
              iPhone 16 has a <span className="text-gray-900 font-semibold">sturdy, aerospace-grade aluminum enclosure</span> and strong — and beautiful — color-infused glass on the back. The latest-generation Ceramic Shield material is <span className="text-gray-900 font-semibold">two times tougher than any smartphone glass.</span> And a new internal design dissipates heat more effectively, so you’ll get better performance overall, especially when it comes to gaming.
            </p>
          </div>
          <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[500px]">
            <div className="md:col-span-3 text-left order-2 md:order-1">
              <p className="text-[11px] md:text-xs text-gray-500 font-medium leading-relaxed max-w-[160px]">
                Engineered from beautiful aerospace-grade aluminum.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col sm:flex-row justify-center items-center gap-6 relative order-1 md:order-2 py-8">
              <div className="w-56 h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] transform md:-rotate-12 md:translate-x-4 z-10">
                <img src={gey} alt="iPhone 16 Front" className="w-full h-auto rounded-[2.5rem] object-cover border border-gray-200" />
              </div>
              <div className="w-56 h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)] transform md:rotate-12 md:-translate-x-4 md:translate-y-8">
                <img src={gey22} alt="iPhone 16 Back" className="w-full h-auto rounded-[2.5rem] object-cover border border-gray-200" />
              </div>

            </div>
            <div className="md:col-span-3 text-left md:text-left order-3 md:translate-y-[-60px]">
              <p className="text-[11px] md:text-xs text-gray-500 font-medium leading-relaxed max-w-[180px]">
                <span className="text-gray-900 font-semibold block mb-0.5">Latest-generation Ceramic Shield.</span>
                2x tougher than any smartphone glass.
              </p>
            </div>

          </div>
          <div className="mt-12 flex justify-center w-full">
            <p className="text-[11px] md:text-xs text-gray-400 font-medium tracking-tight">
              Splash, water, and dust resistant.
            </p>
          </div>

        </div>
      </section>
      <section className='flex items-start justify-start flex-col mt-[100px] ml-[100px]'>
        <p className='w-[500px]'>Strength meets style. iPhone 16 comes in five vibrant
colors, from black to ultramarine.</p>
        <img src={yare} alt="" />
      </section>
    </div>
  )
}

export default Information
