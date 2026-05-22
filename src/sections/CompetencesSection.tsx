import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
  ChevronDown, CheckCircle2, Clock, ArrowUpRight
} from 'lucide-react';
import React from 'react';
import { competences } from '../data/competences';
import { projets } from '../data/projets';
import { fadeInUp, viewportConfig } from '../utils/animations';
import type { Competence, NiveauMaitrise } from '../types';

const iconMap: Record<string, FC<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
};

// ── Badge de maîtrise ──────────────────────────────────────────
const MaitriseBadge: FC<{ niveau: NiveauMaitrise }> = ({ niveau }) => {
  if (niveau === 'maitrise') return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5">
      <CheckCircle2 size={10} /> Maîtrisé
    </span>
  );
  if (niveau === 'acquis') return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-2.5 py-0.5">
      <CheckCircle2 size={10} /> Acquis
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-2.5 py-0.5">
      <Clock size={10} /> En cours
    </span>
  );
};

// ── Ligne compétence ───────────────────────────────────────────
const CompetenceRow: FC<{ competence: Competence; index: number }> = ({ competence, index }) => {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[competence.icone] || TrendingUp;
  const num = String(index + 1).padStart(2, '0');
  const projetsLies = projets.filter(p => p.competencesLiees.includes(competence.id));
  const acMaitrise = competence.apprentissagesCritiques.filter(a => a.maitrise === 'maitrise').length;
  const acTotal = competence.apprentissagesCritiques.length;

  return (
    <motion.div variants={fadeInUp} className="border-b border-white/6 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group py-6 sm:py-7 flex items-start gap-5 sm:gap-8 hover:border-white/12 transition-all duration-300"
      >
        {/* Numéro */}
        <span className="sae-number pt-1 w-6 shrink-0 group-hover:text-zinc-500 transition-colors">{num}</span>

        {/* Icône + contenu */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${competence.couleurAccent}15` }}
            >
              <Icon size={14} style={{ color: competence.couleurAccent }} />
            </div>
            <h3 className="font-display text-white font-semibold text-lg sm:text-xl leading-tight group-hover:text-blue-100 transition-colors">
              {competence.titre}
            </h3>
            <MaitriseBadge niveau={competence.maitrise} />
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed mb-3 line-clamp-2">{competence.description}</p>

          {/* Savoir-faire preview (3 premiers) — masqué sur mobile */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {competence.savoirFaire.slice(0, 3).map((sf, i) => (
              <span key={i} className="text-xs text-zinc-500 border border-white/8 rounded-full px-2.5 py-0.5">
                {sf.length > 40 ? sf.substring(0, 40) + '…' : sf}
              </span>
            ))}
            {competence.savoirFaire.length > 3 && (
              <span className="text-xs text-zinc-600 px-1 py-0.5">+{competence.savoirFaire.length - 3}</span>
            )}
          </div>
        </div>

        {/* Stats + toggle */}
        <div className="shrink-0 flex flex-col items-end gap-2 pt-1">
          <span className="text-xs text-zinc-600">{acMaitrise}/{acTotal} AC</span>
          <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? 'border-blue-500/40 bg-blue-500/10' : 'border-white/10 group-hover:border-white/20'}`}>
            <ChevronDown
              size={14}
              className={`transition-all duration-300 ${open ? 'rotate-180 text-blue-400' : 'text-zinc-600 group-hover:text-zinc-400'}`}
            />
          </div>
        </div>
      </button>

      {/* Panneau dépliable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-0 sm:pl-14 grid sm:grid-cols-2 gap-8">

              {/* Colonne 1 — Savoir-faire + Projets */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-3">Ce que je sais faire</p>
                  <ul className="space-y-2">
                    {competence.savoirFaire.map((sf, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: competence.couleurAccent }}
                        />
                        {sf}
                      </li>
                    ))}
                  </ul>
                </div>

                {projetsLies.length > 0 && (
                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-2">SAÉ mobilisant cette compétence</p>
                    <div className="space-y-1.5">
                      {projetsLies.map(p => (
                        <div key={p.id} className="flex items-center gap-2 text-xs text-zinc-400">
                          <ArrowUpRight size={11} className="text-zinc-600" />
                          <span className="text-zinc-600">{p.annee}</span>
                          <span>{p.titre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Colonne 2 — Apprentissages critiques */}
              <div>
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-3">Apprentissages critiques</p>
                <ul className="space-y-3">
                  {competence.apprentissagesCritiques.map(ac => (
                    <li key={ac.id} className="flex items-start gap-2.5">
                      {ac.maitrise === 'maitrise' ? (
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      ) : ac.maitrise === 'acquis' ? (
                        <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                      ) : (
                        <Clock size={13} className="text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <span className="text-zinc-400 text-xs leading-relaxed">{ac.libelle}</span>
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

// ── Section principale ─────────────────────────────────────────
const CompetencesSection: FC = () => {
  const maitrisees = competences.filter(c => c.maitrise === 'maitrise').length;
  const acquises = competences.filter(c => c.maitrise === 'acquis').length;

  return (
    <section id="competences" className="py-24 sm:py-32 bg-[#07070f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/7 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header section */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div>
            <p className="text-xs text-zinc-600 tracking-[0.2em] uppercase font-medium mb-4">02 — Compétences BUT</p>
            <h2 className="display-title text-4xl sm:text-5xl text-white">
              5 blocs de<br />compétences
            </h2>
            <p className="text-zinc-500 text-base mt-3 max-w-lg">
              Parcours P3 — Business Développement & Management de la Relation Client. Chaque compétence est ancrée dans des SAÉ concrètes.
            </p>
          </div>

          {/* Légende */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
              <CheckCircle2 size={11} /> {maitrisees} Maîtrisé{maitrisees > 1 ? 's' : ''}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5">
              <CheckCircle2 size={11} /> {acquises} Acquis
            </span>
          </div>
        </motion.div>

        {/* En-tête colonnes */}
        <div className="flex items-center gap-5 sm:gap-8 pb-3 border-b border-white/6 mb-2">
          <span className="w-6 shrink-0" />
          <div className="flex-1">
            <span className="text-xs text-zinc-700 uppercase tracking-widest">Compétence</span>
          </div>
          <div className="w-9 shrink-0" />
        </div>

        {/* Liste compétences */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {competences.map((comp, i) => (
            <CompetenceRow key={comp.id} competence={comp} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompetencesSection;
