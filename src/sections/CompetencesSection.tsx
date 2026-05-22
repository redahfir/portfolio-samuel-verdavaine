import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
  ChevronDown, ChevronUp, CheckCircle2
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProgressBar from '../components/ui/ProgressBar';
import Badge from '../components/ui/Badge';
import { competences } from '../data/competences';
import { projets } from '../data/projets';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations';
import type { Competence } from '../types';

const iconMap: Record<string, FC<{ size?: number; style?: object }>> = {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
};

const colorMap: Record<string, string> = {
  'brand-blue': 'blue',
  'brand-emerald': 'emerald',
  'brand-purple': 'purple',
  'brand-cyan': 'cyan',
  'brand-amber': 'amber',
};

const CompetenceCard: FC<{ competence: Competence }> = ({ competence }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[competence.icone] || TrendingUp;
  const badgeVariant = colorMap[competence.couleur] as 'blue' | 'emerald' | 'purple' | 'cyan' | 'amber';
  const projetsLies = projets.filter((p) => p.competencesLiees.includes(competence.id));

  return (
    <motion.div
      variants={fadeInUp}
      className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden gradient-border`}
      style={{ borderColor: `${competence.couleurAccent}20` }}
    >
      {/* Header */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${competence.couleurAccent}15` }}
            >
              <Icon size={22} style={{ color: competence.couleurAccent }} />
            </div>
            <div>
              <h3 className="font-display text-white font-bold text-base leading-tight">{competence.titre}</h3>
              <Badge variant={badgeVariant} size="sm">{competence.niveauIntitule.split('—')[0].trim()}</Badge>
            </div>
          </div>
          <div
            className="shrink-0 text-right"
            style={{ color: competence.couleurAccent }}
          >
            <span className="font-display font-bold text-2xl">{competence.progression}</span>
            <span className="text-xs">%</span>
          </div>
        </div>

        {/* Progress */}
        <ProgressBar
          value={competence.progression}
          color={competence.couleurAccent}
          showValue={false}
          height="sm"
        />

        {/* Niveau */}
        <p className="text-xs text-zinc-500 mt-2 font-medium">{competence.niveauIntitule}</p>

        {/* Objectif */}
        <p className="text-zinc-400 text-sm mt-3 leading-relaxed">{competence.objectif}</p>

        {/* Projets liés */}
        {projetsLies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {projetsLies.map((p) => (
              <Badge key={p.id} variant="default" size="sm">
                {p.annee} · {p.titre.split('—')[0].trim().substring(0, 30)}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Expandable details */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-3 border-t text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors"
        style={{ borderColor: `${competence.couleurAccent}15` }}
      >
        <span>Apprentissages critiques & composantes essentielles</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 space-y-5">
              {/* AC */}
              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: competence.couleurAccent }}
                >
                  Apprentissages critiques
                </h4>
                <ul className="space-y-2">
                  {competence.apprentissagesCritiques.map((ac) => (
                    <li key={ac.id} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: competence.couleurAccent }} />
                      <span className="text-zinc-400 text-xs leading-relaxed">{ac.libelle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CE */}
              <div>
                <h4
                  className="text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: competence.couleurAccent }}
                >
                  Composantes essentielles
                </h4>
                <ul className="space-y-2">
                  {competence.composantesEssentielles.map((ce) => (
                    <li key={ce.id} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: competence.couleurAccent }}
                      />
                      <span className="text-zinc-400 text-xs leading-relaxed">{ce.libelle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CompetencesSection: FC = () => {
  return (
    <section id="competences" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="BUT TC3 — Parcours P3"
            title="Mes "
            highlight="compétences"
            subtitle="5 blocs de compétences définis par le référentiel BUT TC, mobilisés tout au long de la formation à travers les SAÉ, les projets et les mises en situation professionnelle."
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {competences.map((comp) => (
            <CompetenceCard key={comp.id} competence={comp} />
          ))}
        </motion.div>

        {/* Legend */}
        <motion.p
          className="text-center text-zinc-600 text-xs mt-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          Les niveaux de progression sont auto-évalués et basés sur la mobilisation des apprentissages critiques en situation professionnelle.
        </motion.p>
      </div>
    </section>
  );
};

export default CompetencesSection;
