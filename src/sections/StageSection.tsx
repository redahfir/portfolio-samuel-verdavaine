import React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Building, MapPin, Calendar, Briefcase, Target, BookOpen,
  TrendingUp, Handshake, Megaphone, Rocket, Heart, Clock
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import PlaceholderZone from '../components/ui/PlaceholderZone';
import { stageInfo } from '../data/stage';
import { competences } from '../data/competences';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations';

const iconMap: Record<string, FC<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
};
const compIconMap: Record<string, string> = {
  marketing: 'TrendingUp',
  vente: 'Handshake',
  communication: 'Megaphone',
  'business-dev': 'Rocket',
  'relation-client': 'Heart',
};

const StageSection: FC = () => {
  const isTodo = (text: string) => text.startsWith('TODO');

  return (
    <section id="stage" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="Stage de 3e année"
            title="Stage — "
            highlight="À compléter"
            subtitle="Section réservée au stage de fin de BUT3. À renseigner dès que la convention est signée et la mission définie."
          />
        </div>

        {/* Banner en attente */}
        <motion.div
          className="mb-10 rounded-2xl p-5 bg-emerald-500/8 border border-emerald-500/20 flex items-start gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
            <Clock size={20} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-emerald-300 font-semibold mb-1">Stage en préparation — Rendu juin 2026</p>
            <p className="text-emerald-400/70 text-sm leading-relaxed">
              Cette section sera complétée au fil du stage. Les informations marquées TODO sont à remplacer par les données réelles.
              Prévoir un rapport de stage complet avec preuves, bilan et analyse réflexive pour le rendu final.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left — Infos stage */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Carte identité stage */}
            <div className="glass-card rounded-2xl p-5 border border-white/8">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Briefcase size={14} className="text-emerald-400" /> Fiche stage
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Building, label: 'Entreprise', value: stageInfo.entreprise },
                  { icon: Briefcase, label: 'Secteur', value: stageInfo.secteur },
                  { icon: MapPin, label: 'Lieu', value: stageInfo.lieu },
                  { icon: Calendar, label: 'Début', value: stageInfo.dateDebut },
                  { icon: Calendar, label: 'Fin', value: stageInfo.dateFin },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Icon size={13} className="text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs">{label}</p>
                      <p className={`text-sm font-medium ${isTodo(value) ? 'text-amber-400 italic' : 'text-white'}`}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compétences mobilisées */}
            <div className="glass-card rounded-2xl p-5 border border-white/8">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Target size={14} className="text-emerald-400" /> Compétences mobilisées
              </h3>
              <div className="space-y-2">
                {stageInfo.competencesMobilisees.map((compId) => {
                  const comp = competences.find((c) => c.id === compId);
                  if (!comp) return null;
                  const Icon = iconMap[compIconMap[compId]] || TrendingUp;
                  return (
                    <div key={compId} className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${comp.couleurAccent}15` }}
                      >
                        <Icon size={13} style={{ color: comp.couleurAccent }} />
                      </div>
                      <span className="text-zinc-300 text-sm">{comp.titre}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Mission, objectifs, preuves */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Mission */}
            <motion.div variants={fadeInRight} className="glass-card rounded-2xl p-5 border border-white/8">
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <Briefcase size={14} className="text-emerald-400" /> Mission
              </h4>
              <p className={`text-sm leading-relaxed ${isTodo(stageInfo.mission) ? 'text-amber-400 italic' : 'text-zinc-400'}`}>
                {stageInfo.mission}
              </p>
            </motion.div>

            {/* Contexte */}
            <motion.div variants={fadeInRight} className="glass-card rounded-2xl p-5 border border-white/8">
              <h4 className="text-white font-semibold text-sm mb-3">Contexte de l'entreprise</h4>
              <p className={`text-sm leading-relaxed ${isTodo(stageInfo.contexte) ? 'text-amber-400 italic' : 'text-zinc-400'}`}>
                {stageInfo.contexte}
              </p>
            </motion.div>

            {/* Objectifs */}
            <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-5 border border-white/8">
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <Target size={14} className="text-emerald-400" /> Objectifs du stage
              </h4>
              <ul className="space-y-2">
                {stageInfo.objectifs.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span className={`text-sm ${isTodo(obj) ? 'text-amber-400 italic' : 'text-zinc-400'}`}>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Preuves */}
            <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-5 border border-white/8">
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <BookOpen size={14} className="text-emerald-400" /> Preuves & traces à ajouter
              </h4>
              <div className="space-y-2">
                {stageInfo.preuves.map((preuve, i) => (
                  <PlaceholderZone
                    key={i}
                    label={preuve.libelle}
                    type={preuve.type.toUpperCase()}
                    compact
                  />
                ))}
              </div>
            </motion.div>

            {/* Bilan + Analyse */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                variants={fadeInLeft}
                className="rounded-xl p-4 bg-emerald-500/8 border border-emerald-500/20"
              >
                <h4 className="text-emerald-300 font-semibold text-xs uppercase tracking-wider mb-2">
                  Bilan du stage
                </h4>
                <p className={`text-xs leading-relaxed ${isTodo(stageInfo.bilan) ? 'text-amber-400 italic' : 'text-zinc-400'}`}>
                  {stageInfo.bilan}
                </p>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="rounded-xl p-4 bg-white/4 border border-white/8"
              >
                <h4 className="text-zinc-300 font-semibold text-xs uppercase tracking-wider mb-2">
                  Analyse réflexive
                </h4>
                <p className={`text-xs leading-relaxed ${isTodo(stageInfo.analyseReflexive) ? 'text-amber-400 italic' : 'text-zinc-400'}`}>
                  {stageInfo.analyseReflexive}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StageSection;
