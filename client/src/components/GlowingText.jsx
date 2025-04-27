import React, { useState, useEffect } from "react";
import { LuBadgeCheck } from "react-icons/lu";
const GlowingText = ({ text = "Victor Dang" }) => {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow(true);
      setTimeout(() => setGlow(false), 500); // Glow trong 0.5s
    }, 1000); // Mỗi 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className={`flex items-center justify-center gap-3 text-[36px] font-bold  font-mono select-none cursor-pointer transition-all duration-500
        text-cyanNeon
        ${glow ? "drop-shadow-[0_0_10px_white,0_0_40px_cyan]" : ""}
        hover:text-cyan-600 hover:drop-shadow-[0_0_40px_rgba(0,255,255,0.8)]`}
      >
        <span>{text}</span>
        <LuBadgeCheck className="w-[25px] h-[25px] text-cyan-300 drop-shadow-[0_0_10px_cyan]" />
      </div>
    </div>
  );
};

export default GlowingText;
