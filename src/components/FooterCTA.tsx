import { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

export const FooterCTA = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFE135', '#FFD700', '#FFFFFF']
    });
    setShowModal(true);
  };

  return (
    <section className="py-32 bg-banana-text text-banana flex flex-col items-center justify-center relative">
      <h2 className="text-5xl md:text-8xl font-black mb-12 text-center">ХОЧЕШЬ?</h2>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="bg-banana text-banana-text text-2xl md:text-4xl font-black px-12 py-6 rounded-full shadow-[0_0_30px_rgba(255,225,53,0.5)] hover:shadow-[0_0_50px_rgba(255,225,53,0.8)] transition-shadow"
      >
        ХОЧУ БАНАН!
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-banana p-12 rounded-3xl text-center max-w-md"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-4xl font-black text-banana-text mb-4">СПАСИБО!</h3>
              <p className="text-xl text-banana-text mb-8">Твой виртуальный банан уже в пути (нет).</p>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-banana-text text-white px-8 py-3 rounded-xl font-bold"
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};