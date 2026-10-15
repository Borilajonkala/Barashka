import React from 'react'
import mus from '../assets/mus.png'
// Background.png fayli src/assets/ ga qo'yilgach, quyidagi qatorni oching:
// import Bg11 from '../assets/Background.png'

const Music = () => {
  return (
    <div className='bg-black text-white'>
      <main>
        <section
          className='min-h-screen bg-cover bg-center bg-no-repeat'
          style={{
            // Bg11 ni yoqqaningizda: backgroundImage: `url(${Bg11})`
            backgroundImage: 'linear-gradient(to bottom, #fa233b, #000)',
          }}
        >
          <div className='flex flex-col items-center justify-center gap-8 w-96 mx-auto'>
            <img className='mt-40' src={mus} alt='Apple Music' />
            <h1 className='text-center text-[60px] font-bold'>
              For the love of music.
            </h1>
            <p>
              Play over 100 million songs, always ad-free. Hear next-level sound
              quality with Spatial Audio and lossless audio.² Take center stage
              with Apple Music Sing. Access exclusive interviews and live
              concerts. And listen across all your devices, online or offline.
              The music app for music lovers is here.
            </p>
            <button className='rounded-3xl bg-white text-black p-2.5'>
              Try it free*
            </button>
          </div>
        </section>

        <section className='bg-white'>
          <div className='flex items-center justify-around py-9'>
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <p className='text-black'>
                  New subscribers get 3 months of Apple Music free, then pay
                  $10.99 per month.
                </p>
                <h4 className='text-black'>Try it free*</h4>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Music