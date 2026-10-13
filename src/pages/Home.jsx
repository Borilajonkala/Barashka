import React from 'react';
import Img from '../assets/phone.png';
import iphone from '../assets/iphone.png'
import iphone16 from '../assets/iphone16.png'
import wewatch from '../assets/wewatch.png'
import watch from '../assets/watch.png'
import watchin from '../assets/watchin.png'
import woatch from '../assets/woatch.png'
import bg from '../assets/bg.png'
import bg2 from '../assets/bg2.png'
import airpods from '../assets/airpod.png'

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
        <section
          className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}>
          <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6 '>
            <h1 className='text-5xl font-bold mt-48'>AirPods Pro 2</h1>
            <p className='text-[20px] font-bold w-96 leading-relaxed mt-14 text-[#6E6E73]'>
              Updated fit for all-day comfort. A totally
              transformed audio experience. And available
              with Active Noise Cancellation — a first for
              this open-ear design.
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


          </div>
        </section>
        <section
          className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg2})` }}>
          <div className='max-w-4xl mx-auto flex flex-col items-center text-center gap-6 '>
            <h1 className='text-5xl font-bold mt-48'>AirPods 4</h1>
            <p className='text-[20px] font-bold w-96 leading-relaxed mt-14 text-[#6E6E73]'>
              Coming this fall with a free software update, the
              world’s first all-in-one hearing health experience —
              test, aid, and help protect your hearing.
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
            <h1 className='text-7xl mt-10 text-black'>AirPods Max</h1>
            <p className='text-[20px] font-bold w-96 leading-relaxed mt-14 text-[#6E6E73]'>
              Our thinnest watch with our biggest display.
              Tracking for your activity and workouts — with depth and
              Vision video. A18 Pro chip. And a huge leap in battery life.
              water temperature. All in our fastest-charging watch ever.
            </p>
            <h1 className='text-black'>Available starting 9.20</h1>
            <img className='w-96' src={airpods} alt="" />
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
      </main>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 flex flex-col ">
        <p>

          * Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as an iOS 18 update this fall. Some features and additional language will be available over the course of the next year.

          Compared with previous generation.

          The Sleep Apnea Notification Feature is pending FDA clearance and expected to be available later this month. The feature will be supported on Apple Watch Series 9 and later and Ultra 2. It is intended to detect signs of moderate to severe sleep apnea for people 18 years old or older without a diagnosis of sleep apnea.

          Charge times are from 0–80% and 0–100% using the included Apple Watch Magnetic Fast Charger to USB-C Cable. Testing conducted by Apple in August 2024 using preproduction Apple Watch Series 10 (GPS) and Apple Watch Series 10 (GPS + Cellular), each paired with an iPhone, all devices tested with prerelease software, Apple Watch Magnetic Fast Charger to USB-C Cable (Model A2515), and Apple 20W USB-C Power Adapter (Model A2305). Fast-charge testing conducted with drained Apple Watch units. Times measured from the appearance of the Apple logo as the unit started up. Charge time varies with region, settings, and environmental factors; actual results will vary.

          Based on route map and distance accuracy in challenging urban environments.

          The Hearing Test and Hearing Aid features are expected to be available fall 2024. The Hearing Aid feature is pending FDA authorization. Both features will be supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature will also be supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.

          The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. The feature is only available in the U.S. and Canada. See support.apple.com/120850 for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sounds louder than 110 dBA.

        </p>
       <div className='flex gap-16 ml-90 '>
        <nav className='flex flex-col'>
          <h6 className="footer-title">Shop and Learn</h6>
          <a className="link link-hover">Store</a>
          <a className="link link-hover">iPad</a>
          <a className="link link-hover">Watch</a>
          <a className="link link-hover">AirPods</a>
        </nav>
        <nav className='flex flex-col'>
          <h6 className="footer-title">Manage Your Apple ID</h6>
          <a className="link link-hover">Apple Store Account</a>
          <a className="link link-hover">iCloud.com</a>
          
        </nav>

            <nav className='flex flex-col'>
          <h6 className="footer-title">For Business</h6>
          <a className="link link-hover">Find a Store</a>
          <a className="link link-hover">Genius Bar</a>
          <a className="link link-hover">Today at Apple</a>
          <a className="link link-hover">Group Reservations</a>
        </nav>

            <nav className='flex flex-col'>
          <h6 className="footer-title">Apple Values</h6>
          <a className="link link-hover">Apple and Business</a>
          <a className="link link-hover">Shop for Business</a>
          <a className="link link-hover">Apple and Education</a>
          <a className="link link-hover">Shop for K-12</a>
        </nav>

            <nav className='flex flex-col'>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

         
        </div>

      </footer>
    </div>
  );
};

export default Home;