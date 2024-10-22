import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon
import { ReactComponent as Logo } from '../fixed.svg';

export default function LandingPagePlaceholder() {
  const textRef = useRef(null);
  const [shadowStyle, setShadowStyle] = useState({});

  useEffect(() => {
    function handleMouseMove(e) {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const textCenterX = rect.left + rect.width / 2;
      const textCenterY = rect.top + rect.height / 2;

      const offsetX = e.clientX - textCenterX;
      const offsetY = e.clientY - textCenterY;

      const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
      const maxDistance = Math.sqrt(
        window.innerWidth ** 2 + window.innerHeight ** 2
      );

      // Normalize distance to range [0,1]
      const normalizedDistance = Math.min(distance / maxDistance, 1);

      // Calculate shadow offset and blur
      let shadowOffsetX = (offsetX / rect.width) * 10; // Adjust multiplier as needed
      if(shadowOffsetX<0){
        shadowOffsetX = 0
      }
      const shadowOffsetY = (offsetY / rect.height) * 1;
      const blurRadius = normalizedDistance * 30; // Max blur 20px, adjust as needed

      const newShadowStyle = {
        textShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${blurRadius}px rgba(255,255,255,0.8)`,
      };

      setShadowStyle(newShadowStyle);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Vector Logo */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 ">
        <Logo className="h-[150px] w-[340px]" />
      </div>

      <div className="absolute text-center top-[50%] left-0 w-full">
        {/* "Coming Soon" Text */}
        <h1
          className="text-white text-6xl md:text-8xl font-artisan"
          ref={textRef}
          style={shadowStyle}
        >
          Coming soon
        </h1>
        {/* Animated Light Line with Shadow */}
        <div
          className="absolute left-0 right-0 mx-auto h-[4px] mt-8 md:mt-14 shadow-2xl line-animation 
            after:content-[''] after:absolute after:right-0 after:w-[20%] after:h-[60px] after:top-[-30px] after:bg-gradient-to-r after:from-transparent
             after:via-black after:to-black
             before:content-[''] before:absolute before:left-0 before:w-[20%] before:h-[60px] before:top-[-30px] before:bg-gradient-to-l before:from-transparent
             before:via-black before:to-black"
        ></div>
      </div>

      <div className="flex flex-col items-center justify-between bg-black w-full h-full px-8">
        {/* "be social" Text */}
        <div className="mt-[188px] md:mt-[100px] flex w-full">
          <div className="grow"></div>
          <div className="flex flex-col text-3xl items-center">
            <h2 className="text-white font-artisan">be social</h2>
            <a
              href="mailto:youremail@example.com"
              className="text-white text-sm hover:underline"
            >
              reach@doeslife.com
            </a>
          </div>
        </div>

        {/* Bottom Text Block */}
        <div className="flex w-full">
          <div className="mb-16">
            <a
              href="https://instagram.com/@doeslifeordoesnt"
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
