import React, { useState, useEffect, useRef } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import FocusTechCard from "./FocusTechCard";
import imgReact from "../../assets/reactjs.png";
import imgJavascript from "../../assets/logojavascript.png";
import imgTailwind from "../../assets/tailwindcss.png";
import { useTranslation } from "react-i18next";

const SLIDE_INTERVAL = 2000;

const FocusTechCarousel = () => {
  const { t } = useTranslation(); // Add translation hook

  const focusTechs = [
    {
      img: imgReact,
      title: t("focus_tech_carousel.react_title"),
      description: t("focus_tech_carousel.react_description"),
      progress: 60,
      tag: ["JavaScript", "Frontend", "React"],
    },
    {
      img: imgJavascript,
      title: t("focus_tech_carousel.javascript_title"),
      description: t("focus_tech_carousel.javascript_description"),
      progress: 70,
      tag: ["Web", "Frontend", "JavaScript"],
    },
    {
      img: imgTailwind,
      title: t("focus_tech_carousel.tailwind_title"),
      description: t("focus_tech_carousel.tailwind_description"),
      progress: 50,
      tag: ["CSS", "Frontend", "Tailwind CSS"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    startAutoSlide();

    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => startAutoSlide();

    const el = carouselRef.current;
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalRef.current);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % focusTechs.length);
    }, SLIDE_INTERVAL);
  };

  const handlePrevious = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? focusTechs.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % focusTechs.length);
    startAutoSlide();
  };

  return (
    <div
      ref={carouselRef}
      className="border border-cyanNeon border-opacity-30 rounded-lg p-4 mb-4 hover:bg-slate-800/30 shadow-lg hover:border-opacity-100 backdrop-blur-none transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          {t("focus_tech_carousel.focus_on")}{" "}
          <span className="text-cyanNeon font-mono">
            {t("focus_tech_carousel.active_learning")}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center text-2xl text-cyanNeon"
          >
            <MdNavigateBefore />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center text-2xl text-cyanNeon"
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
      <div className="transition-opacity duration-500 ease-in-out opacity-100">
        <FocusTechCard
          key={focusTechs[currentIndex].title}
          img={focusTechs[currentIndex].img}
          title={focusTechs[currentIndex].title}
          description={focusTechs[currentIndex].description}
          progress={focusTechs[currentIndex].progress}
          tag={focusTechs[currentIndex].tag}
        />
      </div>
    </div>
  );
};

export default FocusTechCarousel;
