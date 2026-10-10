import React from "react";
import cardImg from "../assets/a3d.jpg";
import img from "../assets/022j.jpg";
import imag from "../assets/735e.jpg";

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

          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl w-full">
              
              
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
                  <h2 className="card-title text-xl font-bold">Card Title 1</h2>
                  <p>
                    A card component has a figure, a body part, and inside
                    body there are title and actions parts.
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

             
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
                  <h2 className="card-title text-xl font-bold">Card Title 3</h2>
                  <p>
                    A card component has a figure, a body part, and inside
                    body there are title and actions parts.
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Buy Now</button>
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

export default Project ;
