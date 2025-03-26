import React from "react";
import { motion } from "framer-motion";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="py-3 sm:py-3.5 md:py-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2 ml-1 sm:ml-1.5 md:ml-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] rounded-lg bg-[#e6ff00] flex items-center justify-center relative overflow-hidden"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-[#e6ff00]"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 32 32" 
                  className="relative z-10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <g transform="rotate(45 16 16)">
                    <path d="M16 4C16 4 20 8 20 12C20 16 16 20 16 20C16 20 12 16 12 12C12 8 16 4 16 4Z" fill="#11190c"/>
                    <path d="M4 16C4 16 8 20 12 20C16 20 20 16 20 16C20 16 16 12 12 12C8 12 4 16 4 16Z" fill="#11190c"/>
                    <path d="M16 28C16 28 20 24 20 20C20 16 16 12 16 12C16 12 12 16 12 20C12 24 16 28 16 28Z" fill="#11190c"/>
                    <path d="M28 16C28 16 24 20 20 20C16 20 12 16 12 16C12 16 16 12 20 12C24 12 28 16 28 16Z" fill="#11190c"/>
                  </g>
                  <circle cx="16" cy="16" r="4" fill="#e6ff00"/>
                </motion.svg>
              </motion.div>
              <span className="font-['Bricolage_Grotesque'] font-bold text-[#11190c] text-lg">
                Assetra
              </span>
            </motion.div>

            {/* Mobile Menu Icon (hidden on desktop) */}
            <div className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 md:hidden">
              <div className="w-full h-0.5 bg-[#11190c] mb-1"></div>
              <div className="w-full h-0.5 bg-[#11190c] mb-1"></div>
              <div className="w-full h-0.5 bg-[#11190c]"></div>
            </div>

            {/* Launch dApp Button (hidden on mobile) */}
            <nav className="hidden md:flex items-center mr-1 sm:mr-1.5 md:mr-2">
              <button 
                className="relative px-6 py-2 bg-[#11190c] text-[#e6ff00] rounded-full overflow-hidden group hover:bg-[#11190c]/90 transition-colors"
                onClick={() => window.open('https://app.assetra.com', '_blank', 'noopener,noreferrer')}
              >
                <span className="relative z-10 flex items-center">
                  Launch dApp
                  <svg 
                    className="ml-2 w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="absolute w-[140px] h-[47px] top-3.5 left-[-143px] bg-[#e6ff00] rounded-[1280px] rotate-[10deg] group-hover:opacity-75 transition-opacity"></div>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};