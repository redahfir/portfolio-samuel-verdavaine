import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
  ChevronDown, ChevronUp, CheckCircle2, Circle, Clock
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Badge from '../components/ui/Badge';
import { competences } from '../data/competences';
import { projets } from '../data/projets';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations';
import type { Competence, NiveauMaitrise } from '../types';

const iconMap: Record<string, FC<{ size?: number; style?: React.CSSProperties }>> = {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
};
import React from 'react';

const colorMap: Record<string, 'blue' | 'emerald' | 'purple' | 'cyan' | 'amber'> = {
  'brand-blue': 'blue',
  'brand-emerald': 'emerald',
  'brand-purple': 'purple',
  'brand-cyan': 'cyan',
  'brand-amber': 'amber',
};

// ── Badge de maîtrise ──────────────────────────────────────────
const MaitriseBadge: FC<{ niveau: NiveauMaitrise; size?: 'sm' | 'md' }> = ({ niveau, size = 'md' }) => {
  const config = {
    'maitrise': {
      label: 'Maîtrisé',
      icon: CheckCircle2,
      classes: 'bg-emerald-500/12 text-emerald-400 border-emerald-500/25',
    },
    'acquis': {
      label: 'Acquis',
      icon: CheckCircle2,
      classes: 'bg-blue-500/12 text-blue-400 border-blue-500/25',
    },
    'en-acquisition': {
      label: 'En cours',
      icon: Clock,
      classes: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    },
  };
  const { label, icon: Icon, classes } = config[niveau];
  const sz = size === 'sm' ? 11 : 13;
  const textSz = size === 'sm' ? 'text-xs' : 'text-xs';
  const px = size === 'sm' ? 'px-2 py-0.5' : 'px-2.5 py-1';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border font-semibold ${classes} ${textSz} ${px}`}>
      <Icon size={sz} />
      {label}
    </span>
  );
};

// ── Indicateur AC ──────────────────────────────────────────────
const AcIndicator: FC<{ niveau: NiveauMaitrise }> = ({ niveau }) => {
  if (niveau === 'maitrise') return <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />;
  if (niveau === 'acquis') return <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />;
  return <Clock size={13} className="text-amber-400 shrink-0 mt-0.5" />;
};

// ── Carte compétence ───────────────────────────────────────────
const CompetenceCard: FC<{ competence: Competence }> = ({ competence }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[competence.icone] || TrendingUp;
  const badgeVariant = colorMap[competence.couleur];
  const projetsLies = projets.filter((p) => p.competencesLiees.includes(competence.id));

  const acMaitrise = competence.apprentissagesCritiques.filter(a => a.maitrise === 'maitrise').length;
  const acAcquis = competence.apprentissagesCritiques.filter(a => a.maitrise === 'acquis').length;
  const acTotal = competence.apprentissagesCritiques.length;

  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card rounded-2xl border overflow-hidden transition-all duration-300"
      style={{ borderColor: `${competence.couleurAccent}20` }}
    >
      {/* Header */}
      <div className="p-5 sm:p-6">
        {/* Titre + badge maîtrise */}
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
              <p className="text-xs mt-0.5" style={{ color: `${competence.couleurAccent}bb` }}>
                {competence.niveauIntitule.split('—')[0].trim()}
              </p>
            </div>
          </div>
          <MaitriseBadge niveau={competence.maitrise} />
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{competence.description}</p>

        {/* Ce que je sais faire */}
        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: `${competence.couleurAccent}cc` }}>
            Ce que je sais faire
          </p>
          <ul className="space-y-1.5">
            {competence.savoirFaire.map((sf, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ background: competence.couleurAccent }}
                />
                {sf}
              </li>
            ))}
          </ul>
        </div>

        {/* Résumé AC */}
        <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4 flex-wrap">
          <span className="flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-400" />
            {acMaitrise} maîtrisé{acMaitrise > 1 ? 's' : ''}
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 size={12} className="text-blue-400" />
            {acAcquis} acquis
          </span>
          <span className="text-zinc-600">/ {acTotal} apprentissages critiques</span>
        </div>

        {/* Projets associés */}
        {projetsLies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {projetsLies.map((p) => (
              <Badge key={p.id} variant={badgeVariant} size="sm">
                {p.annee} · {p.titre.split('—')[0].replace('SAÉ ', '').trim().substring(0, 25)}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Expand — AC détaillés + CE */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-3 border-t text-xs font-semibold text-zinc-500 hover:text-zinc-300 transition-colors"
        style={{ borderColor: `${competence.couleurAccent}12` }}
      >
        <span>Apprentissages critiques détaillés</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 space-y-5">
              {/* AC avec niveau */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: competence.couleurAccent }}>
                  Apprentissages critiques
                </h4>
                <ul className="space-y-2.5">
                  {competence.apprentissagesCritiques.map((ac) => (
                    <li key={ac.id} className="flex items-start gap-2.5">
                      <AcIndicator niveau={ac.maitrise} />
                      <div className="flex-1 min-w-0">
                        <span className="text-zinc-300 text-xs leading-relaxed">{ac.libelle}</span>
                        <span className="ml-2 inline-block"><MaitriseBadge niveau={ac.maitrise} size="sm" /></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CE */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-500">
                  Composantes essentielles
                </h4>
                <ul className="space-y-2">
                  {competence.composantesEssentielles.map((ce) => (
                    <li key={ce.id} className="flex items-start gap-2 text-xs text-zinc-500">
                      <Circle size={5} className="mt-1.5 shrink-0 fill-zinc-600 text-zinc-600" />
                      {ce.libelle}
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

// ── Section ────────────────────────────────────────────────────
const CompetencesSection: FC = () => {
  const maitrisees = competences.filter(c => c.maitrise === 'maitrise').length;
  const acquises = competences.filter(c => c.maitrise === 'acquis').length;

  return (
    <section id="competences" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="BUT TC3 — Parcours P3"
            title="Mes "
            highlight="compétences"
            subtitle="5 blocs de compétences mobilisés à travers les SAÉ, les projets et les mises en situation professionnelle."
          />
        </div>

        {/* Légende niveaux */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/8 border border-emerald-500/20">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">{maitrisees} Maîtrisé</span>
            <span className="text-zinc-600 text-xs">— utilisé de façon autonome en situation complexe</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/8 border border-blue-500/20">
            <CheckCircle2 size={14} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold">{acquises} Acquis</span>
            <span className="text-zinc-600 text-xs">— mobilisé efficacement avec quelques appuis</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/8 border border-amber-500/20">
            <Clock size={14} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">En cours</span>
            <span className="text-zinc-600 text-xs">— en développement sur BUT3</span>
          </div>
        </motion.div>

        {/* Grille */}
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
      </div>
    </section>
  );
};

export default CompetencesSection;
