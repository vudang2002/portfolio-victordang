import React from "react";
import TagBadgeList from "./TagBadgeList";
import { GoPerson } from "react-icons/go";
import ContactModal from "../ContactModal";
import { useState } from "react";
import FocusTechCarousel from "./FocusTechCarousel";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation(); // Add translation hook

  const [open, setOpen] = useState(false);
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return t("about.morning_greeting");
    } else if (currentHour >= 12 && currentHour < 18) {
      return t("about.afternoon_greeting");
    } else if (currentHour >= 18 && currentHour < 22) {
      return t("about.evening_greeting");
    } else {
      return t("about.night_greeting");
    }
  };

  return (
    <div className=" rounded-lg  text-white">
      <div className="flex items-start justify-start mr-4 mb-4">
        <GoPerson className="text-pinkNeon text-4xl mb-2" />
        <h2 className="text-pinkNeon  text-3xl  font-mono mb-2">
          {t("about.title")}
        </h2>
      </div>
      <div
        className="border border-pinkNeon border-opacity-30 rounded-lg hover:border-opacity-100 p-4 mb-4 hover:bg-slate-800/30 
      shadow-lg  backdrop-blur-none transition-all duration-300"
      >
        <div className="text-lg font-mono text-cyan-400 mb-4">
          {getGreeting()}
        </div>
        <p className="text-sm text-gray-300 font-mono leading-relaxed">
          {t("about.description")}
          <a
            className="text-cyanNeon  hover:border-b-2  hover:border-cyanNeon"
            onClick={() => setOpen(true)}
          >
            {t("about.contact_me")}
          </a>
          <ContactModal isOpen={open} onClose={() => setOpen(false)} />
        </p>
      </div>
      <div className="border border-greenNeon border-opacity-30 rounded-lg p-4 mb-4 hover:bg-slate-800/30 shadow-lg hover:border-opacity-100 backdrop-blur-none transition-all duration-300">
        <p className=" text-sm text-gray-300 font-mono ">
          {t("about.learning")}
        </p>
      </div>
      <FocusTechCarousel />
    </div>
  );
}
