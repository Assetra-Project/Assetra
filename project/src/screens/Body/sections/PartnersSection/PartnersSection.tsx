import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "NSE",
    fullName: "Nairobi Securities Exchange",
    tagline: "Discover Opportunity"
  },
  {
    id: 2,
    name: "Britam Kenya",
    fullName: "British-American Investments Company",
    tagline: "For Life"
  },
  {
    id: 3,
    name: "Hedera",
    fullName: "Hedera Hashgraph",
    tagline: "The Trust Layer"
  },
  {
    id: 4,
    name: "Flutterwave",
    fullName: "Flutterwave",
    tagline: "Simplifying Payments"
  }
];

const allPartners = [...partners, ...partners, ...partners];

export const PartnersSection = (): JSX.Element => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="w-full py-12 md:py-16 bg-white overflow-hidden" ref={containerRef}>
      <h2 className="text-center font-['Bricolage_Grotesque'] text-lg md:text-xl font-semibold text-[#11190c] mb-8 md:mb-12 px-4">
        Our Possible Partner Organizations
      </h2>
      
      <div className="relative flex overflow-x-hidden">
        {/* Gradient masks for fading edges */}
        <div className="absolute left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex gap-8 md:gap-32 whitespace-nowrap px-4 md:px-16"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            width: "fit-content"
          }}
        >
          {allPartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              className="inline-flex flex-col items-center justify-center w-32 md:w-48"
              whileHover={{ scale: 1.05 }}
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [0.5, 1, 0.5]
                )
              }}
            >
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-['Satisfy',cursive] text-[#11190c] transition-all duration-300">
                  {partner.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-light text-[#444638] transition-all duration-300">
                  {partner.fullName}
                </p>
                <p className="mt-1 text-[10px] md:text-xs italic text-[#666] transition-all duration-300">
                  {partner.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-8 md:gap-32 whitespace-nowrap px-4 md:px-16"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            width: "fit-content"
          }}
        >
          {allPartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}-duplicate`}
              className="inline-flex flex-col items-center justify-center w-32 md:w-48"
              whileHover={{ scale: 1.05 }}
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.5, 1],
                  [0.5, 1, 0.5]
                )
              }}
            >
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-['Satisfy',cursive] text-[#11190c] transition-all duration-300">
                  {partner.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm font-light text-[#444638] transition-all duration-300">
                  {partner.fullName}
                </p>
                <p className="mt-1 text-[10px] md:text-xs italic text-[#666] transition-all duration-300">
                  {partner.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};