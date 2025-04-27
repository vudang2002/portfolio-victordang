import SkillBoard from "../SkillBoard";
import AboutSection from "./AboutSection";
import MyDevelopmentEnviroment from "./MyDevelopmentEnvironment";
import FavoriteVSCodeExtensions from "../FavoriteVSCodeExtensions";
import LifeOutsideCode from "../LifeOutsideCode";
export default function About() {
  return (
    <div className="relative rounded border-l-4 border-pinkNeon pl-2">
      <AboutSection />
      <MyDevelopmentEnviroment />
      <FavoriteVSCodeExtensions />
      <SkillBoard />
      <LifeOutsideCode />
    </div>
  );
}
