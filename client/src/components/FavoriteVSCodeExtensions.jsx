import React from "react";
import {
  FaCode,
  FaTags,
  FaServer,
  FaMagic,
  FaStar,
  FaRegFileCode,
} from "react-icons/fa";
import { BsGithub, BsCodeSlash } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const EXTENSIONS = [
  {
    name: "One Dark Pro",
    description: "A popular dark theme for VS Code",
    icon: <FaMagic className="text-purpleNeon" />,
    nameKey: "one_dark_pro",
    descriptionKey: "one_dark_pro_description",
  },
  {
    name: "GitHub Copilot",
    description: "AI-powered code suggestions",
    icon: <BsGithub className="text-purpleNeon" />,
    nameKey: "github_copilot",
    descriptionKey: "github_copilot_description",
  },
  {
    name: "Auto-Rename Tag",
    description: "Automatically rename paired HTML tags",
    icon: <FaTags className="text-purpleNeon" />,
    nameKey: "auto_rename_tag",
    descriptionKey: "auto_rename_tag_description",
  },
  {
    name: "ESLint",
    description: "JavaScript code quality and style checker",
    icon: <FaCode className="text-purpleNeon" />,
    nameKey: "eslint",
    descriptionKey: "eslint_description",
  },
  {
    name: "Live Server",
    description: "Launch local development server with live reload",
    icon: <FaServer className="text-purpleNeon" />,
    nameKey: "live_server",
    descriptionKey: "live_server_description",
  },
  {
    name: "Prettier",
    description: "Opinionated code formatter for consistent style",
    icon: <FaRegFileCode className="text-purpleNeon" />,
    nameKey: "prettier",
    descriptionKey: "prettier_description",
  },
];

function VSCodeExtensionCard({ nameKey, descriptionKey, icon }) {
  const { t } = useTranslation();

  return (
    <div
      className="border border-purpleNeon rounded-xl p-4 hover:bg-slate-800/30 border-opacity-30 
    hover:border-opacity-100 transition-all font-mono"
    >
      <div className="flex items-center gap-2 font-semibold text-white  ">
        {icon}
        <span className="text-neutral-200 text-[14px]">{t(nameKey)}</span>
      </div>
      <div className="text-sm text-gray-400 text-[12px]">
        {t(descriptionKey)}
      </div>
    </div>
  );
}

export default function VSCodeExtensionsSection() {
  const { t } = useTranslation();

  return (
    <div className="text-white font-mono">
      <div
        className="max-w-4xl mx-auto border border-purpleNeon border-opacity-30 hover:border-opacity-100 rounded-xl p-6 space-y-6
      hover:bg-slate-800/30 shadow-lg backdrop-blur-none transition-all duration-300 mb-4"
      >
        <div className="text-[14px] font-bold flex items-center gap-2 ">
          <FaStar className="text-purpleNeon" />
          <span>{t("favorite_vscode_extensions")}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {EXTENSIONS.map((ext, idx) => (
            <VSCodeExtensionCard key={idx} {...ext} />
          ))}
        </div>
      </div>
    </div>
  );
}
