import React from "react";
import cardImg from "../assets/a3d.jpg";
import img from "../assets/022j.jpg";
import imag from "../assets/735e.jpg";

// Spotlight rasmlari uchun (agar kerak bo'lsa o'zingizning rasm importlaringizga almashtirasiz)
import spot1 from "../assets/a3d.jpg";
import spot2 from "../assets/022j.jpg";
import spot3 from "../assets/735e.jpg";

const Project = () => {
  return (
    <div>
      <main>
        <section className="bg-[#F5F5F7] min-h-screen py-10">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <h2 className="mt-20 text-[30px] font-bold">
              Apple and Education
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold mt-[10px]">
              Inspiring every <br />
              kind of mind.
            </h1>

            <p className="text-lg text-[#606060] font-bold mt-[25px]">
              Everyone has their own way of learning and <br />
              expressing creativity. Apple technology and resources <br />
              empower every kind of educator — and every kind of <br />
              student — to learn, create, and define their own <br />
              success. Let’s move the world forward.
            </p>
          
            {/* 3 ta karta qismi */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl w-full">
              
              {/* 1-Karta */}
              <div
                className="card shadow-sm rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#E9BFDE" }}
              >
                <figure>
                  <img
                    src={cardImg}
                    alt="Apple education 1"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-5 text-left">
                  <h2 className="card-title text-xl font-bold">Ka - 12</h2>
                  <p>
                    A card component has a figure, a body part, and inside
                    body there are title and actions parts.
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              {/* 2-Karta */}
              <div
                className="card shadow-sm rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#E9BFDE" }}
              >
                <figure>
                  <img
                    src={img}
                    alt="Apple education 2"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-5 text-left">
                  <h2 className="card-title text-xl font-bold">Card Title 2</h2>
                  <p>
                    A card component has a figure, a body part, and inside
                    body there are title and actions parts.
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              {/* 3-Karta */}
              <div
                className="card shadow-sm rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#E9BFDE" }}
              >
                <figure>
                  <img
                    src={imag}
                    alt="Apple education 3"
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-5 text-left">
                  <h2 className="card-title text-xl font-bold">Collage Students</h2>
                  <p>
                    A card component has a figure, a body part, and inside
                    body there are title and actions parts.
                  </p>
                  <div className="card-actions justify-end mt-4"></div>
                </div>
              </div>

            </div>

            {/* --- HOW TO BUY QISMI --- */}
            <div className="mt-24 w-full max-w-5xl px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-12">How to Buy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                  <h3 className="font-bold text-base md:text-lg">Find the right solution for your K–12 school.</h3>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-semibold inline-block mt-2">Learn more &gt;</a>
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Empower your campus with Apple technology.</h3>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-semibold inline-block mt-2">Learn more &gt;</a>
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Get special pricing for educators and students.</h3>
                  <a href="#" className="text-blue-600 hover:underline text-sm font-semibold inline-block mt-2">Save on Mac and iPad &gt;</a>
                </div>
              </div>
            </div>

            {/* --- SPOTLIGHT QISMI --- */}
            <div className="mt-32 w-full max-w-5xl px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-12">Spotlight</h2>
              
              <div className="flex flex-col gap-10">
                
                {/* Spotlight Card 1 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 h-64 md:h-80">
                    <img src={spot1} alt="Spotlight 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold">Unlocking every student’s potential. With iPad.</h3>
                    <p className="text-sm text-[#606060] mt-3">District School Board Ontario North East uses iPad to empower its diverse student population.</p>
                    <a href="#" className="text-blue-600 hover:underline font-semibold mt-4 inline-block">Read the story &gt;</a>
                  </div>
                </div>

                {/* Spotlight Card 2 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 h-64 md:h-80">
                    <img src={spot2} alt="Spotlight 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold">Culturally responsive learning, powered by Apple.</h3>
                    <p className="text-sm text-[#606060] mt-3">Discover how Rotorua Boys’ High School in New Zealand is creating an inclusive learning environment for all students.</p>
                    <a href="#" className="text-blue-600 hover:underline font-semibold mt-4 inline-block">Read the story &gt;</a>
                  </div>
                </div>

                {/* Spotlight Card 3 */}
                <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 h-64 md:h-80">
                    <img src={spot3} alt="Spotlight 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold">Workforce readiness. Start-up creativity. And Apple.</h3>
                    <p className="text-sm text-[#606060] mt-3">Learn how Apple technology is powering San Diego State University’s innovative incubator program, ZIP Launchpad, and how students are shaping the benefits.</p>
                    <a href="#" className="text-blue-600 hover:underline font-semibold mt-4 inline-block">Read the story &gt;</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Project;