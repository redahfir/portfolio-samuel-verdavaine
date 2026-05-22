import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Users, Zap, Shuffle, Target, UserCheck,
  MapPin, GraduationCap, Calendar
} from 'lucide-react';
import { profile } from '../data/profile';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations';

const iconMap: Record<string, FC<{ size?: number; className?: string }>> = {
  Brain, Users, Zap, Shuffle, Target, UserCheck,
};

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="Qui suis-je ?"
            title="Un profil "
            highlight="orienté résultats"
            subtitle="Étudiant en BUT TC3 parcours Business Développement & Management de la Relation Client — je conjugue analyse, relation et ambition."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio & Info */}
          <motion.div
            className="space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Identity card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-2xl shrink-0">
                  SV
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{profile.prenom} {profile.nom}</h3>
                  <p className="text-blue-400 text-sm font-medium">{profile.parcours}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="flex items-center gap-1 text-xs text-zinc-400">
                      <Calendar size={12} className="text-zinc-500" /> {profile.annee}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-400">
                      <MapPin size={12} className="text-zinc-500" /> {profile.contact.localisation}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-400">
                      <GraduationCap size={12} className="text-zinc-500" /> {profile.age} ans
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Profil
              </h4>
              {profile.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-zinc-400 text-sm leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* Formation card */}
            <div className="glass-card rounded-2xl p-6 border border-blue-500/12">
              <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <GraduationCap size={14} className="text-blue-400" />
                Formation
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{profile.formation}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">{profile.parcours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                  <div>
                    <p className="text-zinc-300 text-sm font-medium">IUT — Valenciennes</p>
                    <p className="text-zinc-500 text-xs mt-0.5">2023 → 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Qualités */}
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h3
              variants={fadeInRight}
              className="text-white font-display font-semibold text-lg mb-6"
            >
              Compétences comportementales
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.qualites.map((qual) => {
                const Icon = iconMap[qual.icone] || Target;
                return (
                  <motion.div
                    key={qual.label}
                    variants={fadeInUp}
                    className="glass-card rounded-xl p-4 group hover:bg-white/7 transition-all duration-300 gradient-border cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/12 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Icon size={16} className="text-blue-400" />
                      </div>
                      <h4 className="text-white text-sm font-semibold">{qual.label}</h4>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed pl-11">{qual.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Ambition card */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/15"
            >
              <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                <Target size={14} className="text-blue-400" />
                Ambition professionnelle
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {/* TODO — Personnaliser cette section avec votre ambition et projet professionnel réel */}
                Intégrer une structure commerciale dynamique après l'obtention de mon BUT TC3, où je pourrai mettre en œuvre mes compétences en développement commercial, gestion de la relation client et stratégie marketing pour contribuer activement à la croissance de l'organisation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
