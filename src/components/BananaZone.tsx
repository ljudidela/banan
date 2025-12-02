import { useState } from 'react';
import { motion } from 'framer-motion';
import { BananaIcon } from './BananaIcon';

export const BananaZone = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="min-h-screen bg-banana py-20 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-black text-banana-text mb-8">Потрогай банан</h2>
      <p className="text-xl font-bold mb-12 bg-white/50 px-6 py-2 rounded-full">
        Бананчиков тронуто: {count}
      </p>

      <div className="relative w-full max-w-4xl h-[500px] bg-white/20 rounded-3xl border-4 border-white/30 flex items-center justify-center overflow-hidden">
        <p className="absolute text-banana-text/30 font-bold text-2xl pointer-events-none">
          Перетащи меня!
        </p>
        
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
            whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
            whileHover={{ scale: 1.1, cursor: 'grab' }}
            onDragStart={() => setCount(c => c + 1)}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`
            }}
          >
            <BananaIcon className="w-24 h-24 text-banana-text drop-shadow-lg" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};