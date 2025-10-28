/*
const GlassButton = ({
  text = "Click Me",
  onClick,
  className = "",
  showArrow = true,
  direction = "right",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={onClick}
        className="
          relative z-10
          bg-gradient-to-r from-amber-400/20 to-amber-700/20
          backdrop-blur-md
          border border-amber-400/30
          text-amber-100
          font-extrabold
          py-3 px-8
          rounded-2xl
          shadow-[0_0_25px_rgba(245,158,11,0.2)]
          cursor-pointer
          hover:from-amber-400/40 hover:to-amber-700/40
          hover:scale-110
          hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]
          transition-all duration-500
          group
        "
      >
        {text}
        {/* Floating arrow (optional) */ /*}
        {showArrow && direction === "right" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
    absolute top-1/2 -translate-y-1/2 right-0 translate-x-6
    w-9 h-6 text-amber-400/80 opacity-80
    transition-all duration-300 group-hover:translate-x-7 group-hover:opacity-100
  "
            fill="none"
            viewBox="0 0 36 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 12h28m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        )}
        {/* down arrow */ /*}
        {showArrow && direction === "down" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
    absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-7
    w-6 h-9 text-amber-400/80 opacity-80
    transition-all duration-300
    group-hover:translate-y-8 group-hover:opacity-100
  "
            fill="none"
            viewBox="0 0 24 36"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v24m0 0l6-6m-6 6l-6-6"
            />
          </svg>
        )}
      </button>

      {/* Reflection layer */ /*}
      <div
        className="
        absolute inset-0 rounded-full
        bg-gradient-to-b from-white/15 to-transparent
        blur-[3px] pointer-events-none
      "
      ></div>
    </div>
  );
};

export default GlassButton;
*/
const GlassButton = ({
  text = "Click Me",
  onClick,
  className = "",
  showArrow = true,
  direction = "right",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={onClick}
        className="
          relative z-10
          bg-gradient-to-b from-amber-400/15 via-amber-500/10 to-amber-700/20
          backdrop-blur-md
          border border-amber-500/50
          text-amber-100
          font-bold
          py-3 px-8
          rounded-2xl
          shadow-[0_0_25px_rgba(245,158,11,0.25)]
          cursor-pointer
          hover:from-amber-400/25 hover:to-amber-700/35
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(245,158,11,0.45)]
          transition-all duration-500 ease-out
          group
        "
      >
        {text}

        {/* Floating arrow (optional) */}
        {showArrow && direction === "right" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute top-1/2 -translate-y-1/2 right-0 translate-x-6
              w-8 h-5 text-amber-400/80 opacity-80
              transition-all duration-300 group-hover:translate-x-7 group-hover:opacity-100
            "
            fill="none"
            viewBox="0 0 36 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 12h28m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        )}

        {/* Down arrow */}
        {showArrow && direction === "down" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-7
              w-6 h-8 text-amber-400/80 opacity-80
              transition-all duration-300
              group-hover:translate-y-8 group-hover:opacity-100
            "
            fill="none"
            viewBox="0 0 24 36"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v24m0 0l6-6m-6 6l-6-6"
            />
          </svg>
        )}
      </button>

      {/* Reflection layer */}
      <div
        className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-t from-white/10 via-white/5 to-transparent
          blur-[2px] pointer-events-none
        "
      ></div>
    </div>
  );
};

export default GlassButton;
