import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const items = [
  {
    name: 'Evelyn Carter',
    role: 'Founder, Finch & Co.',
    quote:
      'Aurelius Legal brought clarity to a complex corporate dispute. Their poise in negotiation saved us months of litigation.'
  },
  {
    name: 'Rohan Mehta',
    role: 'Private Client',
    quote:
      'Professional, discreet, and effective. I always felt informed and protected through every step.'
  },
  {
    name: 'Sophia Li',
    role: 'General Counsel, Helix Labs',
    quote:
      'Sharp insight and impeccable preparation. Their team is the benchmark for premium legal service.'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Client Testimonials</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Real experiences from clients who trusted us with what matters most.</p>

        <div className="relative mt-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-8 shadow-sm backdrop-blur"
            >
              <p className="text-xl leading-relaxed text-slate-800 dark:text-slate-100">“{items[index].quote}”</p>
              <div className="mt-6 text-sm text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-900 dark:text-white">{items[index].name}</span> — {items[index].role}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? 'bg-indigo-600 w-6' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
