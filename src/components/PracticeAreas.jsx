import { Scale, Briefcase, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const areas = [
  {
    icon: Scale,
    title: 'Corporate & Commercial',
    description: 'Contracts, mergers, compliance, and dispute resolution for enterprises and founders.'
  },
  {
    icon: Users,
    title: 'Family & Matrimonial',
    description: 'Compassionate representation for custody, divorce, adoption, and estate planning.'
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description: 'Strategic defense with meticulous attention to rights and due process.'
  },
  {
    icon: Briefcase,
    title: 'Property & Civil',
    description: 'Real estate, tenancy, and civil litigation with outcome-focused advocacy.'
  }
];

export default function PracticeAreas() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-500/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Practice Areas</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">A refined suite of legal services crafted for clarity, discretion, and results.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 shadow-sm backdrop-blur hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center text-sm font-medium text-indigo-700 dark:text-indigo-400 hover:underline"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
