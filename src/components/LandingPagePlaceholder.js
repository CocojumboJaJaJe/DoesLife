import React, { useState, useEffect, useRef } from 'react';

export default function LandingPagePlaceholder() {
  const textRef = useRef(null);
  const [shadowStyle, setShadowStyle] = useState({textShadow: '2px 1px 5px black'});

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
        textShadow: `${shadowOffsetX + 1}px ${shadowOffsetY + 1}px ${blurRadius + 5}px black `,
      };

      setShadowStyle(newShadowStyle);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-[rgb(233,234,236)] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 w-full flex pt-8 pr-4 md:pr-64">
        <div className="grow"></div>
        <div className="flex space-x-8 md:space-x-16 text-black">
          <a
            href="https://instagram.com/@doeslifeordoesnt"
            target="_blank"
            rel="noreferrer"
            className="text-black font-inter hover:underline" style={{ fontVariationSettings: '"wght" 572' }}>
            [FOLLOW]
          </a>
          <a
            href="mailto:reach@doeslife.com"
            className="text-black font-inter hover:underline" style={{ fontVariationSettings: '"wght" 572' }}>
            [INQUIRIES]
          </a>
        </div>
      </div>

      <div className="z-1 relative left-[-25px] md:left-[-100px] ">
        <div className="absolute bottom-[-90px] left-[180px] md:left-[-180px] md:top-[80px]">
          <p className="text-black font-inter" style={{ fontVariationSettings: '"wght" 572' }}>
            [A HOME FOR INTIMACY]
          </p>
        </div>

        <div className="relative scale-[0.4] sm:scale-[0.6] md:scale-100" >
          <h2 className="pl-[245px] text-[150px] font-inter text-black tracking-[-6px] leading-[117px] text-start" style={{ fontVariationSettings: '"wght" 572' }}>
            DOES
            <br />
            LIFE
          </h2>
          <h2 className="pl-[27px] text-[150px] font-inter text-black tracking-[-6px] leading-[117px] text-start" style={{ fontVariationSettings: '"wght" 572' }}>
            DOES
          </h2>
          <h2 className="text-[150px] font-inter text-black tracking-[-6px] leading-[117px] text-start" style={{ fontVariationSettings: '"wght" 572' }}>
            LIFE
          </h2>
        </div>
        <div
          className="z-2 absolute right-[-10px] bottom-[-20px] md:right-[-200px] md:bottom-[-50px] scale-[0.45] sm:scale-[0.6] md:scale-100"
          ref={textRef}>
          <div className="relative">
            <p className="text-[210px] font-pinyon text-[rgb(233,234,236)] leading-[180px] text-center" style={{ fontVariationSettings: '"wght" 572' }}>
              <span style={shadowStyle}>
                coming
              </span>
              <br />
            </p>
            <p className="text-[210px] font-pinyon text-[rgb(233,234,236)] leading-[180px] text-center" style={{ fontVariationSettings: '"wght" 572' }}>
              <span style={shadowStyle}>
                soon
              </span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
