"use client";
import dynamic from "next/dynamic";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <div 
        className="flex-1 bg-cover bg-center" 
        style={{ 
            backgroundImage: "url('/images/UEP-bg.png')", 
            width: '100%', 
            height: 'calc(100vh - 3.75rem)'
        }}
      >

        <p className="text-white text-shadow-lg text-5xl md:text-8xl md:text-shadow-lg font-bold text-center pt-20 md:pt-40">
            UEP ONLINE ATTENDANCE MONITORING
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      </div>
    </>
  );
};

export default LandingPage;
