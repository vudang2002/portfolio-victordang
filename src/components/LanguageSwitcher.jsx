import React, { useState } from "react";
import i18n from "../i18n";

const LanguageSwitcher = () => {
  const [activeLanguage, setActiveLanguage] = useState(i18n.language || "en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };

  return (
    <div className="language-switcher flex items-center text-[16px] font-mono">
      <button
        onClick={() => changeLanguage("en")}
        className={`btn ${
          activeLanguage === "en" ? "text-white" : "text-gray-400"
        }`}
      >
        English
      </button>
      <span className=" text-gray-500">|</span> {/* Thêm dấu phân cách */}
      <button
        onClick={() => changeLanguage("vi")}
        className={`btn ${
          activeLanguage === "vi" ? "text-white" : "text-gray-400"
        }`}
      >
        Tiếng Việt
      </button>
    </div>
  );
};

export default LanguageSwitcher;
