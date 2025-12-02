import { motion } from 'framer-motion';
import { BananaIcon } from './BananaIcon';

export const FlyingBananas = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden bg-banana-light flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-black text-banana-text">Банановый кайф</h2>
            <p className="text-2xl font-bold text-banana-dark">99% калия, 100% настроения</p>
            <p className="text-xl text-banana-text/80">Жёлтый — новый чёрный. Почувствуй энергию солнца в каждом пикселе.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="flex justify-center cursor-pointer"
          >
            <div className="relative">
              <BananaIcon className="w-64 h-64 text-banana drop-shadow-xl" />
              <div className="absolute top-1/4 left-1/4 w-32 h-8 bg-black opacity-80 rounded-full rotate-12" /> {/* Glasses placeholder */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Flying Bananas Background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100, y: Math.random() * 500 }}
          whileInView={{ x: '120vw' }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute opacity-20 pointer-events-none"
          style={{ top: `${Math.random() * 100}%` }}
        >
          <BananaIcon className="w-16 h-16 text-banana-dark" />
        </motion.div>
      ))}
    </section>
  );
};