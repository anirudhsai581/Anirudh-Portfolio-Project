import { useState } from "react";
import Canvas from "./components/Canvas";
import GlassButton from "./components/GlassButton";
import Header from "./header";
import Middle from "./Middle";
import AboutModal from "./components/AboutModal";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight, // scrolls exactly 1 viewport height
      behavior: "smooth", // adds smooth scroll animation
    });
  };
  return (
    <div className="flex flex-col justify-between h-screen font-['Nunito']">
      <Header />
      <Canvas />

      <Middle onShowAbout={() => setShowAbout(true)} />
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      <div className="self-center relative after:content-[''] after:absolute after:w-0.5 after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[80px]">
        <GlassButton
          onClick={handleScrollToNext}
          className=" mb-16 "
          direction="down"
          text="Latest Works"
        />
        {/*   <button>Lastest Works</button> */}
      </div>
    </div>
  );
};

export default Home;
