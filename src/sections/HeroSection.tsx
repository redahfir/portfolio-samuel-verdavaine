import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

const HeroSection: FC = () => {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#07070f] pt-24 pb-12"
    >
      {/* Fond subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/4 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col h-full flex-1">

        {/* Bandeau supérieur */}
        <motion.div
          className="flex items-center justify-between mb-12 sm:mb-20"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium tracking-widest uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible — Stage juin 2026
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-600">
            <MapPin size={11} />
            Valenciennes, France
          </div>
        </motion.div>

        {/* Nom — très grand, style éditorial */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <p className="text-xs text-zinc-500 tracking-[0.25em] uppercase font-medium mb-4 sm:mb-6">
              Portfolio BUT TC3 — 2025 / 2026
            </p>
            <h1 className="display-title text-[clamp(3.5rem,10vw,9rem)] text-white leading-[0.9] mb-6 sm:mb-8">
              Samuel<br />
              <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.18)]">
                Verdavaine
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            {/* Accroche */}
            <div className="max-w-xl">
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light mb-1">
                Business Développement
              </p>
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
                & Management de la Relation Client
              </p>
              <p className="text-sm text-zinc-600 mt-3 leading-relaxed max-w-sm">
                {profile.accroche}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <button
                onClick={() => scroll('projets')}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-100 transition-all duration-200"
              >
                Voir mes SAÉ
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scroll('competences')}
                className="flex items-center gap-2 px-6 py-3 border border-white/12 text-zinc-300 font-medium text-sm rounded-full hover:border-white/25 hover:text-white transition-all duration-200"
              >
                Mes compétences
              </button>
            </div>
          </motion.div>
        </div>

        {/* Barre inférieure */}
        <motion.div
          className="mt-12 sm:mt-16 pt-6 border-t border-white/7 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Tags compétences */}
          <div className="flex flex-wrap gap-2">
            {['Marketing', 'Vente', 'Communication', 'Business Dev', 'Relation Client'].map((c) => (
              <span
                key={c}
                className="text-xs text-zinc-500 border border-white/8 rounded-full px-3 py-1 hover:border-white/20 hover:text-zinc-300 transition-all cursor-default"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scroll('about')}
            className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} />
            </motion.div>
            Scroll
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
