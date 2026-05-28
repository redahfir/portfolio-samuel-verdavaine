import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronRight, Wrench, BookOpen, AlertCircle, Eye,
  FileText, Image, ZoomIn
} from 'lucide-react';
import ProofViewer from './ProofViewer';
import { competences } from '../../data/competences';
import { accentColor } from '../../utils/colors';
import { useTheme } from '../../context/ThemeContext';
import type { Projet } from '../../types';

export const anneeColors: Record<string, { text: string; bg: string; border: string }> = {
  BUT1: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  BUT2: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  BUT3: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
};

// ── Carte preuve cliquable ─────────────────────────────────────
const ProofCard: FC<{
  libelle: string;
  type: string;
  fournie: boolean;
  url?: string;
  onOpen: () => void;
}> = ({ libelle, type, fournie, url, onOpen }) => {
  const isImage = url ? /\.(png|jpg|jpeg|gif|webp)$/i.test(url) : false;

  if (fournie && url) {
    return (
      <button
        onClick={onOpen}
        className="w-full flex items-center gap-3 p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/35 transition-all duration-200 group text-left"
      >
        <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
          {isImage
            ? <Image size={15} className="text-emerald-400" />
            : <FileText size={15} className="text-emerald-400" />
          }
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-emerald-500 uppercase tracking-wider font-semibold mb-0.5">{type}</p>
          <p className="text-emerald-300 text-xs font-medium leading-snug">{libelle}</p>
        </div>
        <div className="shrink-0 flex items-center gap-1 text-emerald-500/50 group-hover:text-emerald-400 transition-colors">
          <ZoomIn size={13} />
          <span className="text-xs hidden sm:block">Voir</span>
        </div>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-white/6 bg-white/2">
      <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
        <FileText size={15} className="text-zinc-600" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-zinc-700 uppercase tracking-wider font-semibold mb-0.5">{type}</p>
        <p className="text-zinc-600 text-xs leading-snug">{libelle}</p>
      </div>
    </div>
  );
};

// ── Modal principal ────────────────────────────────────────────
const ProjetModal: FC<{ projet: Projet; onClose: () => void }> = ({ projet, onClose }) => {
  const { theme } = useTheme();
  const [viewer, setViewer] = useState<{ url: string; label: string } | null>(null);
  const ac = anneeColors[projet.annee];
  const compLiees = projet.competencesLiees.map(id => competences.find(c => c.id === id)).filter(Boolean);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={onClose} />

        <motion.div
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0d0d18] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl"
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 24, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#0d0d18]/95 backdrop-blur-sm border-b border-white/7 p-6 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`tag ${ac.text} ${ac.bg} ${ac.border}`}>{projet.annee}</span>
                <span className="tag text-zinc-400 bg-white/5 border-white/10">{projet.categorie}</span>
              </div>
              <h2 className="font-display text-xl font-bold text-white leading-tight">{projet.titre}</h2>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/25 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          {/* Corps */}
          <div className="p-6 space-y-8">
            <p className="text-zinc-300 text-base leading-relaxed">{projet.description}</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-3">
                  <Eye size={11} /> Contexte
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">{projet.contexte}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-3">
                  <AlertCircle size={11} /> Problématique
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed italic">{projet.problematique}</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-2">Mon rôle</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{projet.role}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-3">
                <BookOpen size={11} /> Actions réalisées
              </p>
              <ul className="space-y-2">
                {projet.actionsRealisees.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <ChevronRight size={13} className="mt-0.5 shrink-0 text-zinc-600" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-3">
                <Wrench size={11} /> Outils & méthodes
              </p>
              <div className="flex flex-wrap gap-2">
                {projet.outils.map(o => (
                  <span key={o} className="text-xs text-zinc-400 border border-white/8 rounded-full px-3 py-1">{o}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-3">Compétences BUT mobilisées</p>
              <div className="flex flex-wrap gap-2">
                {compLiees.map(comp => comp && (
                  <span
                    key={comp.id}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                    style={{
                      color: accentColor(comp, theme),
                      borderColor: `${accentColor(comp, theme)}35`,
                      background: `${accentColor(comp, theme)}10`,
                    }}
                  >
                    {comp.titre}
                  </span>
                ))}
              </div>
            </div>

            {/* Preuves — cliquables pour ouvrir le visualiseur */}
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-3">
                Preuves & traces
                {projet.preuves.some(p => p.fournie) && (
                  <span className="ml-2 text-emerald-500/60 normal-case tracking-normal font-normal">— cliquer pour visualiser</span>
                )}
              </p>
              <div className="space-y-2">
                {projet.preuves.map((p, i) => (
                  <ProofCard
                    key={i}
                    libelle={p.libelle}
                    type={p.type.toUpperCase()}
                    fournie={p.fournie}
                    url={p.url}
                    onOpen={() => p.url && setViewer({ url: p.url, label: p.libelle })}
                  />
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border-l-2 border-blue-500 bg-blue-500/5">
              <p className="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-2">Résultats</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{projet.resultats}</p>
            </div>

            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-3">Ce que j'ai appris</p>
              <ul className="space-y-2">
                {projet.apprentissages.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white/3 border border-white/7">
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-2">Analyse réflexive</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{projet.analyseReflexive}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

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
    </>
  );
};

export default ProjetModal;
