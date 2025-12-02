import { motion } from 'framer-motion';

const reviews = [
  { text: "Наконец-то нормальный сайт!", author: "Бабушка" },
  { text: "Жёлтый — мой любимый цвет", author: "Аноним" },
  { text: "10/10, бананово!", author: "Сосед" },
  { text: "Где купить такие бананы?", author: "Илон М." }
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-banana-light overflow-hidden">
      <h2 className="text-center text-4xl font-black text-banana-text mb-16">Что говорят люди</h2>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-8 px-8"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="min-w-[300px] bg-white p-8 rounded-2xl shadow-xl border-b-4 border-banana"
            >
              <p className="text-xl font-medium mb-4 text-banana-text">«{review.text}»</p>
              <p className="text-gray-500 font-bold text-right">— {review.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};