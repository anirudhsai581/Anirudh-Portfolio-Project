import Logo from "./assets/recheck.svg?react";
import Phone from "./assets/phone.svg?react";
import Sun from "./assets/sun.svg?react";
import Moon from "./assets/moon.svg?react";
import Whatsapp from "./assets/whatsapp.svg?react";

const Header = () => {
  return (
    <div className="z-10 pointer-events-none flex items-center justify-between px-4 mt-4  mx-auto w-full max-w-screen-xl">
      <Logo className="w-72 h-auto " />

      <div className="flex gap-8 pointer-events-auto ">
        {/* <Sun />
        <Moon /> */}
        <a href="tel:9951564880">
          <Phone className="hover:text-white  hover:scale-110" />
        </a>
        <a
          href="https://wa.me/919951564880?text=Hi%20Anirudh!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp className="hover:text-white  hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default Header;
