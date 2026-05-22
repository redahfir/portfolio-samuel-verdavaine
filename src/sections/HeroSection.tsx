import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, TrendingUp, Handshake, Megaphone, Rocket, Heart, Download, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';
import { fadeInUp, fadeIn, staggerContainer } from '../utils/animations';

const competenceIcons = [
  { icon: TrendingUp, label: 'Marketing', color: '#3b82f6' },
  { icon: Handshake, label: 'Vente', color: '#10b981' },
  { icon: Megaphone, label: 'Communication', color: '#8b5cf6' },
  { icon: Rocket, label: 'Business Dev', color: '#06b6d4' },
  { icon: Heart, label: 'Relation Client', color: '#f59e0b' },
];

const HeroSection: FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-purple-500/6 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={fadeIn} className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/8 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
                Portfolio BUT TC3 — 2025/2026
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-none tracking-tight">
              Samuel{' '}
              <span className="gradient-text">Verdavaine</span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl font-medium">
              {profile.age} ans · {profile.parcours}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm">
              <Rocket size={18} className="text-cyan-400" />
              <span className="text-white font-display font-semibold text-lg sm:text-xl">
                {profile.tagline}
              </span>
            </div>
          </motion.div>

          {/* Accroche */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-zinc-300 text-base sm:text-lg leading-relaxed text-balance"
          >
            {profile.accroche}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projets"
              onClick={(e) => { e.preventDefault(); document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105"
            >
              Voir mes projets <ChevronRight size={16} />
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-sm"
            >
              Découvrir mon portfolio <ChevronRight size={16} />
            </a>
            <a
              href={profile.contact.cv}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/25 bg-blue-500/8 hover:bg-blue-500/15 text-blue-400 font-semibold text-sm transition-all duration-200"
            >
              <Download size={16} /> Télécharger CV
            </a>
          </motion.div>

          {/* Stats concrètes */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-4 text-center hover:bg-white/7 transition-all duration-200 border border-white/6"
              >
                <p className="font-display font-semibold text-base text-white leading-snug">{stat.valeur}</p>
                <p className="text-zinc-500 text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Competence Pills */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2"
          >
            {competenceIcons.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-white/4 border-white/8 text-zinc-300 text-xs font-medium hover:bg-white/8 transition-all duration-200"
              >
                <Icon size={13} style={{ color }} />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
