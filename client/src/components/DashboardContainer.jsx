import React, { useState } from "react";
import StatsGrid from "./StatsGrid";
import QuickSummary from "./QuickSummary";
import { BiChart } from "react-icons/bi";
import TagHeader from "./TagHeader";
import { AiOutlineStock } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DashboardContainer() {
  const [isStatsVisible, setIsStatsVisible] = useState(true); // Trạng thái hiển thị StatsGrid

  const toggleStatsVisibility = () => {
    setIsStatsVisible(!isStatsVisible); // Đảo ngược trạng thái
  };
  return (
    <div className="p-6 hover:bg-slate-800/50 text-white h-auto rounded-lg shadow-lg border border-cyanNeon border-opacity-90">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold mb-4 flex items-center text-cyan-500">
          <BiChart className=" text-[18px] text-cyanNeon" /> Developer Metrics{" "}
        </h2>
        {/* Nút dropdown */}
        <button
          onClick={toggleStatsVisibility}
          className="flex items-center text-cyanNeon hover:text-cyanNeon"
        >
          <RiArrowDropDownLine className="text-4xl" />
        </button>
      </div>

      <div></div>
      {/* Hiển thị hoặc ẩn StatsGrid */}
      {isStatsVisible && <StatsGrid />}
      <QuickSummary />
    </div>
  );
}
