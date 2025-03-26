import React from "react";
import { motion } from "framer-motion";
import { Database, Shield, Globe } from "lucide-react";

const features = [
  {
    title: "NSE Strategic Alignment",
    description: "Leveraging blockchain technology to enhance asset liquidity and global investor access as a Hedera Governing Council member.",
    icon: Globe,
    delay: 0,
    value: 33.3,
    unit: "M+",
    label: "Market Cap"
  },
  {
    title: "Asset Tokenization",
    description: "Secure fractionalization of assets into tradable security tokens through smart contracts.",
    icon: Database,
    delay: 0.2,
    value: 62.4,
    unit: "K+",
    label: "Transactions"
  },
  {
    title: "Blockchain-Based CSD",
    description: "Real-time ownership records with automated settlements for reduced transaction times.",
    icon: Shield,
    delay: 0.4,
    value: 41.5,
    unit: "%",
    label: "Uptime"
  }
];

const Counter = ({ value }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setCount(Math.min(current, value));
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toFixed(1)}</span>;
};

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="text-center relative mb-12 md:mb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-[54px] leading-[1.2] font-bold font-['Bricolage_Grotesque'] mb-6"
        >
          <span className="text-[#11190c]">Who</span>{" "}
          <span className="text-[#11190c]">We</span>{" "}
          <span className="text-[#e6ff00] bg-[#11190c] px-4 py-1 rounded-lg">Are</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              rotateX: 5,
            }}
            transition={{ 
              duration: 0.4,
              delay: feature.delay
            }}
            className={`w-full relative group rounded-2xl ${
              index === 1 ? 'bg-[#11190c]' : 'bg-[#e6ff00]'
            } p-6 md:p-8`}
          >
            <motion.div 
              className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${
                index === 1 
                  ? 'bg-[#e6ff00]/10 border-[#e6ff00]/30' 
                  : 'bg-[#11190c]/10 border-[#11190c]/30'
              } border group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
            >
              <feature.icon className={`w-8 h-8 ${
                index === 1 ? 'text-[#e6ff00]' : 'text-[#11190c]'
              }`} />
            </motion.div>

            <motion.div 
              className={`font-['Bricolage_Grotesque'] text-4xl font-bold mb-2 ${
                index === 1 ? 'text-[#e6ff00]' : 'text-[#11190c]'
              }`}
            >
              <Counter value={feature.value} />
              {feature.unit}
            </motion.div>

            <p className={`text-xs font-['Inter'] uppercase tracking-wider ${
              index === 1 ? 'text-[#e6ff00]/60' : 'text-[#11190c]/60'
            }`}>
              {feature.label}
            </p>

            <h3 className={`mt-6 text-xl font-['Bricolage_Grotesque'] font-bold ${
              index === 1 ? 'text-[#e6ff00]' : 'text-[#11190c]'
            }`}>
              {feature.title}
            </h3>

            <p className={`mt-3 text-sm font-['Inter'] leading-relaxed ${
              index === 1 ? 'text-[#e6ff00]/80' : 'text-[#11190c]/80'
            }`}>
              {feature.description}
            </p>

            <motion.div 
              className={`mt-6 flex items-center cursor-pointer ${
                index === 1 ? 'text-[#e6ff00]' : 'text-[#11190c]'
              } group-hover:translate-x-2 transition-transform duration-300`}
            >
              <span className="text-sm font-['Inter']">Learn more</span>
              <motion.div 
                className="ml-2 w-4 h-4"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};