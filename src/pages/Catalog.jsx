import React from 'react'

const Catalog = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      {/* Yuqori menyu */}
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
        {/* Hero bo'limi */}
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

        {/* Get the highlights bo'limi */}
        <section className='bg-[#1d1d1f] py-16'>
          <div className='mx-auto w-[85%] max-w-[1260px]'>
            {/* Sarlavha va havola */}
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
                className='absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDOaV2z2bFsKBfuKHx3ZEc1Ht9WI1rrc8Cuv8Yd186WVFqZRF27o8_6g&s=10'
                alt='iPhone 16 Pro'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Catalog