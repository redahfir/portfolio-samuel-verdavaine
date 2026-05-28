import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
  ChevronDown, CheckCircle2, Clock, ArrowUpRight,
  FileText, X, Image, ZoomIn
} from 'lucide-react';
import React from 'react';
import ProofViewer from '../components/ui/ProofViewer';
import { competences } from '../data/competences';
import { projets } from '../data/projets';
import { fadeInUp, viewportConfig } from '../utils/animations';
import { accentColor } from '../utils/colors';
import { useTheme } from '../context/ThemeContext';
import type { Competence, NiveauMaitrise, Projet } from '../types';

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

// ── Mini-carte preuve dans le panneau compétence ───────────────
const ProjetPreuveCard: FC<{
  projet: Projet;
  onClose: () => void;
  onOpenViewer: (url: string, label: string) => void;
}> = ({ projet, onClose, onOpenViewer }) => {
  const preuve = projet.preuves.find(p => p.fournie && p.url);
  const isImage = preuve?.url ? /\.(png|jpg|jpeg|gif|webp)$/i.test(preuve.url) : false;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 'auto' }}
      exit={{ opacity: 0, y: -8, height: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="mb-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-3 border-b border-emerald-500/10">
          <div>
            <p className="text-xs text-emerald-500 uppercase tracking-wider font-semibold mb-0.5">Preuve SAÉ</p>
            <p className="text-white text-sm font-medium">{projet.titre}</p>
            <p className="text-zinc-500 text-xs mt-0.5">{projet.annee} — {projet.categorie}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={12} />
          </button>
        </div>

        {/* Aperçu image miniature */}
        {preuve && isImage && (
          <div
            className="relative group cursor-pointer"
            onClick={() => preuve.url && onOpenViewer(preuve.url, preuve.libelle)}
          >
            <img
              src={preuve.url}
              alt={preuve.libelle}
              className="w-full max-h-52 object-contain bg-black/20"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition-all duration-200 opacity-0 group-hover:opacity-100">
              <span className="flex items-center gap-1.5 text-white text-xs font-semibold bg-black/70 px-3 py-1.5 rounded-full">
                <ZoomIn size={11} /> Agrandir
              </span>
            </div>
          </div>
        )}

        {/* Bouton ouvrir */}
        {preuve && (
          <button
            onClick={() => preuve.url && onOpenViewer(preuve.url, preuve.libelle)}
            className="w-full flex items-center gap-3 p-3 hover:bg-emerald-500/8 transition-all duration-200 group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
              {isImage ? <Image size={14} className="text-emerald-400" /> : <FileText size={14} className="text-emerald-400" />}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-emerald-300 text-xs font-semibold truncate">{preuve.libelle}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{isImage ? 'Cliquer pour agrandir' : 'Cliquer pour lire le PDF'}</p>
            </div>
            <ZoomIn size={13} className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors shrink-0" />
          </button>
        )}

        {!preuve && (
          <div className="p-4 text-center">
            <p className="text-zinc-600 text-xs">Aucune preuve disponible.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ── Ligne compétence ───────────────────────────────────────────
const CompetenceRow: FC<{ competence: Competence; index: number; onOpenViewer: (url: string, label: string) => void }> = ({ competence, index, onOpenViewer }) => {
  const [open, setOpen] = useState(false);
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);
  const { theme } = useTheme();
  const accent = accentColor(competence, theme);
  const Icon = iconMap[competence.icone] || TrendingUp;
  const num = String(index + 1).padStart(2, '0');
  const projetsLies = projets.filter(p => p.competencesLiees.includes(competence.id));
  const acMaitrise = competence.apprentissagesCritiques.filter(a => a.maitrise === 'maitrise').length;
  const acTotal = competence.apprentissagesCritiques.length;

  const handleProjetClick = (projet: Projet) => {
    setSelectedProjet(prev => prev?.id === projet.id ? null : projet);
  };

  return (
    <motion.div variants={fadeInUp} className="border-b border-white/6 last:border-0">
      <button
        onClick={() => { setOpen(!open); if (open) setSelectedProjet(null); }}
        className="w-full text-left group py-6 sm:py-7 flex items-start gap-5 sm:gap-8 transition-all duration-300"
      >
        <span className="sae-number pt-1 w-6 shrink-0 group-hover:text-zinc-500 transition-colors">{num}</span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${accent}15` }}>
              <Icon size={14} style={{ color: accent }} />
            </div>
            <h3 className="font-display text-white font-semibold text-lg sm:text-xl leading-tight group-hover:text-blue-100 transition-colors">
              {competence.titre}
            </h3>
            <MaitriseBadge niveau={competence.maitrise} />
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed mb-3 line-clamp-2">{competence.description}</p>

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

        <div className="shrink-0 flex flex-col items-end gap-2 pt-1">
          <span className="text-xs text-zinc-600">{acMaitrise}/{acTotal} AC</span>
          <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${open ? 'border-blue-500/40 bg-blue-500/10' : 'border-white/10 group-hover:border-white/20'}`}>
            <ChevronDown size={14} className={`transition-all duration-300 ${open ? 'rotate-180 text-blue-400' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
          </div>
        </div>
      </button>

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

              {/* Colonne 1 */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-3" style={{ color: accent }}>
                    Ce que je sais faire
                  </p>
                  <ul className="space-y-2">
                    {competence.savoirFaire.map((sf, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: accent }} />
                        {sf}
                      </li>
                    ))}
                  </ul>
                </div>

                {projetsLies.length > 0 && (
                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-2">
                      SAÉ mobilisant cette compétence
                      <span className="ml-1.5 text-zinc-700 normal-case tracking-normal font-normal">— cliquer pour voir la preuve</span>
                    </p>
                    <div className="space-y-1">
                      {projetsLies.map(p => {
                        const hasProof = p.preuves.some(pr => pr.fournie && pr.url);
                        const isSelected = selectedProjet?.id === p.id;
                        return (
                          <div key={p.id}>
                            <button
                              onClick={() => handleProjetClick(p)}
                              className={`w-full flex items-center gap-2 text-xs px-3 py-2 rounded-lg transition-all duration-200 ${
                                isSelected
                                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'
                                  : hasProof
                                    ? 'hover:bg-white/5 border border-transparent text-zinc-400 hover:text-white'
                                    : 'border border-transparent text-zinc-500 cursor-default'
                              }`}
                            >
                              <ArrowUpRight size={11} className={isSelected ? 'text-emerald-400' : 'text-zinc-600'} />
                              <span className="text-zinc-500 shrink-0">{p.annee}</span>
                              <span className="flex-1 text-left">{p.titre}</span>
                              {hasProof && (
                                <span className={`shrink-0 flex items-center gap-1 ${isSelected ? 'text-emerald-400' : 'text-zinc-600'}`}>
                                  <FileText size={10} />
                                  <span className="text-xs">preuve</span>
                                </span>
                              )}
                            </button>

                            <AnimatePresence>
                              {isSelected && (
                                <ProjetPreuveCard
                                  projet={p}
                                  onClose={() => setSelectedProjet(null)}
                                  onOpenViewer={onOpenViewer}
                                />
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Colonne 2 */}
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
  const [viewer, setViewer] = useState<{ url: string; label: string } | null>(null);
  const maitrisees = competences.filter(c => c.maitrise === 'maitrise').length;
  const acquises = competences.filter(c => c.maitrise === 'acquis').length;

  return (
    <section id="competences" className="py-24 sm:py-32 bg-[#07070f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/7 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

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

          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5">
              <CheckCircle2 size={11} /> {maitrisees} Maîtrisé{maitrisees > 1 ? 's' : ''}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5">
              <CheckCircle2 size={11} /> {acquises} Acquis
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-5 sm:gap-8 pb-3 border-b border-white/6 mb-2">
          <span className="w-6 shrink-0" />
          <div className="flex-1">
            <span className="text-xs text-zinc-700 uppercase tracking-widest">Compétence</span>
          </div>
          <div className="w-9 shrink-0" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {competences.map((comp, i) => (
            <CompetenceRow
              key={comp.id}
              competence={comp}
              index={i}
              onOpenViewer={(url, label) => setViewer({ url, label })}
            />
          ))}
        </motion.div>
      </div>

      {/* Visualiseur plein écran */}
      <AnimatePresence>
        {viewer && (
          <ProofViewer
            url={viewer.url}
            label={viewer.label}
            onClose={() => setViewer(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompetencesSection;
