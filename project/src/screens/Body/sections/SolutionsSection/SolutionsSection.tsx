import { motion } from "framer-motion";
import { Zap, Shield, Coins, Leaf } from 'lucide-react';

const solutions = [
  {
    icon: Zap,
    title: "High Performance",
    isNeonCard: true
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    isNeonCard: false
  },
  {
    icon: Coins,
    title: "Cost Efficiency",
    isNeonCard: true
  },
  {
    icon: Leaf,
    title: "Sustainability",
    isNeonCard: false
  }
];

export const SolutionsSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-24 items-start">
          {/* Left side - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[54px] leading-[1.2] font-bold font-['Bricolage_Grotesque'] mb-6"
            >
              <span className="text-[#11190c]">Why</span>{" "}
              <span className="text-[#11190c]">Choose</span>{" "}
              <span className="text-[#e6ff00] bg-[#11190c] px-4 py-1 rounded-lg">Hedera?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#11190c]/80 text-lg leading-relaxed font-['Inter'] max-w-[480px]"
            >
              As a governing council member, we leverage Hedera's enterprise-grade public network to provide unmatched security, speed, and reliability for your digital assets. Experience the future of asset tokenization with the most advanced distributed ledger technology.
            </motion.p>
          </div>

          {/* Right side - Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  translateZ: 20,
                }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  transform: {
                    type: "spring",
                    damping: 15,
                    stiffness: 200
                  }
                }}
                className={`relative group rounded-2xl p-6 transform-gpu ${
                  solution.isNeonCard 
                    ? 'bg-[#e6ff00]' 
                    : 'bg-[#11190c]'
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: solution.isNeonCard 
                    ? '0 0 20px rgba(230,255,0,0.3)'
                    : '0 0 20px rgba(0,0,0,0.3)',
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: solution.isNeonCard
                      ? 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.1), transparent 70%)'
                      : 'radial-gradient(circle at 50% 50%, rgba(230, 255, 0, 0.15), transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />

                <div className="relative transform-gpu" style={{ transform: "translateZ(20px)" }}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    solution.isNeonCard 
                      ? 'bg-black/10 border-black/30' 
                      : 'bg-[#e6ff00]/10 border-[#e6ff00]/30'
                    } border`}
                  >
                    <solution.icon className={`w-6 h-6 ${
                      solution.isNeonCard ? 'text-black' : 'text-[#e6ff00]'
                    }`} />
                  </div>

                  <h3 className={`text-xl font-['Bricolage_Grotesque'] font-bold ${
                    solution.isNeonCard ? 'text-black' : 'text-[#e6ff00]'
                  }`}>
                    {solution.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};