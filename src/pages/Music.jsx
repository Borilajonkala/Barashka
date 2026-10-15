
import React from "react";
import Bg11 from "../assets/Background.png";
import mus from "../assets/mus.png";
import rus from "../assets/rus.png";
import uzb from "../assets/uzb.png"
import kz from "../assets/kz.png"
import kirg from "../assets/kirg.png"
import uz from "../assets/uz.png"
import win from "../assets/win.png"
const Music = () => {
  return (
    <main className="w-full">
      
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-16"
        style={{ backgroundImage: `url(${Bg11})` }}
      >
        <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-white">
          <img
            className="mt-8 w-28 object-contain transition-transform duration-500 hover:scale-110"
            src={mus}
            alt="Music icon"
          />

          <h1 className="text-center text-5xl font-bold tracking-tight md:text-7xl">
            For the love
            <br />
            of music.
          </h1>

          <p className="max-w-xl text-center text-base leading-7 text-white/90 md:text-lg">
            Play over 100 million songs, always ad-free. Hear next-level
            sound quality with Spatial Audio and lossless audio. Take
            center stage with Apple Music Sing. Access exclusive interviews
            and live concerts. And listen across all your devices, online
            or offline.
            <br />
            <span className="font-semibold">
              The music app for music lovers is here.
            </span>
          </p>

          <button className="rounded-full bg-white px-8 py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-blue-500/30">
            Try it free*
          </button>
        </div>
      </section>
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-600 hover:shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-black transition-colors duration-300 group-hover:text-white">
              Individual
            </h2>

            <p className="mb-6 leading-7 text-gray-600 transition-colors duration-300 group-hover:text-white">
              New subscribers get 3 months of Apple Music free, then pay
              $10.99 per month.
            </p>

            <h4 className="font-bold text-black transition-colors duration-300 group-hover:text-white">
              Try it free*
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </h4>
          </div>


          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-600 hover:shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-black transition-colors duration-300 group-hover:text-white">
              Student
            </h2>

            <p className="mb-6 leading-7 text-gray-600 transition-colors duration-300 group-hover:text-white">
              Enjoy your favorite songs, discover new artists, and listen
              without interruptions.
            </p>

            <h4 className="font-bold text-black transition-colors duration-300 group-hover:text-white">
              Explore plan
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </h4>
          </div>

          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-600 hover:shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-black transition-colors duration-300 group-hover:text-white">
              Family
            </h2>

            <p className="mb-6 leading-7 text-gray-600 transition-colors duration-300 group-hover:text-white">
              Share music with your family and enjoy a personalized
              listening experience on your devices.
            </p>

            <h4 className="font-bold text-black transition-colors duration-300 group-hover:text-white">
              Learn more
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </h4>
          </div>
        </div>
      </section>
      <section>
        <p></p>
      </section>
      <section className="bg-white">
        <div className="flex justify-center items-center flex-col gap-[30px]">
          <img className="w-[1260px]" src={rus} alt="" />
          <img className="w-[1260px]" src={uzb} alt="" />
          <img className="w-[1260px]" src={kirg} alt="" />
          <img className="w-[1260px]" src={uz} alt="" />
          <img className="w-[1260px]" src={kz} alt="" />
          <img className="w-[1260px]" src={win} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Music;
