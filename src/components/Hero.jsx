import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 px-6 py-5 shadow-sm backdrop-blur">
      <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {value}+
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950" />
      <motion.div style={{ y: y2 }} className="absolute inset-x-0 -top-24 h-[480px] rounded-b-[60px] bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 opacity-10 dark:opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              Strategic legal counsel for modern businesses and families
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-slate-600 dark:text-slate-300"
            >
              We combine decades of courtroom expertise with a client-first approach. Discretion, precision, and outcomes—delivered with absolute professionalism.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-blue-600 px-6 py-3 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-transform hover:-translate-y-0.5"
              >
                Book Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 px-6 py-3 text-slate-800 dark:text-slate-100 shadow-sm hover:shadow transition"
              >
                Explore Practice Areas
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Stat label="Cases Won" value={950} />
              <Stat label="Clients Served" value={1200} />
              <Stat label="Years of Excellence" value={25} />
            </div>
          </div>

          <div className="relative">
            <motion.div style={{ y: y1 }} className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Elegant law office"
                className="h-[380px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3"
            >
              <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200/70 dark:border-slate-800/70 p-4 text-center shadow">
                <p className="text-xs uppercase tracking-wide text-slate-500">Rating</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">4.9/5</p>
              </div>
              <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200/70 dark:border-slate-800/70 p-4 text-center shadow">
                <p className="text-xs uppercase tracking-wide text-slate-500">Response</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white"><span className="tabular-nums"><span className="align-middle">&lt;</span> 2h</span></p>
              </div>
              <div className="rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-slate-200/70 dark:border-slate-800/70 p-4 text-center shadow">
                <p className="text-xs uppercase tracking-wide text-slate-500">Confidential</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
