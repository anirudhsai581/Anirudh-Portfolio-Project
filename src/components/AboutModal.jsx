import { X } from "lucide-react";
import Lottie from "lottie-react";
import floatingDev from "./../assets/animations/AnirudhFinal.json";

const AboutModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40   backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white/10 border border-white/20 text-white rounded-2xl shadow-lg 
                   w-[95%] md:w-[80%] lg:w-[75%] xl:w-[70%]
                   max-h-[85vh] overflow-y-auto p-6 md:p-10
                   flex flex-col md:flex-row gap-10 backdrop-blur-md animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Left section */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-orange-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-200 mb-6 leading-relaxed">
            I’m a frontend developer who loves turning ideas into smooth,
            visually engaging web experiences. I focus on crafting responsive,
            modern interfaces using React.js, Tailwind CSS, and the latest
            JavaScript tools for building clean, efficient, and user-first
            applications that feel great to use.
          </p>

          <h3 className="text-xl font-medium mb-3 text-orange-300">Skills</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #React.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Tailwind CSS
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Responsive Design
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #HTML
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #SQL
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #CSS
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Shadcn/UI
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Redux Toolkit
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Jest
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #React Router
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Supabase
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Clerk
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Axios
            </li>
            <li className="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base hover:border-orange-400 hover:text-orange-300 transition">
              #Bootstrap
            </li>
          </ul>
        </div>

        {/* Right section — large responsive animation */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="relative flex justify-center items-center 
                          w-[20rem] h-[20rem] 
                          sm:w-[24rem] sm:h-[24rem] 
                          md:w-[28rem] md:h-[28rem] 
                          lg:w-[32rem] lg:h-[32rem]"
          >
            <Lottie
              animationData={floatingDev}
              loop
              className="w-full h-full pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
