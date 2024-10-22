import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon

export default function LandingPagePlaceholder() {

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Vector Logo */}
      <div className="absolute top-0 left-0 md:top-4 md:left-4">
        <img src="/fixed.svg" alt="Logo" className="h-48" />
      </div>

      <div className="absolute text-center top-[50%] left-0 w-full">
        {/* "Coming Soon" Text */}
        <h1 className="text-white  text-4xl md:text-8xl font-artisan" >Coming soon</h1>
        {/* Animated Light Line with Shadow */}
        <div className="absolute left-0 right-0 mx-auto h-[4px] mt-4 shadow-2xl line-animation 
        after:content-[''] after:absolute after:right-0 after:w-[20%] after:h-[60px] after:top-[-30px] after:bg-gradient-to-r after:from-transparent
         after:via-black after:to-black
         before:content-[''] before:absolute before:left-0 before:w-[20%] before:h-[60px] before:top-[-30px] before:bg-gradient-to-l before:from-transparent
         before:via-black before:to-black"></div>
      </div>

      <div className="flex flex-col items-center justify-between bg-black w-full h-full px-8" >
        {/* "be social" Text */}
        <div className="mt-[200px] flex w-full">
          <div className="grow"></div>

          <div className="flex flex-col text-3xl items-center">
            <h2 className="text-white font-artisan">
              be social
            </h2>
            <a
              href="mailto:youremail@example.com"
              className="text-white text-sm hover:underline"
            >
              youremail@example.com
            </a>
          </div>
        </div>

        {/* Bottom Text Block */}
        <div className="flex w-full">
          <div className="mb-16">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-white"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
          </div>
          <div className="grow"></div>
        </div>
      </div>
    </div>
  );
}
