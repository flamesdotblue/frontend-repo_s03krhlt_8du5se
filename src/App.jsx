import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
    root.style.setProperty('color-scheme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggleTheme };
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 ease-out dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <PracticeAreas />
        <Testimonials />

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Book a confidential consultation</h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Tell us briefly about your matter. Our team will respond within two business hours.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="text-lg font-medium">+1 (555) 204-1122</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-lg font-medium">contact@aureliuslegal.com</p>
                  </div>
                </div>
              </div>

              <form className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 shadow-sm backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="text-sm text-slate-600 dark:text-slate-300">Full Name</label>
                    <input type="text" className="mt-1 w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/60 px-4 py-2.5 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500/20" placeholder="John Doe" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
                    <input type="email" className="mt-1 w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/60 px-4 py-2.5 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500/20" placeholder="john@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
                    <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/60 px-4 py-2.5 outline-none ring-0 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500/20" placeholder="Briefly describe your case" />
                  </div>
                  <div className="sm:col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Secure & confidential
                    </div>
                    <button type="button" className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-blue-600 px-6 py-2.5 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-transform hover:-translate-y-0.5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Aurelius Legal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
