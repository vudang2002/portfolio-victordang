import React from "react";
import { FaFire, FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import { BsTerminal } from "react-icons/bs";
import { MdFormatPaint } from "react-icons/md";
import { SiPrettier, SiJavascript, SiTailwindcss, SiGit } from "react-icons/si";
import { SiEslint } from "react-icons/si";
import { IoCode } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function MyDevelopmentEnviroment() {
  const { t } = useTranslation(); // Add translation hook

  return (
    <div className="   text-white font-mono ">
      <div
        className="max-w-4xl mx-auto border border-cyanNeon border-opacity-30 hover:border-opacity-100 rounded-xl p-6 space-y-6
      hover:bg-slate-800/30 shadow-lg backdrop-blur-none transition-all duration-300 mb-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-[14px] font-bold">
            <IoCode className="text-cyanNeon inline-block mr-2" />
            {t("development_environment")}
          </div>
          <div className=" top-4 right-6 text-cyan-300 flex items-center space-x-2">
            <FaFire className="text-orange-500" />
            <FaLaptopCode />
            <span>{t("coding_mode")}</span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* VS Code Logo */}
          <div>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGR3aW0zeDZpZ3Uyam1idjcwaGY4Zm8wY3ZxZXh5NDNjMjI3ZWRkMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SS8CV2rQdlYNLtBCiF/giphy.gif"
              alt="VS Code Logo"
              className="rounded-xl"
            />
            <div className="text-sm">
              <p>{t("vscode_description")}</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <SiEslint className="text-cyan-400" />
                  <span>
                    <strong>ESLint</strong> – {t("eslint_description")}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiPrettier className="text-cyan-400" />
                  <span>
                    <strong>Prettier</strong> – {t("prettier_description")}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiGit className="text-cyan-400" />
                  <span>
                    <strong>GitLens</strong> – {t("gitlens_description")}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiTailwindcss className="text-cyan-400" />
                  <span>
                    <strong>Tailwind CSS IntelliSense</strong> –{" "}
                    {t("tailwind_description")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="text-sm space-y-1 flex flex-col justify-between">
            <div>
              <div className="text-base font-bold">{t("settings")}</div>
              <div className="text-gray-400">
                {t("theme")}{" "}
                <span className="text-white float-right">One Dark Pro</span>
              </div>
              <div className="text-gray-400">
                {t("font")}{" "}
                <span className="text-white  float-right">JetBrains Mono</span>
              </div>
              <div className="text-gray-400">
                {t("terminal")}{" "}
                <span className="text-white float-right">iTerm2</span>
              </div>
            </div>
            <div className="bg-cyan-900/50 text-cyan-300 p-3 rounded-md text-sm">
              💡 {t("tip")}{" "}
              <kbd className="bg-cyan-800 px-1 rounded">Ctrl+Shift+P</kbd>{" "}
              {t("command_palette")}
            </div>
          </div>
        </div>

        {/* Extensions */}

        {/* Tip Box */}

        {/* Coding Mode Label */}
      </div>
    </div>
  );
}
