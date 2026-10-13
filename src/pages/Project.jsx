
import React from "react";
import cardImg from "../assets/a3d.jpg";
import img from "../assets/022j.jpg";
import imag from "../assets/735e.jpg";

import spot1 from "../assets/a3d.jpg";
import spot2 from "../assets/022j.jpg";
import spot3 from "../assets/735e.jpg";

const Project = () => {
  return (
    <div id="top">
      <main>
        <section className="bg-[#F5F5F7] min-h-screen py-10">

          {/* HERO */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="mt-10 bg-pink-100 text-pink-700 rounded-full px-5 py-2 text-sm font-semibold">
               Education
            </span>

            <h2 className="mt-6 text-[30px] font-bold">
              Apple and Education
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold mt-[10px] tracking-tight">
              Inspiring every
              <br />
              kind of mind.
            </h1>

            <p className="text-lg text-[#606060] mt-[25px] max-w-2xl leading-8">
              Everyone has their own way of learning and
              expressing creativity. Apple technology and resources
              empower every kind of educator — and every kind of
              student — to learn, create, and define their own
              success. Let’s move the world forward.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-7">
              <a
                href="#products"
                className="bg-black text-white px-7 py-3 rounded-full hover:bg-gray-700 transition"
              >
                Explore products →
              </a>

              <a
                href="#spotlight"
                className="border border-black px-7 py-3 rounded-full hover:bg-black hover:text-white transition"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* CARDS */}
          <div
            id="products"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-5"
          >
            <div className="card shadow-lg rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300" style={{ backgroundColor: "#F8DDED" }}>
              <figure>
                <img src={cardImg} alt="K-12 education" className="w-full h-52 object-cover" />
              </figure>
              <div className="card-body p-6 text-left">
                <h2 className="card-title text-2xl font-bold">K–12</h2>
                <p className="text-gray-700 leading-6">
                  Inspire young learners with powerful tools for every subject.
                </p>
                <a href="#buy" className="text-pink-700 font-semibold mt-4">
                  Learn more →
                </a>
              </div>
            </div>

            <div className="card shadow-lg rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300" style={{ backgroundColor: "#E5DFFF" }}>
              <figure>
                <img src={img} alt="Higher education" className="w-full h-52 object-cover" />
              </figure>
              <div className="card-body p-6 text-left">
                <h2 className="card-title text-2xl font-bold">Higher Education</h2>
                <p className="text-gray-700 leading-6">
                  Equip your campus with innovative technology.
                </p>
                <a href="#buy" className="text-indigo-700 font-semibold mt-4">
                  Learn more →
                </a>
              </div>
            </div>

            <div className="card shadow-lg rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300" style={{ backgroundColor: "#DDF5E5" }}>
              <figure>
                <img src={imag} alt="Educators" className="w-full h-52 object-cover" />
              </figure>
              <div className="card-body p-6 text-left">
                <h2 className="card-title text-2xl font-bold">Educators</h2>
                <p className="text-gray-700 leading-6">
                  Give teachers the tools to inspire and make an impact.
                </p>
                <a href="#buy" className="text-green-700 font-semibold mt-4">
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* HOW TO BUY */}
          <div id="buy" className="mt-24 w-full max-w-6xl mx-auto px-6">
            <span className="text-blue-700 bg-blue-100 rounded-full px-4 py-2 text-sm">
              Simple steps
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-12">
              How to Buy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-lg transition">
                <div className="text-4xl mb-5">🎓</div>
                <h3 className="font-bold text-lg">
                  Find the right solution for your K–12 school.
                </h3>
                <a href="#products" className="text-blue-600 text-sm font-semibold inline-block mt-4">
                  Learn more →
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-lg transition">
                <div className="text-4xl mb-5">🏫</div>
                <h3 className="font-bold text-lg">
                  Empower your campus with Apple technology.
                </h3>
                <a href="#products" className="text-blue-600 text-sm font-semibold inline-block mt-4">
                  Learn more →
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-lg transition">
                <div className="text-4xl mb-5">✨</div>
                <h3 className="font-bold text-lg">
                  Get special pricing for educators and students.
                </h3>
                <a href="https://www.apple.com/education/" className="text-blue-600 text-sm font-semibold inline-block mt-4">
                  Explore Apple Education →
                </a>
              </div>
            </div>
          </div>

          {/* SPOTLIGHT */}
          <div id="spotlight" className="mt-28 w-full max-w-6xl mx-auto px-5">
            <span className="bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm">
              Real stories
            </span>

            <h2 className="text-4xl md:text-6xl font-bold mt-5 mb-10">
              Spotlight
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:-translate-y-2 transition duration-300">
                <img src={spot1} alt="Student learning with iPad" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-pink-700 font-bold">K–12</span>
                  <h3 className="text-xl font-bold mt-2">
                    Unlocking every student’s potential. With iPad.
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-6">
                    District School Board Ontario North East uses iPad to empower its diverse student population.
                  </p>
                  <a href="https://www.apple.com/education/" className="text-blue-600 font-semibold text-sm inline-block mt-4">
                    Read the story →
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:-translate-y-2 transition duration-300">
                <img src={spot2} alt="Students learning" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-indigo-700 font-bold">EDUCATION</span>
                  <h3 className="text-xl font-bold mt-2">
                    Culturally responsive learning, powered by Apple.
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-6">
                    Discover how technology can create an inclusive learning environment for students.
                  </p>
                  <a href="https://www.apple.com/education/" className="text-blue-600 font-semibold text-sm inline-block mt-4">
                    Read the story →
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:-translate-y-2 transition duration-300">
                <img src={spot3} alt="Student using a laptop" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-green-700 font-bold">INNOVATION</span>
                  <h3 className="text-xl font-bold mt-2">
                    Workforce readiness. Start-up creativity. And Apple.
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-6">
                    Discover how technology helps students develop ideas and creative skills.
                  </p>
                  <a href="https://www.apple.com/education/" className="text-blue-600 font-semibold text-sm inline-block mt-4">
                    Read the story →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* FOOTER */}
          <footer className="w-full mt-28 bg-[#171719] text-white rounded-t-[35px] overflow-hidden">

            <div className="px-6 md:px-16 py-14 text-center border-b border-white/10">
              <span className="inline-block bg-white/10 text-pink-200 px-4 py-2 rounded-full text-sm mb-5">
                 Education
              </span>

              <h2 className="text-3xl md:text-5xl font-bold">
                Education changes everything.
              </h2>

              <p className="text-gray-400 mt-4">
                Inspiring every kind of mind.
              </p>

              <a href="#products" className="inline-block mt-7 bg-white text-black rounded-full px-7 py-3 font-semibold hover:bg-pink-200 transition">
                Explore education ↗
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6 md:px-16 py-12">

              <div>
                <h3 className="text-xl font-bold mb-4"> Education</h3>
                <p className="text-gray-400 text-sm leading-7">
                  Technology for a brighter future.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-5">Explore</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#top" className="hover:text-white transition">Home</a></li>
                  <li><a href="#products" className="hover:text-white transition">K–12 Education</a></li>
                  <li><a href="#products" className="hover:text-white transition">Higher Education</a></li>
                  <li><a href="#products" className="hover:text-white transition">For Educators</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-5">Support</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#buy" className="hover:text-white transition">How to Buy</a></li>
                  <li><a href="#spotlight" className="hover:text-white transition">Success Stories</a></li>
                  <li><a href="https://support.apple.com/" className="hover:text-white transition">Help Center ↗</a></li>
                  <li><a href="https://www.apple.com/" className="hover:text-white transition">Apple Website ↗</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-5">Stay inspired</h3>
                <p className="text-sm text-gray-400 leading-6">
                  Discover the future of learning.
                </p>

                <div className="flex gap-3 mt-5">
                  <a href="https://www.instagram.com/apple/" aria-label="Apple Instagram" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition">
                    IG
                  </a>
                  <a href="https://www.youtube.com/apple/" aria-label="Apple YouTube" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition">
                    YT
                  </a>
                  <a href="https://www.apple.com/" aria-label="Apple website" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition">
                    ↗
                  </a>
                </div>
              </div>

            </div>

            <div className="mx-6 md:mx-16 border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>Copyright © 2026 Apple Education.</p>

              <div className="flex flex-wrap justify-center gap-5">
                <a href="https://www.apple.com/legal/privacy/" className="hover:text-white transition">
                  Privacy
                </a>
                <a href="https://www.apple.com/legal/internet-services/terms/site.html" className="hover:text-white transition">
                  Terms of Use
                </a>
                <a href="https://www.apple.com/" className="hover:text-white transition">
                  Apple
                </a>
              </div>

              <p>Made for curious minds ✦</p>
            </div>

          </footer>
        </section>
      </main>
    </div>
  );
};

export default Project;
