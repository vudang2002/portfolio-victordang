import GlowingText from "./GlowingText";
import TagHeader from "./TagHeader";
import TypingText from "./TypingText";
import { IoCodeSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { IoLanguageSharp } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import DashboardContainer from "./DashboardContainer";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation(); // Add translation hook

  return (
    <div className="flex flex-col items-start justify-start h-full w-full">
      <div className="flex items-center justify-between space-x-4 w-full ">
        <GlowingText text="Victor Dang" />
        <div className="flex items-center gap-2 text-cyan-300">
          <LanguageSwitcher />
        </div>
      </div>
      <div>
        <TypingText />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2  mt-2">
        <TagHeader
          icon={<IoCodeSharp />}
          text={t("frontend_developer")}
          color="cyan"
          backgroundColor={"#142C3D"}
        />
        <TagHeader
          icon={<SiGooglemaps />}
          text={t("vietnam")}
          color="pink"
          backgroundColor={"#2D1A30"}
        />
        <TagHeader
          icon={<IoLanguageSharp />}
          text="VI/EN"
          color="purple"
          backgroundColor={"#211F3B"}
        />
        <TagHeader
          icon={<CiCircleCheck />}
          text={t("available_for_hire")}
          color="green"
          backgroundColor={"#142630"}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4 ">
        <FaFacebook className="text-blue-700 text-[28px] hover:scale-125 transition-transform duration-300" />
        <FaGithub className="text-neutral-100 text-[28px] hover:scale-125 transition-transform duration-300" />
        <FaLinkedin className="text-[#0A66C2] text-[28px] hover:scale-125 transition-transform duration-300" />
        <FaInstagram className="text-[#E3425F] text-[28px] hover:scale-125 transition-transform duration-300" />
        <FaTwitter className="text-[#1EA1F2] text-[28px] hover:scale-125 transition-transform duration-300" />
        <SiGmail className="text-red-600 text-[28px] hover:scale-125 transition-transform duration-300" />
      </div>
      <div className="pt-6 w-full flex items-center justify-center">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Header;
