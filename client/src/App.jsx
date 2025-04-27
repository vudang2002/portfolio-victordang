import About from "./components/About/About";
import FooterBar from "./components/FooterBar";
import FooterIconsAndLinks from "./components/FooterIconsAndLinks";
import GradientDivider from "./components/GradientDivider";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";

function App() {
  return (
    <div className="flex h-screen w-screen items-start justify-center font-mono">
      <div className="fixed h-full w-full bg-[#0f172a] flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        {/* Add your content here */}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <Header />
        <GradientDivider />
        <About />
        <ProfileSection />
        <GradientDivider />
        <FooterIconsAndLinks />
        <FooterBar />
      </div>
    </div>
  );
}

export default App;
