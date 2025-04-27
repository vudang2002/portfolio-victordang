import React from "react";
import {
  FaCamera,
  FaMusic,
  FaPencilRuler,
  FaHiking,
  FaSwimmer,
  FaBicycle,
  FaBrain,
  FaBook,
  FaAtom,
  FaCoffee,
  FaGamepad,
  FaSpa,
} from "react-icons/fa";
import {
  GiBookCover,
  GiConsoleController,
  GiMusicalNotes,
  GiTvRemote,
} from "react-icons/gi";
import { GiJusticeStar } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const activities = [
  {
    title: "creative_activities",
    icon: (
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3lwaWU5aTU3cTF2aHM1Z3VzZWFtcTVzM3Z6ejlkd2NlbWd3M3lsNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhAwk4DnqNgw8/giphy.gif"
        className="w-10 h-10 rounded-xl"
      />
    ),
    items: [
      { icon: <FaCamera />, label: "digital_photography" },
      { icon: <FaMusic />, label: "music_production" },
      { icon: <FaPencilRuler />, label: "ui_ux_design" },
    ],
  },
  {
    title: "physical_activities",
    icon: (
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGhzbWxieDFrOHNmMDZseHA0OXJzMmMxcTk1MW10bThraWNhNGRiMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lOqNS2HUyN8OJV0CuF/giphy.gif"
        className="w-10 h-10 rounded-xl"
      />
    ),
    items: [
      { icon: <FaHiking />, label: "gym" },
      { icon: <FaSwimmer />, label: "swimming" },
      { icon: <FaBicycle />, label: "cycling" },
    ],
  },
  {
    title: "intellectual_hobbies",
    icon: (
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWY0eGRoeHdjeWJ6cDM4eWxtYzMwcTl4djBybHozd3F0OXZpZHkyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/32dfpYx8kBX1bXSEu8/giphy.gif"
        className="w-10 h-10 rounded-xl"
      />
    ),
    items: [
      { icon: <FaBook />, label: "science_fiction" },
      { icon: <FaAtom />, label: "chess" },
      { icon: <FaBrain />, label: "technology_trends" },
    ],
  },
  {
    title: "relaxation",
    icon: (
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWN0NHhhNmhsMTczYWt4OXhzbzJkNHEzcTM1dGF5NGR3OGZmbWo2NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qJzZ4APiDZQuJDY7vh/giphy.gif"
        className="w-10 h-10 rounded-xl"
      />
    ),
    items: [
      { icon: <FaCoffee />, label: "coffee_exploration" },
      { icon: <FaGamepad />, label: "gaming" },
      { icon: <FaSpa />, label: "listening_to_music" },
    ],
  },
];

export default function LifeOutsideCode() {
  const { t } = useTranslation();

  return (
    <div className=" text-white font-mono mb-4 ">
      <div
        className="max-w-6xl mx-auto border border-cyanNeon border-opacity-30 hover:border-opacity-100 
      rounded-xl p-6 space-y-6 hover:bg-slate-800/50 transition-all"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="text-[16px] font-bold flex items-center gap-2 mb-4 ">
            <GiJusticeStar className="text-cyanNeon t" />
            <span>{t("life_outside_code")}</span>
          </div>
          <div className="text-[12px] font-bold flex items-center gap-2 mb-4 rounded-full bg-cyan-800/50 text-cyanNeon px-2">
            <IoPersonOutline className="text-cyanNeon" />
            <span>{t("life_outside_programming_role")}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-6">
            {activities.map((group, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 font-semibold text-white mb-2 text-[14px]">
                  {group.icon}
                  <span>{t(group.title)}</span>
                </div>
                <div className="space-y-2 ml-6 text-[12px] text-gray-300">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[12px]"
                    >
                      <span className="text-cyan-400 rounded-2xl bg-cyan-800/50 p-1">
                        {item.icon}
                      </span>
                      <span>{t(item.label)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Enjoying Now */}
            <div className="space-y-4">
              <div className="text-lg font-semibold text-white-300">
                {t("enjoying_now")}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    <img
                      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXk5cnJ3YjBhZmhpeGI1ZXh2cTB2aDc4NGVod2swc2MxanhvYnB4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FrqU6wyZWRUQqpISRt/giphy.gif"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-[16px]">{t("reading")}</span>
                  </div>
                  <div>Harry Potter</div>
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    <img
                      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjR4dG5lOHZxcnl3dHl5M2YyZW9wam93azJjenpoYnBrZjl4dnc1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Sb7WSbjHFNIL6/giphy.gif"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-[16px]">{t("watching")}</span>
                  </div>
                  <div>The Expanse</div>
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    <img
                      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXU1OTQ1NzBkdXJnYWdheDFqMGY4dnF2YmlmejJzejFmYXNmMWxmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tA6sa3auhw5yKJLLy5/giphy.gif"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-[16px]">{t("playing")}</span>
                  </div>
                  <div>Cầu Lông </div>
                </div>
                <div>
                  <div className="font-semibold flex items-center gap-2">
                    <img
                      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDFtdjFtYnFidGs5bmtkZGs3bWc3emZ4MzlndWR3cDJxZzA0MTFlZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XZfc32rGwWllfn4FIB/giphy.gif"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-[16px]">
                      {t("listening_to_music")}
                    </span>
                  </div>
                  <div>The Night - Avicii</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
