import React from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { motion } from "framer-motion";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#11190c] py-20">
      <div className="container mx-auto px-8">
        {/* Top section with logo and email subscription */}
        <div className="flex flex-wrap justify-between mb-16">
          {/* Logo and Description */}
          <div className="max-w-md">
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-[#e6ff00] flex items-center justify-center relative overflow-hidden"
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
              <span className="font-['Bricolage_Grotesque'] font-bold text-[#e6ff00] text-xl">
                Assetra
              </span>
            </motion.div>
            <p className="text-[#a39f90] text-sm leading-relaxed">
              Revolutionizing asset tokenization on the Hedera network. 
              Making investments accessible, transparent, and efficient for everyone.
            </p>
          </div>

          {/* Email subscription */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-white font-bold text-sm mb-4">Stay Updated</h3>
            <div className="flex">
              <Input
                className="w-64 h-10 bg-white/10 border-0 rounded-l-md text-white placeholder:text-white/50"
                placeholder="Enter your email"
              />
              <Button
                className="h-10 bg-[#e6ff00] text-[#11190c] rounded-l-none hover:bg-[#e6ff00]/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <Separator className="bg-white/10 mb-8" />
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-[#a39f90] text-sm">
            © 2025 Assetra. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[#a39f90] hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[#a39f90] hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[#a39f90] hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};