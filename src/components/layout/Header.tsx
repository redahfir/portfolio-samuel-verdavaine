import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navItems } from '../../data/profile';
import { useTheme } from '../../context/ThemeContext';

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(n => n.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const headerBg = scrolled
    ? theme === 'light'
      ? 'rgba(248,248,253,0.92)'
      : 'rgba(7,7,15,0.92)'
    : 'transparent';

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl border-b border-white/6' : ''
        }`}
        style={{ backgroundColor: headerBg }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">

            {/* Logo — typographique */}
            <button onClick={() => handleNavClick('#hero')} className="group flex items-baseline gap-0.5">
              <span className="font-display font-bold text-white text-sm tracking-tight">Samuel</span>
              <span className="font-display font-light text-zinc-500 text-sm tracking-tight group-hover:text-zinc-300 transition-colors">
                &nbsp;Verdavaine
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 tracking-wide ${
                    activeSection === item.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/6 rounded-lg border border-white/8"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
              >
                {theme === 'dark'
                  ? <Sun size={15} />
                  : <Moon size={15} />
                }
              </button>

              {/* Contact CTA */}
              <button
                onClick={() => handleNavClick('#contact')}
                className={`hidden sm:inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-zinc-100'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                Contact
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-[#07070f]/97 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 px-6 py-6 border-b border-white/6"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-0.5">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-3 text-left text-sm font-medium rounded-xl transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-white bg-white/6 border border-white/10'
                        : 'text-zinc-400 hover:text-white hover:bg-white/4'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
