import Linkedin from "./assets/linkedin.svg?react";
import Twitter from "./assets/twitter-x.svg?react";
import Gmail from "./assets/email.svg?react";
import Github from "./assets/github.svg?react";
import TUF from "./assets/tuf.svg?react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll animation
    });
  };
  return (
    <footer className="flex flex-col items-center pb-10">
      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="inline-flex items-center gap-2 px-4 py-2  cursor-pointer
                   rounded-full bg-white/10 border border-white/20 
                   text-white hover:bg-orange-500 hover:border-orange-500 
                   transition-all duration-300 backdrop-blur-md shadow-md "
      >
        <ArrowUp size={18} />
        <span className="text-sm font-medium">Back to Top</span>
      </button>
      <p className="text-xs text-gray-300 my-4">Anirudh Sai © 2025</p>
      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
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
    </footer>
  );
};

export default Footer;
