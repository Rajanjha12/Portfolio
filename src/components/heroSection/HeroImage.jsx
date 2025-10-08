import { PiHexagonThin } from "react-icons/pi";
import { useState } from "react";

const HeroImage = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D tilt
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / height) * -15; // max 15deg tilt
    const rotateY = ((x - width / 2) / width) * 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex items-center justify-center h-full w-full perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* Profile Image */}
        <img
          src="/images/me.png"
          alt="Rajan Kumar Jha"
          className="w-[220px] h-[420px] md:w-[300px] md:h-[500px] object-contain rounded-xl shadow-2xl border border-white/10 relative z-10"
        />

        {/* Glowing shadow */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-orange/30 to-cyan/30 rounded-xl -z-10"></div>
      </div>

      {/* Rotating Hexagons (Background) */}
      <div className="absolute -bottom-[20%] -z-20 flex justify-center items-center w-full h-full rotate-90">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] text-orange opacity-70 animate-spin-slow blur-sm" />
      </div>
      <div className="absolute -bottom-[20%] -z-20 flex justify-center items-center w-full h-full">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] text-cyan opacity-60 animate-spin-reverse-slow blur-sm" />
      </div>

      {/* Soft glow pulse */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-orange/20 blur-3xl rounded-full animate-pulse"></div>
    </div>
  );
};

export default HeroImage;
