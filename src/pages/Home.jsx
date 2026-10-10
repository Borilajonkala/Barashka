import React from 'react';
import Img from '../assets/phone.png';
import iphone from '../assets/iphone.png'
import iphone16 from '../assets/iphone16.png'
import wewatch from '../assets/wewatch.png'
import watch from '../assets/watch.png'
import watchin from '../assets/watchin.png'
import woatch from '../assets/woatch.png'

const Home = () => {
  return (
    <div>   
   <main>
     <section className='bg-black text-white p-8 '>
  <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6'>
    <img src={Img} alt="iPhone 16 Pro" className='max-w-md w-full h-auto object-contain mt-12' />
    
    <p className='text-[20px] font-bold w-96 leading-relaxed mt-14'>
      Introducing iPhone 16 Pro and iPhone 16, built for
      Apple Intelligence. All-new Apple Watch Series 10 and AirPods 4.
      Apple Watch Ultra 2 and AirPods Max in fresh new colors. And
      AirPods Pro 2, with hearing health features coming this fall.
    </p>
    
    <button className='bg-transparent text-white px-6 py-2 rounded-full font-semibold border-white'>
      Watch the event
    </button>
  </div>
  <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6 mt-24'>
    <img src={iphone} alt="" />
      <p className='text-[20px] font-bold w-96 leading-relaxed mt-14'>
      Built for Apple Intelligence — personal, private, powerful. Camera Control,
      an easier way to quickly access camera tools. Stunning 4K 120 fps Dolby
      Vision video. A18 Pro chip. And a huge leap in battery life.
    </p>
    <div>
      <div className="flex flex-wrap gap-4">
  <button className="rounded-full border border-blue-500 bg-blue-600 px-6 py-3 font-bold text-white transition duration-300 ">
    Learn more →
  </button>

  <button className="rounded-full border border-blue-500 bg-transparent px-6 py-3 font-bold text-blue-500 transition duration-300 ">
    View pricing →
  </button>
</div>
    </div>
  </div>
     </section>
     <section className='bg-gradient-to-b from-[#1b2258] via-[#7687ba] to-[#e6ecf8]'>
      <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6 '>
        <h1 className='font-bold text-2xl'>Iphone 16</h1>
        <h2>Hello Apple Intellgence</h2>
        <img src={iphone16} alt="" />
          <p className='text-[20px] font-bold w-96 leading-relaxed mt-14'>
      Built for Apple Intelligence — personal, private, powerful. Camera Control,
      an easier way to quickly access camera tools. Stunning 4K 120 fps Dolby
      Vision video. A18 Pro chip. And a huge leap in battery life.
    </p>
            <div className="flex flex-wrap gap-4">
  <button className="rounded-full border border-blue-500 bg-blue-600 px-6 py-3 font-bold text-white transition duration-300 ">
    Learn more →
  </button>

  <button className="rounded-full border border-blue-500 bg-transparent px-6 py-3 font-bold text-blue-500 transition duration-300 ">
    View pricing →
  </button>
</div>
      </div>
     </section>
     <section className='bg-white '>
      <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6 '>
        <img className='mt-12' src={wewatch} alt="" />
          <p className='text-[20px] font-bold w-96 leading-relaxed mt-14 text-[#6E6E73]'>
      Our thinnest watch with our biggest display.
      Tracking for your activity and workouts — with depth and
      Vision video. A18 Pro chip. And a huge leap in battery life.
      water temperature. All in our fastest-charging watch ever.
    </p>
        <h1 className='text-black'>Available starting 9.20</h1>
                 <div className="flex flex-wrap gap-4">
  <button className="rounded-full border border-blue-500 bg-blue-600 px-6 py-3 font-bold text-white transition duration-300 ">
    Learn more →
  </button>

  <button className="rounded-full border border-blue-500 bg-transparent px-6 py-3 font-bold text-blue-500 transition duration-300 ">
    View pricing →
  </button>
</div>
<img src={watch} alt="" />

      </div>
     </section>
     <section className='bg-black '>
      <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6 '>
        <img className='mt-12' src={watchin} alt="" />
          <p className='text-[20px] font-bold w-96 leading-relaxed mt-14 text-[#6E6E73]'>
      The ultimate sports and adventure watch features a
stunning new black titanium case. With connectivity,
health, and safety features for the everyday. And the most
    </p>
        <h1 className='text-white'>Available starting 9.20</h1>
                 <div className="flex flex-wrap gap-4">
  <button className="rounded-full border border-blue-500 bg-blue-600 px-6 py-3 font-bold text-white transition duration-300 ">
    Learn more →
  </button>

  <button className="rounded-full border border-blue-500 bg-transparent px-6 py-3 font-bold text-blue-500 transition duration-300 ">
    View pricing →
  </button>
</div>
<img src={woatch} alt="" />

      </div>
     </section>


      


   </main>
    </div>
  );
};

export default Home;