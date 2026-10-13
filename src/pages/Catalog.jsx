import React from 'react'
import Rasm from '../assets/Bola.png';
import Qiz from '../assets/Qiz.png';
import Ot from '../assets/Background.png';
const Catalog = () => {
  return (
    <div className='bg-black text-white min-h-screen '>

      <header className='mx-auto w-[85%] flex items-center justify-between py-4 border-b border-white/20'>
        <h2 className='text-2xl font-bold'>iPhone 16 Pro</h2>

        <nav>
          <ul className='flex items-center gap-8 text-sm'>
            <li className='cursor-pointer hover:opacity-70'>Overview</li>
            <li className='cursor-pointer hover:opacity-70'>Switch from Android to iPhone</li>
            <li className='cursor-pointer hover:opacity-70'>Tech Specs</li>
            <li>
              <button className='btn btn-primary btn-sm rounded-full px-5'>
                View pricing
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>

        <section className='flex flex-col items-center text-center pt-10 pb-20 bg-black'>
          <h2 className='text-xl font-semibold'>iPhone 16 Pro</h2>
          <h1 className='text-4xl md:text-5xl font-semibold mt-3 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]'>
            Hello, Apple Intelligence.
          </h1>

          <div className='mt-10 w-full max-w-5xl px-4'>
            <img
              className='w-full h-auto object-contain'
              src='https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f3e786207750939.66e2c343bae71.jpg'
              alt='iPhone 16 Pro'
            />
          </div>

          <button className='btn btn-primary rounded-full px-8 mt-10'>
            View pricing
          </button>
        </section>


        <section className='bg-[#1d1d1f] py-16'>
          <div className='mx-auto w-[85%] max-w-[1260px]'>

            <div className='flex items-end justify-between mb-10'>
              <h2 className='text-5xl font-bold tracking-tight leading-tight'>
                Get the highlights.
              </h2>

            </div>


            <div className='relative bg-black rounded-3xl overflow-hidden h-[570px]'>
              <h2 className='absolute top-10 left-10 z-10 max-w-[260px] text-xl font-semibold leading-snug text-left'>
                The first iPhone built for Apple Intelligence. Personal, private, powerful.
              </h2>

              <img
                className='absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-[300px] object-contain'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDOaV2z2bFsKBfuKHx3ZEc1Ht9WI1rrc8Cuv8Yd186WVFqZRF27o8_6g&s=10'
                alt='iPhone 16 Pro'
              />
            </div>
          </div>
        </section>

        <section className='bg-black py-12'>
          <div className='mx-auto w-[85%] max-w-[1260px]'>
            <h2 className='text-4xl font-bold tracking-tight'>
              Take a closer look.
            </h2>

            <div className='flex justify-center mt-6'>
              <img
                className='w-full max-w-[900px] h-auto object-contain'
                src='https://icon.ink/wp-content/uploads/sites/5/2024/11/Apple-iPhone-16-Pro-finish-lineup-240909_big.jpg.large_2x.png'
                alt='iPhone 16 Pro finishes'
              />
            </div>
          </div>
        </section>

        <section className='bg-black py-16'>
          {/* Sarlavha */}
          <div className='text-center'>
            <h2 className='text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-300'>
              Strength. Beauty.
              <br />
              <span className='text-white'>Titanium.</span>
            </h2>
          </div>



          <div className='mt-12 flex justify-center'>
            <img
              className='w-full max-w-[900px] h-auto object-cover'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYXjghJltJj95vXctfX_WUIVMmMhtLOmDyDB4FR9QDxZFQ05a0AMFUIY&s=10'
              alt='iPhone 16 Pro titanium'
            />
          </div>


          <div className='mx-auto w-[85%] max-w-[900px] mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm leading-relaxed text-gray-400'>
            <p>
              iPhone 16 Pro features a Grade 5 titanium design with a new, refined
              microblasted finish. Titanium has one of the highest strength-to-weight
              ratios of any metal, making these models{' '}
              <span className='font-semibold text-white'>
                incredibly strong and impressively light.
              </span>{' '}
              iPhone 16 Pro comes in four stunning colors — including new Desert Titanium.
            </p>

            <p>
              Internal design improvements — including a 100 percent recycled aluminum
              thermal substructure and back glass optimizations that further dissipate
              heat — enable up to 20 percent{' '}
              <span className='font-semibold text-white'>
                better sustained performance
              </span>{' '}
              than iPhone 15 Pro. So you can do all the things you love — like
              high-intensity gaming — for longer.
            </p>
          </div>
        </section>

        <section className='bg-black py-16'>
          <div className='mx-auto w-[85%] max-w-[1260px] text-center'>

            <h2 className='text-4xl md:text-5xl font-semibold tracking-tight leading-tight'>
              <span className='bg-gradient-to-r bg-fuchsia-500 bg-clip-text text-transparent'>
                Apple Intelligence.
              </span>
              <br />
              <span className='text-white'>AI-opening possibilities.</span>
            </h2>


            <div className='mt-12 flex justify-center'>
              <img
                className='w-full max-w-[420px] h-auto object-contain'
                src='https://yi-files.yellowimages.com/products/2045000/2045167/3130863-cover.jpg'
                alt='Apple Intelligence'
              />
            </div>
          </div>
        </section>


        <section className='bg-[#1d1d1f] py-10'>
          <div className='mx-auto w-[85%] max-w-[1260px] grid md:grid-cols-2 gap-5'>

            {/* Chap karta: balandligi ikkita o'ng kartaga teng */}
            <div className='bg-black rounded-3xl overflow-hidden text-center md:row-span-2 flex flex-col'>
              <img
                className='w-full max-w-[420px] mx-auto h-auto px-10 pt-10'
                src='https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2024/11/proofread-prompt-in-text-action-in-shortcuts-app-on-iphone.png?q=49&fit=contain&w=421&h=750&dpr=2'
                alt='Writing Tools'
              />
              <p className='mt-auto px-10 pt-6 pb-10 text-gray-400 leading-snug'>
                <span className='font-semibold text-white'>Writing Tools</span> can
                proofread your text and rewrite different versions until the tone and
                wording are just right, and summarize selected text with a tap. They’re
                available nearly everywhere you write, including third-party apps.
              </p>
            </div>

            {/* O'ng yuqori karta */}
            <div className='bg-black rounded-3xl overflow-hidden text-center px-10 py-10'>
              <p className='text-sm text-gray-400 leading-snug'>
                Just hit record in the Notes or Phone app to capture audio recordings
                and transcripts. Apple Intelligence generates{' '}
                <span className='font-semibold text-white'>summaries</span> of your
                transcripts, so you can get the most important info at a glance.
              </p>
              <img
                className='mt-10 w-full h-auto'
                src='https://www.guidingtech.com/wp-content/uploads/Wide-Spectrum.png'
                alt='Audio recording'
              />
            </div>

            {/* O'ng pastki karta */}
            <div className='bg-black rounded-3xl overflow-hidden text-center pt-10'>
              <p className='px-10 text-sm text-gray-400 leading-snug'>
                <span className='font-semibold text-white'>Priority messages in Mail</span>{' '}
                elevate time-sensitive messages to the top of your inbox — like an
                invitation that has a deadline today or a check-in reminder for your
                flight this afternoon.
              </p>
              <img
                className='mt-10 w-full max-w-[300px] mx-auto h-auto'
                src='https://onesignal.com/blog/content/images/2024/08/ios-18-mail-categories--1-.jpg'
                alt='Mail priority messages'
              />
            </div>

          </div>
        </section>

        <section className='bg-gray-800'>
          <div className='mx-auto'>
            <img className='mx-auto w-[300px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8bBABag_rz2DMhPz1x9fg-MBZbAuqzMHdPhNUBZKnIWFFOofgxUsJovE&s=10" alt="" />
            <h2 className='w-[630px] font-bold text-6xl mx-auto p-[40px]'>Great powers come with
              great privacy.</h2>
            <div className='flex itmes-center'>
              <p className='w-[303px] mx-auto p-[40px]'>Apple Intelligence is designed to
                protect your privacy at every step. It’s
                integrated into the core of iPhone
                through on-device processing. So it’s
                aware of your personal information
                without collecting your personal
                information.</p>
              <p className='w-[303px] mx-auto p-[40px]'>Apple Intelligence is designed to
                protect your privacy at every step. It’s
                integrated into the core of iPhone
                through on-device processing. So it’s
                aware of your personal information
                without collecting your personal
                information.</p>
            </div>
          </div>
        </section>

        <section>
          <div>
          <h2 className="w-[555px] text-center text-[64px] font-bold  text-white mx-auto ">
                      Take total Camera Control.
                    </h2>

                 <div className='flex items-center justify-center mt-[1200px]'>
                 <p className='w-[416px] mx-auto'>Now you can take the perfect photo or video
in record time. Camera Control gives you an
easier way to quickly access camera tools.
Simply slide your finger to adjust camera
functions like exposure or depth of field, and
toggle through each lens or use digital zoom
to frame your shot — just how you like it.</p>
                    <p className='w-[416px] mx-auto'>
                    Later this year, Camera Control will
introduce a two-stage shutter that lets you
automatically lock focus and exposure with
a light press — so you can reframe your shot
without losing focus on your subject.
                    </p>
                 </div>
                 <div className='flex items-center justify-between p-[98px]'>
                 <img src={Rasm} alt="" />
                 <img src={Qiz} alt="" />
                 </div>
          </div>
        </section>

        <section>
          <div>
            <img src={Ot} alt="" />
          </div>
        </section>

      </main>
    </div>
  )
}

export default Catalog