import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export const CursorGlow = (): JSX.Element => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const lastUpdateTime = useRef<number>(0);
  const trailPointId = useRef<number>(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastUpdateTime.current;
      
      if (timeDiff > 16) { // Limit to ~60fps
        const newPoint = {
          x: e.clientX,
          y: e.clientY,
          id: trailPointId.current++
        };
        
        setMousePosition({ x: e.clientX, y: e.clientY });
        setTrail(prevTrail => {
          const newTrail = [newPoint, ...prevTrail.slice(0, 7)];
          return newTrail;
        });
        
        lastUpdateTime.current = currentTime;
      }
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Core glow */}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 w-12 h-12 mix-blend-multiply"
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              scale: [1, 1.3, 1],
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              default: {
                duration: 0.15,
                ease: "linear"
              }
            }}
            style={{
              background: 'radial-gradient(circle, rgba(230, 255, 0, 0.8) 0%, rgba(230, 255, 0, 0.4) 40%, rgba(230, 255, 0, 0) 70%)',
              filter: 'blur(4px)',
            }}
          />
          
          {/* Trail effect */}
          {trail.map((point) => (
            <motion.div
              key={point.id}
              className="pointer-events-none fixed top-0 left-0 w-10 h-10 mix-blend-multiply"
              initial={{ 
                x: point.x - 20,
                y: point.y - 20,
                opacity: 0.6,
                scale: 0.9
              }}
              animate={{
                opacity: 0,
                scale: 0.3
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut"
              }}
              style={{
                background: 'radial-gradient(circle, rgba(230, 255, 0, 0.6) 0%, rgba(230, 255, 0, 0.3) 40%, rgba(230, 255, 0, 0) 70%)',
                filter: 'blur(6px)',
              }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  );
};