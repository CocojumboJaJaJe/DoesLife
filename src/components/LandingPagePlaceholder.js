import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from '../fixed.svg';

export default function LandingPagePlaceholder() {
  const textRef = useRef(null);
  const [shadowStyle, setShadowStyle] = useState({});

  useEffect(() => {
    function handleMouseMove(e) {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const textCenterX = rect.left + rect.width / 2;
      const textCenterY = rect.top - 10;

      const offsetX = e.clientX - textCenterX;
      const offsetY = e.clientY - textCenterY;

      const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
      const maxDistance = Math.sqrt(
        window.innerWidth ** 2 + window.innerHeight ** 2
      );

      // Normalize distance to range [0,1]
      const normalizedDistance = Math.min(distance / maxDistance, 1);

      // Calculate shadow offset and blur
      let shadowOffsetX = -(offsetX) / 100; // Adjust multiplier as needed
      const shadowOffsetY = -(offsetY) / 100;
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
        <Logo className="h-[80px] w-[180px] md:h-[100px] md:w-[240px]" />
      </div>

      <div className="absolute text-center top-[45%] left-0 w-full">
        {/* "Coming Soon" Text */}
        {/* <h1
          className="text-white text-lg font-artisan"
          ref={textRef}
          style={shadowStyle}
        >
          Coming soon
        </h1> */}
        {/* Animated Light Line with Shadow */}
        <div
          className="absolute left-0 right-0 mx-auto h-[4px] mt-6 md:mt-8 shadow-2xl line-animation rotate-[-45deg] md:rotate-[-30deg]
            after:content-[''] after:absolute after:right-[-20px] after:w-[20%] after:h-[60px] after:top-[-30px] after:bg-gradient-to-r after:from-transparent
             after:via-black after:to-black
             before:content-[''] before:absolute before:left-[-20px] before:w-[20%] before:h-[60px] before:top-[-30px] before:bg-gradient-to-l before:from-transparent
             before:via-black before:to-black"
        ></div>
      </div>

      <div className="flex items-center justify-center bg-black w-full h-full px-8">
        {/* "be social" Text */}
        <div className="mb-64 w-[50%] flex items-center justify-center">
          {/* <div className="grow"></div> */}
          <a
            href="mailto:youremail@example.com"
            className="text-white font-artisan text-lg hover:underline"
          >
            connect with us
          </a>
        </div>
        {/* Bottom Text Block */}
        <div className="mt-64 flex w-[50%] items-center justify-center">
          <a
            href="https://instagram.com/@doeslifeordoesnt"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-white font-artisan text-lg hover:underline"
          >
            be social
          </a>
          {/* <div className="grow"></div> */}
        </div>
      </div>
    </div>
  );
}
