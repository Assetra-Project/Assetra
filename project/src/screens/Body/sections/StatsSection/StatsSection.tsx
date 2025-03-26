import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const problems = [
  {
    problem: "It's hard for regular people to invest.",
    solution: "Assetra lets anyone buy small pieces of bonds or shares."
  },
  {
    problem: "Bonds are difficult to sell quickly.",
    solution: "We turn them into tokens you can trade anytime."
  },
  {
    problem: "Settling trades takes too long.",
    solution: "We make it instant with smart contracts."
  },
  {
    problem: "You can't always see who owns what.",
    solution: "With Assetra, nothing is hidden — everything is on chain."
  }
];

export const StatsSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-[1064px] mx-auto px-4 md:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-[54px] leading-[1.2] font-bold font-['Bricolage_Grotesque'] mb-8 md:mb-12">
          <span className="text-[#11190c]">Avoid</span>{" "}
          <span className="text-[#11190c]">this</span>{" "}
          <span className="text-[#11190c]">with</span>{" "}
          <span className="text-[#e6ff00] bg-[#11190c] px-3 md:px-4 py-1 rounded-lg">Assetra dApp</span>
        </h2>

        {/* Problems and Solutions */}
        <div className="space-y-6 md:space-y-8">
          {problems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Problem Statement */}
              <div 
                className="cursor-pointer group flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-['Bricolage_Grotesque'] text-2xl md:text-[42px] tracking-[-0.8px] leading-[1.2] text-[#11190c] relative">
                  <motion.span
                    initial={{ textDecoration: "none" }}
                    animate={{ textDecoration: "line-through" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative decoration-[#e6ff00] decoration-4"
                  >
                    {item.problem}
                  </motion.span>
                </h3>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 45 : 0
                  }}
                  className="w-6 h-6 md:w-8 md:h-8 min-w-[1.5rem] md:min-w-[2rem] bg-[#e6ff00]/10 border border-[#e6ff00]/30 
                    rounded-lg flex items-center justify-center ml-3 md:ml-4 
                    group-hover:shadow-[0_0_15px_rgba(230,255,0,0.3)]
                    group-hover:bg-[#e6ff00]/20 transition-all duration-300"
                >
                  <span className="text-[#11190c] text-xl md:text-2xl font-light">+</span>
                </motion.div>
              </div>

              {/* Solution Dropdown */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 ml-0 md:ml-auto w-full md:w-[80%] bg-[#11190c]/5 p-4 md:p-6 rounded-xl border border-[#e6ff00]/20">
                      <p className="font-['Inter'] text-base md:text-xl text-[#11190c]">
                        {item.solution}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Project Attribution */}
        <div className="mt-12 md:mt-20 text-center">
          <p className="text-[#11190c]/60 text-xs md:text-sm font-['Inter']">
            A project by Janice M. and Simon M. · Powered by Hedera's ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};