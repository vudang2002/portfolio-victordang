import React from "react";

export default function GradientDivider() {
  return (
    <div className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-10">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-md shadow-cyan-500/50" />
      </div>
    </div>
  );
}
