import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { BananaIcon } from './BananaIcon';

export const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-banana to-banana-light">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0], 
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="mb-8 inline-block"
        >
          <BananaIcon className="w-48 h-48 md:w-64 md:h-64 text-banana-dark drop-shadow-2xl" />
        </motion.div>

        <h1 className="text-4xl md:text-7xl font-black text-banana-text mb-4 tracking-tight">
          Готов к жёлтому<br/>приключению?
        </h1>
        <p className="text-xl md:text-2xl text-banana-text/80 font-medium mb-12">
          Сайт, после которого бананы будут сниться
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex items-center gap-2 mx-auto bg-banana-text text-banana px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
          >
            Скролль <ArrowDown size={24} />
          </button>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(5)].map((_, i) => (
          <BananaIcon 
            key={i} 
            className="absolute w-32 h-32"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`, 
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>
    </section>
  );
};