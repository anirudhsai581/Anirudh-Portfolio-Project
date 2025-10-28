// HomeHero.jsx
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HomeHero() {
  const [doneTyping, setDoneTyping] = useState(false);
  const nameText = "Hello! I'm Anirudh";

  return (
    <div className="relative ml-4 md:ml-8 mt-20">
      <h1
        className="text-4xl sm:text-5xl md:text-[64px]
  font-['Spartan'] font-semibold leading-tight text-white
  max-w-[90%] sm:max-w-[600px] md:max-w-none
  break-words"
      >
        {/* wrapper keeps the typed text + cursor inline */}
        <span className="inline-block align-baseline">
          <TypeAnimation
            sequence={[
              nameText,
              700, // pause then callback
              () => {
                // callback called exactly once when typing + pause done
                console.log("Done typing!");
                setDoneTyping(true);
              },
            ]}
            speed={300} // ~80ms per character (natural)
            cursor={false} // disable library cursor
            wrapper="span"
            repeat={0}
            className="inline-block"
          />

          {/* Real DOM cursor shown only while !doneTyping */}
          {!doneTyping && (
            <span
              className="inline-block ml-1 align-baseline type-cursor"
              aria-hidden="true"
            >
              |
            </span>
          )}
        </span>

        {/* Role fades in after typing ends */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.8, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl
                  italic text-amber-500
                  drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]
                  block mt-2"
        >
          Frontend Developer
        </motion.span>
      </h1>
    </div>
  );
}
