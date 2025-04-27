import React from "react";
import {
  FaCode,
  FaTerminal,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaCloud,
  FaDownload,
  FaEnvelope,
  FaCoffee,
  FaMoon,
  FaLaptopCode,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";
import { TbSettingsCode } from "react-icons/tb";
import { useTranslation } from "react-i18next";

function TechStackIcons() {
  const icons = [
    <FaCode className="text-orange-400" />,
    <SiJavascript className="text-yellow-300" />,
    <FaTerminal className="text-blue-300" />,
    <FaReact className="text-cyan-400" />,
    <SiTailwindcss className="text-cyan-300" />,
    <SiVite className="text-yellow-400" />,
    <FaGitAlt className="text-orange-500" />,
    <FaDocker className="text-blue-400" />,
    <FaCloud className="text-yellow-300" />,
    <FaLaptopCode className="text-blue-300" />,
    <TbSettingsCode className="text-orange-300" />,
  ];

  return (
    <div className="border border-slate-700 rounded-xl px-4 py-2 flex justify-center gap-4 flex-wrap">
      {icons.map((Icon, idx) => (
        <span key={idx} className="text-lg">
          {Icon}
        </span>
      ))}
    </div>
  );
}

function ActionButton({ icon, label, className }) {
  return (
    <button
      className={`flex items-center gap-2 border rounded px-3 py-1 text-sm font-mono transition hover:opacity-80 ${className}`}
    >
      {icon}
      {label}
    </button>
  );
}

export default function FooterIconsAndLinks() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 text-white font-mono">
      <TechStackIcons />
      <div className="flex flex-wrap justify-center gap-4">
        <ActionButton
          icon={<FaDownload />}
          label={t("resume")}
          className="border-cyanNeon text-cyanNeon"
        />
        <ActionButton
          icon={<FaEnvelope />}
          label={t("contact_me")}
          className="border-pinkNeon text-pinkNeon"
        />
      </div>
    </div>
  );
}
