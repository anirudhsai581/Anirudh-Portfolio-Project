import Linkedin from "./assets/linkedin.svg?react";
import Twitter from "./assets/twitter-x.svg?react";
import Gmail from "./assets/email.svg?react";
import Github from "./assets/github.svg?react";
import GlassButton from "./components/GlassButton";
import HomeHero from "./HomeHero";
import TUF from "./assets/tuf.svg?react";

const Middle = ({ onShowAbout }) => {
  return (
    <div className="flex -mt-10 relative pointer-events-none">
      <div className="w-full px-4 max-w-screen-xl mx-auto">
        <div className="relative ml-4 md:ml-8">
          {/* <h1 className="text-5xl md:text-[64px] font-['Spartan'] mb-6 mr-12 ">
            Hello! I'm Anirudh
            <br />
            <span className="text-2xl  md:text-4xl  text-shadow-amber-700 italic ">
              Frontend Developer
            </span>
          </h1> */}
          <HomeHero />
          <GlassButton
            text="About Me"
            onClick={onShowAbout}
            className="pointer-events-auto mt-12"
          />
        </div>
      </div>

      <ul className="pointer-events-auto   ml-auto  space-y-6 text-[#b0b2c3] absolute right-8">
        <li>
          <a
            href="https://www.linkedin.com/in/anirudh-sai-chava-66b399245/"
            target="_blank"
          >
            <Linkedin className="w-7 hover:text-white hover:scale-105" />
          </a>
        </li>
        <li>
          <a href="https://github.com/anirudhsai581" target="_blank">
            <Github className="w-7 hover:text-white hover:scale-105" />
          </a>
        </li>
        <li>
          <a
            href="https://takeuforward.org/plus/profile/AnirudhSai581"
            target="_blank"
          >
            <TUF className="w-7 hover:text-white scale-150 hover:scale-175" />
          </a>
        </li>
        <li>
          <a href="mailto:anirudh.sai.581@gmail.com">
            <Gmail className="w-7 hover:text-white hover:scale-105" />
          </a>
        </li>

        <li>
          <a href="https://x.com/Coder_581" target="_blank">
            <Twitter className="w-7 hover:text-white hover:scale-105" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Middle;
