import { motion } from "framer-motion";
import { Coins, ShieldCheck, Clock, Eye, Sparkles } from 'lucide-react';

const integrations = [
  {
    icon: <Coins className="w-6 md:w-8 h-6 md:h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Asset Tokenization",
    description: "Investors deposit existing bonds or equities into regulated custodial smart contracts."
  },
  {
    icon: <ShieldCheck className="w-6 md:w-8 h-6 md:h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Smart Contracts",
    description: "These assets are fractionalized into tradable security tokens."
  },
  {
    icon: <Clock className="w-6 md:w-8 h-6 md:h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Blockchain-Based CSD",
    description: "Hedera-powered CSD maintains secure, accurate, and real-time ownership records."
  },
  {
    icon: <Eye className="w-6 md:w-8 h-6 md:h-8 text-white group-hover:text-white/90 transition-colors" />,
    name: "Marketplace Integration",
    description: "NSE facilitates a blockchain-powered marketplace for seamless trading of assets."
  }
];

export const IntegrationsSection = () => {
  return (
    <section className="bg-[#fafafa] py-12 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[1fr,1fr] gap-12 md:gap-24 items-start">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 md:gap-3 rounded-[40px] cursor-pointer
                         relative group overflow-hidden px-4 md:px-6 py-2 md:py-3 bg-[#11190c]/5">
              <div className="flex items-center justify-center w-7 md:w-9 h-7 md:h-9 rounded-full bg-[#11190c]">
                <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-[#e6ff00]" />
              </div>
              <span className="text-[#11190c] font-['Bricolage_Grotesque'] font-medium text-sm md:text-base">
                Our Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-[54px] leading-[1.2] font-bold font-['Bricolage_Grotesque'] mt-6 md:mt-8">
              <span className="text-[#11190c]">Revolutionizing</span>{" "}
              <span className="text-[#11190c]">Asset</span>{" "}
              <span className="text-[#e6ff00] bg-[#11190c] px-3 md:px-4 py-1 rounded-lg">
                Management
              </span>
            </h2>
          </div>

          {/* Right side - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#11190c] p-4 md:p-6 rounded-2xl"
              >
                <div className="p-2 md:p-3 rounded-xl w-fit mb-3 md:mb-4 bg-[#e6ff00]/10 border border-[#e6ff00]/20">
                  {integration.icon}
                </div>
                <h3 className="text-[#e6ff00] text-base md:text-lg font-['Bricolage_Grotesque'] font-bold mb-2">
                  {integration.name}
                </h3>
                <p className="text-white/80 text-xs md:text-sm font-['Inter']">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};