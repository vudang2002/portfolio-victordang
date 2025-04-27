import React from "react";
import {
  FaGlobeAsia,
  FaRegHeart,
  FaCopyright,
  FaArrowUp,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export default function FooterBar() {
  const { t } = useTranslation(); // Add translation hook

  return (
    <div className="mt-10 text-white font-mono text-xs space-y-3 text-center">
      {/* Info Row */}
      <div className="flex flex-wrap justify-center items-center gap-2 text-cyan-300">
        <span className="inline-flex items-center gap-1">
          <FaCopyright /> {new Date().getFullYear()}
        </span>
        <span className="font-semibold">victordang</span>
        <span className="border border-cyan-400 rounded-full px-2 py-0.5 flex items-center gap-1">
          <FaGlobeAsia /> With love <FaRegHeart className="text-pink-400" />
        </span>
        <span className="border border-cyan-400 rounded-full px-2 py-0.5 flex items-center gap-1">
          <MdLocationOn /> {t("vietnam")}
        </span>
        <span className="border border-cyan-400 rounded-full px-2 py-0.5 flex items-center gap-1">
          <LuClock />{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
      {/* Nav Links */}
      <div className="flex justify-center gap-4 text-gray-400">
        <a href="#" className="hover:text-white">
          {t("footer.privacy")}
        </a>
        <span>•</span>
        <a href="#" className="hover:text-white">
          {t("footer.terms")}
        </a>
      </div>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="border border-slate-600 text-xs text-gray-300 rounded px-3 py-1 hover:bg-slate-700"
      >
        {t("footer.back_to_top")} <FaArrowUp className="inline ml-1" />
      </button>
    </div>
  );
}
