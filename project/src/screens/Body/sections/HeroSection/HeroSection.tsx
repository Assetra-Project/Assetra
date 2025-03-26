import React from "react";
import { motion } from "framer-motion";

export const HeroSection = (): JSX.Element => {
  const [currentWord, setCurrentWord] = React.useState(0);
  const words = ["Investment", "Assets", "Bonds", "Securities"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[calc(100vh-80px)] relative overflow-hidden px-4 md:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6ff00]/10 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url(/home-bg-c8ca1b3717-svg.svg)] bg-no-repeat bg-cover opacity-50 hidden md:block" />

      {/* Content */}
      <div className="relative pt-32 md:pt-48 max-w-[1064px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-['Bricolage_Grotesque'] font-bold text-4xl md:text-6xl lg:text-[85px] leading-[1.1] tracking-tight text-[#11190c]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Your Gateway
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block"
            >
              to Tokenized
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative inline-block mt-4"
            >
              <motion.span
                key={words[currentWord]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-[#e6ff00] bg-[#11190c] px-4 md:px-6 py-2 rounded-lg inline-block transform hover:scale-105 transition-transform duration-300 shadow-[0_4px_15px_rgba(230,255,0,0.3)]"
              >
                {words[currentWord]}
              </motion.span>
            </motion.div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 md:mt-8 font-['Inter'] text-[#444638] text-lg md:text-xl tracking-tight max-w-[480px]"
          >
            Discover the future of investment through our innovative tokenization platform powered by Hedera's enterprise-grade network.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-6"
          >
            <button className="w-full md:w-auto bg-[#11190c] text-[#e6ff00] px-8 py-3 rounded-full font-medium hover:bg-[#11190c]/90 transition-colors duration-300">
              Get Started
            </button>
            <button className="w-full md:w-auto text-[#11190c] font-medium hover:text-[#11190c]/70 transition-colors duration-300 flex items-center justify-center gap-2">
              Learn More
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};