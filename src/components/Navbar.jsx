import { useEffect, useState } from 'react';
import { Moon, Sun, Phone, Mail, Shield } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = 'text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition';
  const chipClass = 'inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 px-3 py-1.5 text-slate-700 dark:text-slate-200 shadow-sm';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 dark:bg-slate-900/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">
              <Shield className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900 dark:text-white tracking-wide">Aurelius Legal</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Advocates & Consultants</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={linkClass}>About</a>
            <a href="#services" className={linkClass}>Practice Areas</a>
            <a href="#testimonials" className={linkClass}>Testimonials</a>
            <a href="#contact" className={linkClass}>Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-800/60 px-3 py-1.5 text-sm font-medium text-slate-800 dark:text-slate-100 shadow-sm hover:shadow transition"
            >
              <Phone className="h-4 w-4" /> Book Consultation
            </a>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow transition"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>
      <div className="md:hidden px-4 pb-3 flex gap-3 text-sm overflow-x-auto">
        <a href="#about" className={chipClass}>About</a>
        <a href="#services" className={chipClass}>Practice Areas</a>
        <a href="#testimonials" className={chipClass}>Testimonials</a>
        <a href="#contact" className={`${chipClass} gap-1`}><Mail className="h-3.5 w-3.5"/>Contact</a>
      </div>
    </header>
  );
}
