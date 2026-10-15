
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
import phon from '../assets/phon.png'


const updates = [
  {
    category: 'UPDATE',
    title: 'Apple celebrates America’s national parks',
    date: 'August 19, 2024',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80',
  },
  {
    category: 'UPDATE',
    title:
      'Gravity Water prepares the next generation of water stewards in Vietnam',
    date: 'May 21, 2024',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80',
  },
  {
    category: 'UPDATE',
    title: 'Apple cuts greenhouse gas emissions in half',
    date: 'April 18, 2024',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=300&q=80',
  },
  {
    category: 'UPDATE',
    title:
      'Apple ramps up investment in clean energy and water around the world',
    date: 'April 17, 2024',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80',
  },
  {
    category: 'UPDATE',
    title:
      'Apple’s Restore Fund cultivates new roots in the Atlantic Forest',
    date: 'March 13, 2024',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=300&q=80',
  },
  {
    category: 'UPDATE',
    title:
      'Apple expands innovative Restore Fund with TSMC and Murata',
    date: 'March 13, 2024',
    image: {phon}
  },
]

const Contact = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white text-[#1d1d1f]">
      {/* Section 1 */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-[31px] font-bold">Apple 2030</h3>

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

      {/* The proof is in our products */}
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
            <a href="#" className="btn btn-ghost text-[14px] text-black">Mac</a>
            <a href="#" className="btn btn-ghost text-[14px] text-black">Watch</a>
            <a href="#" className="btn btn-ghost text-[14px] text-black">iPhone</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#">View all product innovations</a></li>
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
              alt="Product item"
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
              with Apple parts, tools, and manuals.
            </p>
            <a href="#" className="mt-4 text-blue-500">
              Learn more about Self Service Repair
            </a>
          </div>

          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img src={wsp} alt="Carbon emissions" className="mb-4 h-10 w-10 object-contain" />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                Charge
              </span>{' '}
              your iPhone when your local grid is cleaner.
            </p>
            <a href="#" className="mt-4 text-blue-500">
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
            <a href="#" className="mt-4 text-blue-500">
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

        {/* Product category buttons */}
        <div className="mx-auto mt-12 flex w-full max-w-[1250px] items-center gap-3 px-2">
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
        </div>

        {/* Five columns of reports */}
        <div className="mx-auto mt-10 grid w-full max-w-[1250px] grid-cols-2 gap-8 px-4 text-center sm:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col gap-3">
            <a href="#">iPhone 16 Pro and</a>
            <a href="#">iPhone 16 Pro Max</a>
            <a href="#" className="text-blue-500">View (PDF)</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">iPhone 16 and</a>
            <a href="#">iPhone 16 Plus</a>
            <a href="#" className="text-blue-500">View (PDF)</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">iPhone 15 and</a>
            <a href="#">iPhone 15 Plus</a>
            <a href="#" className="text-blue-500">View (PDF)</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">iPhone 14 and</a>
            <a href="#">iPhone 14 Plus</a>
            <a href="#" className="text-blue-500">View (PDF)</a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#">iPhone SE</a>
            <a href="#">(3rd generation)</a>
            <a href="#" className="text-blue-500">View (PDF)</a>
          </div>
        </div>

        <a
          href="#"
          className="mt-10 flex justify-center text-blue-500 underline"
        >
          View previous reports
        </a>
      </section>

      {/* Environmental Progress Report */}
      <section className="w-full px-4 py-16">
        <div className="mx-auto mt-8 flex max-w-[1100px] flex-col items-start justify-start gap-4 text-start">
          <h3 className="text-[31px] font-bold">
            An even closer look at our progress.
          </h3>

          <p className="text-[18px] text-black">
            Learn more about our latest efforts to fight climate change and support equity.
          </p>

          <a href="#" className="mt-10 text-blue-500">
            View the 2024 Environmental Progress Report (PDF)
          </a>
        </div>

        <a
          href="#"
          className="mt-10 flex justify-center text-blue-500 underline"
        >
          View previous reports
        </a>
      </section>

      {/* Additional Reports and Resources */}
      <section className="bg-white px-6 py-20 text-[#1d1d1f]">
        <div className="mx-auto max-w-[1024px]">
          <h2 className="mb-16 text-3xl font-bold tracking-tight md:text-5xl">
            Additional Reports and Resources
          </h2>

          <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
            {/* Left column */}
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="mb-3 text-[19px] font-semibold">
                  Circular Economy
                </h3>
                <p className="mb-4 text-[15px] leading-relaxed">
                  Our aim is to make products using only recycled or renewable materials — so we prioritize, responsibly source, and recover materials.
                </p>
                <ul className="flex flex-col gap-2.5 text-[15px]">
                  <li><a href="#" className="text-[#0066cc] hover:underline">Learn how we prioritize materials with our Material Impact Profiles (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read our white paper on Apple’s Paper and Packaging Strategy (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read our Responsible Fiber Specification (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read our white paper on expanding access to service and repairs (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Learn how to trade in or recycle your device ›</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Learn more about disassembly for professional recyclers ›</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[19px] font-semibold">
                  Climate Change
                </h3>
                <p className="mb-4 text-[15px] leading-relaxed">
                  Climate change is a defining issue of our time. View detailed updates on our progress.
                </p>
                <ul className="flex flex-col gap-2.5 text-[15px]">
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read Apple’s 2023 CDP Climate Change response (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read our white paper on Apple’s Carbon Removal Strategy (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read our white paper on Apple’s Product Use Electricity Strategy (PDF)</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[19px] font-semibold">
                  Frequently Asked Questions
                </h3>
                <p className="mb-4 text-[15px] leading-relaxed">
                  Find answers to common questions about Apple and the environment.
                </p>
                <ul className="flex flex-col gap-2.5 text-[15px]">
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read the FAQs ›</a></li>
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="mb-3 text-[19px] font-semibold">
                  Smarter Chemistry
                </h3>
                <p className="mb-4 text-[15px] leading-relaxed">
                  Apple has a rigorous program to ensure the safety of chemicals used in our products. Learn about Apple’s strict standards, detailed toxicological assessments, and methodology for assessing chemicals of concern.
                </p>
                <ul className="flex flex-col gap-2.5 text-[15px]">
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read the Regulated Substances Specification (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read our white paper on Integrating Toxicological Assessments in Material Selection for Apple Products (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read our Protocol for Prioritizing Chemicals of Concern in the Electronics Industry (PDF)</a></li>
                  <li><a href="#" className="text-[#0066cc] hover:underline">Read about Apple’s commitment to phasing out per- and polyfluoroalkyl substances (PFAS) (PDF)</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-[19px] font-semibold">
                  People and Environment in Our Supply Chain
                </h3>
                <p className="mb-4 text-[15px] leading-relaxed">
                  We hold ourselves and our suppliers to the highest standards of labor and human rights, health and safety in the workplace, environmental practices, and the responsible sourcing of materials.
                </p>
                <ul className="flex flex-col gap-2.5 text-[15px]">
                  <li><a href="#" className="text-[#0066cc] hover:underline">Visit the Supply Chain Innovation site ›</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More from Apple on the environment */}
      <section className="bg-white px-6 py-20 text-[#1d1d1f]">
        <div className="mx-auto max-w-[1024px]">
          <h2 className="mb-16 text-3xl font-bold tracking-tight md:text-5xl">
            More from Apple on the environment.
          </h2>

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {updates.map((item, index) => (
              <a
                key={index}
                href="#"
                className="group flex items-center gap-6 rounded-2xl"
              >
                <div className="h-[120px] w-[150px] shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:h-[130px] sm:w-[160px]">
                  {item.isAppleLogo ? (
                    <div className="flex h-full w-full items-center justify-center bg-[#f5f5f7]">
                      <span className="text-4xl">🍎</span>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80'
                      }}
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="mb-1 text-[11px] font-bold tracking-wider text-[#86868b]">
                    {item.category}
                  </span>
                  <h3 className="mb-2 text-[17px] font-semibold leading-snug text-[#1d1d1f] group-hover:underline md:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#86868b]">
                    {item.date}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-[#1d1d1f] shadow-sm transition-all hover:bg-gray-50">
              Show more
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-20 text-[#1d1d1f]">
      <div className="mx-auto max-w-[1024px]">
        
        {/* Заголовок секции */}
        <h2 className="mb-16 text-3xl font-bold tracking-tight md:text-5xl">
          Our values lead the way.
        </h2>

        {/* Контейнер с карточками и кнопками */}
        <div className="relative">
          
          {/* Сетка колонок (3 штуки) */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            
            {/* 1. Accessibility */}
            <div className="flex flex-col justify-between border-t border-gray-300 pt-8 md:border-t-0 md:border-l md:pl-8 md:pt-0 first:border-l-0 first:pl-0">
              <div>
                <h3 className="mb-3 text-[19px] font-semibold text-[#1d1d1f]">
                  Accessibility
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-[#1d1d1f]">
                  Our built-in accessibility features are designed to work the way you do.
                </p>
              </div>
              <a href="#" className="text-[15px] text-[#0066cc] hover:underline">
                Learn more ›
              </a>
            </div>

            {/* 2. Privacy */}
            <div className="flex flex-col justify-between border-t border-gray-300 pt-8 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <div>
                <h3 className="mb-3 text-[19px] font-semibold text-[#1d1d1f]">
                  Privacy
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-[#1d1d1f]">
                  We design every product and service to keep your data safe and secure.
                </p>
              </div>
              <a href="#" className="text-[15px] text-[#0066cc] hover:underline">
                Learn more ›
              </a>
            </div>

            {/* 3. Racial Equity and Justice Initiative */}
            <div className="flex flex-col justify-between border-t border-gray-300 pt-8 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <div>
                <h3 className="mb-3 text-[19px] font-semibold text-[#1d1d1f]">
                  Racial Equity and Justice Initiative
                </h3>
                <p className="mb-6 text-[15px] leading-relaxed text-[#1d1d1f]">
                  We’re addressing systemic racism by creating opportunities for communities of color.
                </p>
              </div>
              <a href="#" className="text-[15px] text-[#0066cc] hover:underline">
                Learn more ›
              </a>
            </div>

          </div>

          {/* Кнопки переключения слайдера / карусели справа внизу */}
          <div className="mt-10 flex justify-end gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] shadow-sm transition-all hover:bg-gray-200">
              ‹
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] shadow-sm transition-all hover:bg-gray-200">
              ›
            </button>
          </div>

        </div>

      </div>
    </section>
    <section className="bg-white px-6 py-12 text-[#86868b] text-[12px] leading-relaxed">
      <div className="mx-auto max-w-[1024px] space-y-4">
        
        <p>
          Apple requires our suppliers to source all materials responsibly. Learn more at <a href="#" className="text-[#0066cc] hover:underline">apple.com/supply-chain</a>[cite: 4].
        </p>

        <p>
          Apple reports data about the recycled content of its products at different levels of fidelity, based on the level of independent data verification. The bulk of Apple’s recycled content data is certified and thus verified by an independent third party. Less than 3% of the total mass shipped in Apple products in fiscal year 2023 contains recycled content that is either supplier verified, meaning it has been reported by the supplier and cross-checked by Apple, or supplier reported, meaning it has been reported by the supplier based on production and allocation values. In all cases, Apple defines recycled content in alignment with ISO 14021. We do not currently include industry-average recycled content, which may result in underreporting actual recycled content. Total recycled material shipped in products is driven by product material composition and total sales — as a result, this overall recycled or renewable content percentage may fluctuate based on the number and type of products sold each year[cite: 4].
        </p>

        <p>
          Figure is as of April 2024[cite: 4].
        </p>

        <p>
          Apple’s goal to eliminate plastic from packaging includes retail bags, all finished goods boxes (including plastic content in labels and in-box documentation), packaging sent to our customers as part of Apple Trade In, AppleCare packaging for whole units and service modules (with the exception of plastics needed to protect items from electrostatic discharge), and secondary packaging of Apple products and accessories sold by Apple. Our goal does not include the inks, coatings, or adhesives used in our packaging[cite: 4].
        </p>

        <p>
          Responsible sourcing of wood fiber is defined in <a href="#" className="text-[#0066cc] hover:underline">Apple’s Responsible Fiber Specification</a>. We consider wood fibers to include bamboo. For more information about our work to protect and create responsibly managed forests, please read our Environmental Progress Report[cite: 4].
        </p>

        <p>
          Renewable electricity refers to fossil fuel-free sources of energy, like wind, solar, and low-impact hydroelectricity projects. Clean electricity refers to both renewable electricity and other projects that Apple considers "low carbon" but not "renewable," like nuclear and large-impact hydroelectricity projects, which may be included as a result of low-carbon electricity provided by the grid[cite: 4].
        </p>

        <p>
          Apple is matching 100% of expected electricity consumption only for the aluminum Apple Watch Series 9 or Apple Watch SE paired with the Sport Loop, and for Apple Watch Ultra 2 paired with the Alpine Loop or Trail Loop. More information is available in the product environmental reports for <a href="#" className="text-[#0066cc] hover:underline">Apple Watch Series 9</a>, <a href="#" className="text-[#0066cc] hover:underline">Apple Watch SE</a>, and <a href="#" className="text-[#0066cc] hover:underline">Apple Watch Ultra 2</a>[cite: 4].
        </p>

        <p>
          Daisy can disassemble 29 iPhone models — including various models between iPhone 5 and iPhone 14 Pro[cite: 4].
        </p>

        <p>
          One metric ton of main logic boards, cameras, and flexes recovered by Daisy avoids the mining of over 2000 metric tons of rock. Estimated based on rock-to-metal ratios from the U.S. Geological Survey — a change from our previous report, which used ore-to-metal ratios — and on recovery rates from iPhone main logic boards and flexes[cite: 4].
        </p>

        <p>
          More information is available in the product environmental reports for <a href="#" className="text-[#0066cc] hover:underline">Apple Watch Series 9</a>, <a href="#" className="text-[#0066cc] hover:underline">Apple Watch SE</a>, and <a href="#" className="text-[#0066cc] hover:underline">Apple Watch Ultra 2</a>[cite: 4].
        </p>

        <p>
          Product recycled or renewable content is the mass of certified recycled material relative to the overall mass of the device, not including packaging or in-box accessories[cite: 4].
        </p>

        <p>
          Recycled cobalt in the battery uses mass balance allocation[cite: 4].
        </p>

        <p>
          Does not include iMac or Mac Pro[cite: 4].
        </p>

        <p>
          30% recycled content applies only to the Apple Watch Series 9 aluminum case paired with the Sport Loop. More information is available in the product environmental report for <a href="#" className="text-[#0066cc] hover:underline">Apple Watch Series 9</a>[cite: 4].
        </p>

        <p>
          50% of the combined weight of Apple Watch products are shipped by non-air modes of transportation, like ocean freight, from the factory to their next destination[cite: 4].
        </p>

        <p>
          100% recycled aluminum in the case applies to Apple Watch SE and Apple Watch Series 5 through Series 9. It does not include Apple Watch Ultra and Apple Watch Ultra 2[cite: 4].
        </p>

        <p>
          Clean Energy Charging is available only in the United States on iOS 16.1 or later[cite: 4].
        </p>

        <p>
          Grid Forecast is available only in the contiguous United States[cite: 4].
        </p>

        

      </div>
    </section>
    </main>
  )
}

export default Contact
