import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TypingText = () => {
  const { t } = useTranslation();
  const texts = [
    t("hello"),
    t("welcome"),
    t("learning_react"),
    t("programming_passion"),
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setTextIndex((textIndex + 1) % texts.length);
        setDisplayedText("");
        setCharIndex(0);
      }, 1500);
      return () => clearTimeout(delay);
    }
  }, [charIndex, textIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-[12px] font-bold text-center text-neutral-500"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block"
      >
        |
      </motion.span>
    </motion.div>
  );
};

export default TypingText;
