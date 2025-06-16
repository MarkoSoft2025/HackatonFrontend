"use client";
import dynamic from "next/dynamic";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/images/UEP-bg.png')", width: '100%', height: 'calc(100vh - 3.75rem)'}}>
        <div className="text-center space-y-6">
          <h1 className="text-white text-6xl md:text-8xl tracking-wide font-bold mb-25 text-shadow-lg">
            UEP ONLINE ATTENDANCE MONITORING
          </h1>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-24 md:space-x-24 md:space-y-0">
            <a
              href="/signin"
              className="bg-blue-900 hover:bg-blue-950 text-xl text-white font-bold py-4 px-6 rounded transition duration-300"
            > 
              Sign in
            </a>
            <a
              href="/signup"
              className="bg-blue-900 hover:bg-blue-950 text-xl text-white font-bold py-4 px-6 rounded transition duration-300"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="relative flex flex-col items-center w-full px-8 lg:px-40 py-12 bg-white min-h-screen">
          <div className="text-[30px] md:text-[50px] font-bold text-center text-black mt-5 leading-9 lg:leading-10">
            Online Attendance Process
          </div>

          <div className="flex justify-center bg-sky-950 text-white text-[20px] lg:text-[30px] font-semibold py-6 md:py-8 px-8 rounded-lg mt-20 w-full md:w-[100%] text-center">
            First Timers
          </div>

          <div className="mt-8 space-y-5 w-full md:w-3/4">
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">1</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">2</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">3</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">4</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">5</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
          </div>

          <div className="flex justify-center bg-sky-950 text-white text-[20px] lg:text-[30px] font-semibold py-6 md:py-8 px-8 rounded-lg mt-20 w-full md:w-[100%] text-center">
            Returning Faculty
          </div>

          <div className="mt-8 space-y-5 w-full md:w-3/4">
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">1</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">2</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
            <div className="flex items-center justify-start text-justify space-x-4 md:space-x-6">
              <div className="flex justify-center items-center w-[40px] h-[40px] text-[20px] md:w-[60px] md:h-[60px] md:text-[26px] rounded-full bg-sky-950 text-white font-extrabold">3</div>
              <div className="text-base md:text-[20px] text-black flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis ultricies orci aliquet dictum. Mauris eget mollis ipsum. Maecenas blandit semper massa, nec malesuada lacus scelerisque vel.</div>
            </div>
          </div>

          <footer className="w-full py-12 bg-white border-t border-gray-300 mt-6">
            <div className="flex flex-col lg:flex-row justify-between items-start md:items-center px-8 space-y-8 md:space-y-0">
              <div className="flex flex-col items-center w-full">
                <img alt="UEP Logo" className="w-32 h-32" src="/images/logo/UEP-Logo.png" />
                <p className="text-sky-950 font-bold text-center mt-2">
                  UNIVERSITY OF EASTERN PHILIPPINES
                </p>
              </div>
              <div className="text-center md:text-left w-full space-y-5 md:space-y-10">
                <h3 className="text-[30px] text-center font-bold text-black">
                  Contact Us
                </h3>
                <p className="text-black text-center leading-6 mt-2">
                  University Town, Northern Samar, Philippines
                  <br />
                  ✉️ uepnsofficial@gmail.com
                </p>
              </div>
              <div className="text-center w-full space-y-7">
                <h3 className="text-[30px] text-center font-bold text-black">
                  Quick Links
                </h3>
                <ul className="mt-2 text-center space-y-2 leading-4">
                  <li>
                    <a href="#" className="text-sky-950 hover:underline">Enrollment</a>
                  </li>
                  <li>
                    <a href="#" className="text-sky-950 hover:underline">Scholarships</a>
                  </li>
                  <li>
                    <a href="#" className="text-sky-950 hover:underline">Payment Portal</a>
                  </li>
                  <li>
                    <a href="#" className="text-sky-950 hover:underline">Quick Links</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
