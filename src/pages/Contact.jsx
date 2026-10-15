
import React from 'react'
import or from '../assets/or.png'
import wsp from '../assets/wsp.png'
import rep from '../assets/rep.png'
import nep from '../assets/nep.png'
import ipe from '../assets/ipe.png'
import bgs from '../assets/bgs.png'
import hands from '../assets/hands.png'
import yare from '../assets/yare.png'
import watch from '../assets/watch.png'
import bbg from '../assets/bbg.png'

const Contact = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white text-[#1d1d1f]">

      {/* Section 1 */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-[31px] font-bold">
            Apple 2030
          </h3>

          <h1 className="max-w-[672px] text-4xl font-normal md:text-[62px]">
            A plan as innovative as our products.
          </h1>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative min-h-screen overflow-hidden px-4 py-20">

        <div className="pointer-events-none absolute right-[-80px] top-[-30px] h-[370px] w-[190px] rounded-[30px] border-[6px] border-[#00d26a]" />

        <div className="pointer-events-none absolute right-[55px] top-[-80px] h-[235px] w-[55px] rounded-b-[15px] border-[4px] border-[#00d26a]" />

        <div className="pointer-events-none absolute left-[5%] top-[-20px] h-[25px] w-[100px] rounded-full border-b-[6px] border-[#00d26a]" />

        <div className="relative z-10 mx-auto flex max-w-[450px] flex-col items-center gap-6 text-center font-bold">
          <p className="text-[18px] leading-[1.25]">
            We are committed to protecting the planet.
            And designing products you love.{' '}
            <span className="relative inline-block">
              Apple 2030
              <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#00d26a]" />
            </span>{' '}
            is our plan to do both.
          </p>

          <p className="text-[18px] leading-[1.25]">
            By focusing on recycled and renewable materials,
            clean electricity, and low-carbon shipping, we’re
            working to bring our net emissions to zero across
            our entire carbon footprint.
          </p>

          <p className="text-[18px] leading-[1.25]">
            We’re sharing our progress — and the work that
            remains — so you can join us on this journey.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="relative min-h-screen overflow-hidden bg-white px-6 py-20 text-[#1d1d1f]">

        <div className="relative z-10 mx-auto max-w-[600px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.05] md:text-[48px]">
            A detailed approach.
            <br />
            From design to disassembly.
          </h2>
        </div>

        {/* Decorative product shapes */}
        <div className="pointer-events-none absolute left-[-60px] top-0 hidden md:block">
          <div className="h-[200px] w-[180px] rounded-r-[25px] bg-gradient-to-br from-slate-400 to-slate-600 shadow-2xl" />
        </div>

        <div className="pointer-events-none absolute right-[-70px] top-[250px] hidden md:block">
          <div className="h-[120px] w-[150px] rounded-full border-[18px] border-amber-400 bg-amber-100 shadow-xl" />
        </div>

        <div className="pointer-events-none absolute bottom-[180px] left-[4%] hidden md:block">
          <div className="h-[190px] w-[95px] rounded-[25px] border-2 border-gray-300 bg-lime-50 shadow-xl">
            <div className="m-3 h-10 w-10 rounded-full border-4 border-gray-400 bg-gray-200" />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[100px] right-[-30px] hidden md:block">
          <div className="h-[180px] w-[150px] rounded-tl-2xl border-l-8 border-t-8 border-gray-400 bg-stone-300 shadow-xl" />
        </div>

        {/* Circular process */}
        <div className="relative mx-auto mt-16 flex h-[320px] w-[320px] items-center justify-center md:h-[400px] md:w-[400px]">

          <div className="absolute inset-5 rounded-full border-[5px] border-dashed border-emerald-300" />

          <div className="z-10 max-w-[210px] text-center text-[17px] font-bold leading-tight md:text-[20px]">
            Design our products
            <br />
            with recycled and
            <br />
            renewable materials.
          </div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 text-center">
            <div className="text-3xl text-emerald-500">♻️</div>
            <p className="text-[11px] font-extrabold">DESIGN</p>
            <p className="text-[11px] font-extrabold">AND SOURCE</p>
          </div>

          <div className="absolute right-0 top-[38%] text-center">
            <div className="text-3xl text-emerald-400">☀️</div>
            <p className="text-[11px] font-extrabold">MAKE</p>
          </div>

          <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 text-center">
            <div className="text-3xl text-emerald-400">◎</div>
            <p className="text-[11px] font-extrabold">PACKAGE</p>
            <p className="text-[11px] font-extrabold">AND SHIP</p>
          </div>

          <div className="absolute left-0 top-[38%] text-center">
            <div className="text-3xl text-emerald-400">♻️</div>
            <p className="text-[11px] font-extrabold">RECOVER</p>
          </div>

          <div className="absolute bottom-[12%] left-[5%] text-center">
            <div className="text-3xl text-emerald-400">♣️</div>
            <p className="text-[11px] font-extrabold">USE</p>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mx-auto mt-16 grid max-w-[750px] grid-cols-1 gap-8 text-[13px] leading-relaxed md:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-extrabold text-emerald-600">
              ➜ OUR APPROACH
            </p>
            <p>
              Recycled and renewable materials often carry a lighter
              footprint than mined materials. By sourcing more recycled
              and renewable content, we can help to one day end our
              reliance on mining.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[10px] font-extrabold text-emerald-600">
              ➜ OUR PROGRESS
            </p>
            <p>
              22% of the materials we shipped in Apple products came
              from recycled and renewable sources.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="min-h-screen bg-white px-4 py-20">
        <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-600 md:text-5xl">
            Our progress by the numbers.
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-[1250px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={or} alt="Sustainability" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              We introduced our most significant product{' '}
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                emissions reductions
              </span>{' '}
              to date with the 2023 Apple Watch lineup.
            </p>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={wsp} alt="Carbon emissions" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              Over 55% reduction in{' '}
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                CO₂e emissions
              </span>{' '}
              across our carbon footprint since 2015.
            </p>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={or} alt="Clean energy" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                18.5M metric tons
              </span>{' '}
              of CO₂e emissions avoided through our Supplier Clean Energy Program in 2023.
            </p>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={or} alt="Recycled materials" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                22% of materials
              </span>{' '}
              shipped in our products came from recycled and renewable sources in 2023.
            </p>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={or} alt="Device reuse" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                12.8M devices
              </span>{' '}
              and accessories sent to new owners for reuse in 2023.
            </p>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={or} alt="Transportation emissions" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                20% reduction
              </span>{' '}
              in product transportation emissions compared to 2022.
            </p>
          </div>

        </div>
      </section>

      {/* Final Section */}
      <section className="px-4 py-20">
        <div className="mx-auto flex max-w-[800px] flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-600 md:text-5xl">
            The proof is in our products.
          </h2>
          <p className="text-[17px] leading-relaxed text-[#1d1d1f]/80">
            The same innovative thinking that goes into creating the products
            you love goes into our environmental initiatives. And as we design our
            products, we’re also using smarter chemistry to make sure they’re
            safer for everyone who assembles, uses, and recycles them.
          </p>
        </div>

        <div className="navbar mx-auto mt-8 flex w-full max-w-[1250px] flex-wrap justify-between bg-white">
          <div className="flex flex-wrap">
            <a className="btn btn-ghost text-[14px] text-black">Mac</a>
            <a className="btn btn-ghost text-[14px] text-black">Watch</a>
            <a className="btn btn-ghost text-[14px] text-black">iPhone</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>View all product innovations</a></li>
            </ul>
          </div>
        </div>

        <div className="carousel mx-auto mt-6 flex max-w-[1250px] gap-4 overflow-x-auto rounded-box">
          <div className="carousel-item">
            <img src={rep} alt="Product item" />
          </div>
          <div className="carousel-item">
            <img src={nep} alt="Product item" />
          </div>
          <div className="carousel-item">
            <img src={ipe} alt="Product item" />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowybLl9DAPkJEbH3PIUAsB36h9YCV6f_VYubC2JzJDg&s=10"
              alt="Stock item"
            />
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto mt-8 flex max-w-[1100px] flex-col items-center justify-center gap-4 text-center">
          <h3 className="max-w-[800px] text-[31px] font-bold">
            <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
              Partnerships
            </span>{' '}
            that do a world of good.
          </h3>

          <p className="w-full max-w-[737px] text-black">
            Doing right by the planet means doing right by the people who live on
            it — especially those most impacted by environmental risks. So we’re
            supporting partners and communities worldwide. Because we can
            achieve more together than we can alone.
          </p>
        </div>

        <div className="carousel mx-auto mt-12 flex w-full max-w-[1250px] overflow-x-auto">
          <div id="slide1" className="carousel-item relative w-full shrink-0">
            <img alt="Partnerships" src={bgs} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full shrink-0">
            <img alt="Partnerships" src={hands} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full shrink-0">
            <img alt="Partnerships" src={yare} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full shrink-0">
            <img alt="Partnerships" src={watch} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mother Nature */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto mt-8 flex max-w-[1100px] flex-col items-center justify-center gap-4 text-center">
          <h3 className="max-w-[800px] text-[31px] font-bold">
            Help make{' '}
            <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
              Mother Nature
            </span>{' '}
            proud
          </h3>

          <p className="w-full max-w-[600px] text-[20px] text-black">
            There are many small actions you can take to make a big
            difference for the planet.
          </p>
        </div>

        <div className="mx-auto mt-16 flex w-full max-w-[1250px] items-center justify-center">
          <img
            src={bbg}
            alt="Mother Nature background"
            className="h-auto max-w-full object-contain"
          />
        </div>

        <div className="mx-auto mt-16 grid max-w-[1250px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={or} alt="Sustainability" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              Perform your own{' '}
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                repairs
              </span>{' '}
              with Apple parts, tools,
              and manuals.
            </p>
            <a href="" className="mt-4 text-blue-500">
              Learn more about Self Service Repair
            </a>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={wsp} alt="Carbon emissions" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                Charge
              </span>{' '}
              your iPhone when your local grid
              is cleaner.
            </p>
            <a href="" className="mt-4 text-blue-500">
              Learn more about Clean Energy Charging
            </a>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={or} alt="Clean energy" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              View{' '}
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                cleaner times
              </span>{' '}
              to use electricity in your area.
            </p>
            <a href="" className="mt-4 text-blue-500">
              Learn more about Grid Forecast
            </a>
          </div>

        </div>
      </section>

      {/* Environmental Reports */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto mt-8 flex max-w-[1100px] flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-[31px] font-bold">
            Designed with the earth in mind.
          </h3>

          <p className="text-[18px] text-black">
            Learn more about the progress of your Apple devices with our product environmental reports.
          </p>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-[1250px] items-center justify-center gap-3 px-2">
          <div className="flex min-w-0 flex-1 items-center justify-start gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#00D65B] px-5 py-3 text-xs text-black">
              <span>▯</span>
              iPhone
            </button>

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#E8E8ED] px-5 py-3 text-xs text-[#1d1d1f]">
              <span>▯</span>
              iPad
            </button>

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#E8E8ED] px-5 py-3 text-xs text-[#1d1d1f]">
              <span>◉</span>
              Apple Watch
            </button>

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#E8E8ED] px-5 py-3 text-xs text-[#1d1d1f]">
              <span>▱</span>
              Laptops
            </button>

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#E8E8ED] px-5 py-3 text-xs text-[#1d1d1f]">
              <span>▣</span>
              Desktops
            </button>

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#E8E8ED] px-5 py-3 text-xs text-[#1d1d1f]">
              <span>▱</span>
              Displays
            </button>

            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#E8E8ED] px-5 py-3 text-xs text-[#1d1d1f]">
              <span>⌯</span>
              Apple Vision Pro
            </button>

          </div>

          <button
            onClick={(e) => {
              e.currentTarget.previousElementSibling.scrollBy({
                left: 200,
                behavior: 'smooth',
              })
            }}
            className="flex shrink-0 items-center justify-center border-l border-gray-200 bg-white pl-2 text-xl text-[#333]"
            aria-label="Scroll products right"
          >
            ›
          </button>

          <div className="mx-auto grid w-full max-w-[1250px] grid-cols-2 gap-8 px-4 text-center sm:grid-cols-3 lg:grid-cols-5">

            <div className="flex flex-col gap-3">
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
            </div>

            <div className="flex flex-col gap-3">
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
            </div>

            <div className="flex flex-col gap-3">
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
            </div>

            <div className="flex flex-col gap-3">
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
            </div>

            <div className="flex flex-col gap-3">
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
              <a href="">iPhone 16 Pro Max</a>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact
