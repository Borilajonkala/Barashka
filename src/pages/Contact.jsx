
import React from 'react'
import or from '../assets/or.png'

const Contact = () => {
  return (
    <main className="min-h-screen bg-white text-[#1d1d1f]">

      {/* Section 1 */}
      <section className="flex min-h-screen flex-col items-center bg-white p-8">
        <div className="mt-[100px] flex flex-col items-center justify-center gap-4 text-center">
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

        <div className="mt-[100px] flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold text-emerald-600 md:text-5xl">
            Our progress by the numbers.
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-[1250px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img
              src={or}
              alt="Sustainability"
              className="mb-4 h-10 w-10 object-contain"
            />
            <p className="text-[20px] font-bold leading-[1.2]">
              We introduced our most significant product{' '}
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                emissions reductions
              </span>{' '}
              to date with the 2023 Apple Watch lineup.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img
              src={or}
              alt="Carbon emissions"
              className="mb-4 h-10 w-10 object-contain"
            />
            <p className="text-[20px] font-bold leading-[1.2]">
              Over 55% reduction in{' '}
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                CO₂e emissions
              </span>{' '}
              across our carbon footprint since 2015.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img
              src={or}
              alt="Clean energy"
              className="mb-4 h-10 w-10 object-contain"
            />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                18.5M metric tons
              </span>{' '}
              of CO₂e emissions avoided through our Supplier Clean Energy Program in 2023.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img
              src={or}
              alt="Recycled materials"
              className="mb-4 h-10 w-10 object-contain"
            />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                22% of materials
              </span>{' '}
              shipped in our products came from recycled and renewable sources in 2023.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img
              src={or}
              alt="Device reuse"
              className="mb-4 h-10 w-10 object-contain"
            />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                12.8M devices
              </span>{' '}
              and accessories sent to new owners for reuse in 2023.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex min-h-[240px] flex-col items-start rounded-[22px] p-6 transition-all duration-300 hover:-translate-y-1">
            <img
              src={or}
              alt="Transportation emissions"
              className="mb-4 h-10 w-10 object-contain"
            />
            <p className="text-[20px] font-bold leading-[1.2]">
              <span className="underline decoration-[#00D26A] decoration-[3px] underline-offset-2">
                20% reduction
              </span>{' '}
              in product transportation emissions compared to 2022.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact
