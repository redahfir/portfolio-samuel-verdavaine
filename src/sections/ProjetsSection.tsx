import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ArrowUpRight, ChevronRight, Wrench, BookOpen, AlertCircle, Eye, Plus
} from 'lucide-react';
import PlaceholderZone from '../components/ui/PlaceholderZone';
import { projets } from '../data/projets';
import { competences } from '../data/competences';
import { fadeInUp, viewportConfig } from '../utils/animations';
import { accentColor } from '../utils/colors';
import { useTheme } from '../context/ThemeContext';
import type { Projet } from '../types';

const anneeColors: Record<string, { text: string; bg: string; border: string }> = {
  BUT1: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  BUT2: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  BUT3: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
};

// ── Modal détail ────────────────────────────────────────────────
const ProjetModal: FC<{ projet: Projet; onClose: () => void }> = ({ projet, onClose }) => {
  const { theme } = useTheme();
  const ac = anneeColors[projet.annee];
  const compLiees = projet.competencesLiees.map(id => competences.find(c => c.id === id)).filter(Boolean);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={onClose} />

      <motion.div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[92vh] overflow-y-auto bg-[#0d0d18] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl"
        initial={{ y: 24, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 24, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      >
        {/* Header modal */}
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

        {/* Corps modal */}
        <div className="p-6 space-y-8">
          <p className="text-zinc-300 text-base leading-relaxed">{projet.description}</p>

          {/* Contexte + Problématique */}
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

          {/* Rôle */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-2">Mon rôle</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{projet.role}</p>
          </div>

          {/* Actions réalisées */}
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

          {/* Outils */}
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

          {/* Compétences BUT */}
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

          {/* Preuves */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold mb-3">Preuves & traces</p>
            <div className="space-y-2">
              {projet.preuves.map((p, i) => (
                <PlaceholderZone key={i} label={p.libelle} type={p.type.toUpperCase()} compact fournie={p.fournie} url={p.url} />
              ))}
            </div>
          </div>

          {/* Résultats */}
          <div className="p-5 rounded-xl border-l-2 border-blue-500 bg-blue-500/5">
            <p className="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-2">Résultats</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{projet.resultats}</p>
          </div>

          {/* Apprentissages */}
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

          {/* Analyse réflexive */}
          <div className="p-5 rounded-xl bg-white/3 border border-white/7">
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-2">Analyse réflexive</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{projet.analyseReflexive}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Ligne SAÉ (style liste numérotée) ──────────────────────────
const ProjetRow: FC<{ projet: Projet; index: number; onClick: () => void }> = ({ projet, index, onClick }) => {
  const { theme } = useTheme();
  const ac = anneeColors[projet.annee];
  const compLiees = projet.competencesLiees.map(id => competences.find(c => c.id === id)).filter(Boolean);
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div variants={fadeInUp}>
      <button
        onClick={onClick}
        className="w-full text-left group py-6 sm:py-7 border-b border-white/6 hover:border-white/12 transition-all duration-300 flex items-start gap-5 sm:gap-8"
      >
        {/* Numéro */}
        <span className="sae-number pt-1 w-6 shrink-0 group-hover:text-zinc-500 transition-colors">{num}</span>

        {/* Contenu principal */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`tag ${ac.text} ${ac.bg} ${ac.border}`}>{projet.annee}</span>
            <span className="text-xs text-zinc-600">{projet.categorie}</span>
          </div>

          <h3 className="font-display text-white font-semibold text-base sm:text-xl leading-tight mb-2 group-hover:text-blue-100 transition-colors">
            {projet.titre}
          </h3>

          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-1 sm:line-clamp-2 mb-3">{projet.description}</p>

          {/* Compétences chips */}
          <div className="flex flex-wrap gap-1.5">
            {compLiees.map(comp => comp && (
              <span
                key={comp.id}
                className="text-xs px-2.5 py-0.5 rounded-full border"
                style={{
                  color: accentColor(comp, theme),
                  borderColor: `${accentColor(comp, theme)}28`,
                  background: `${accentColor(comp, theme)}0d`,
                }}
              >
                {comp.titre}
              </span>
            ))}
          </div>
        </div>

        {/* Flèche */}
        <div className="shrink-0 pt-1">
          <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300">
            <ArrowUpRight size={15} className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </button>
    </motion.div>
  );
};

// ── Section principale ──────────────────────────────────────────
const ProjetsSection: FC = () => {
  const [selected, setSelected] = useState<Projet | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'BUT1', label: 'BUT 1' },
    { id: 'BUT2', label: 'BUT 2' },
    { id: 'BUT3', label: 'BUT 3' },
  ];

  const filtered = filter === 'all' ? projets : projets.filter(p => p.annee === filter);

  return (
    <section id="projets" className="py-24 sm:py-32 bg-[#0a0a14] relative">
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
            <p className="text-xs text-zinc-600 tracking-[0.2em] uppercase font-medium mb-4">03 — SAÉ & Projets</p>
            <h2 className="display-title text-4xl sm:text-5xl text-white">
              Études de cas
            </h2>
            <p className="text-zinc-500 text-base mt-3 max-w-lg">
              7 situations d'apprentissage et d'évaluation de BUT1 à BUT3 — chaque projet est une démonstration concrète de compétences.
            </p>
          </div>

          {/* Filtres */}
          <div className="flex items-center gap-2 bg-white/4 border border-white/8 rounded-full p-1 shrink-0 overflow-x-auto">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === f.id
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Liste SAÉ */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* En-tête colonnes */}
              <div className="flex items-center gap-5 sm:gap-8 pb-3 border-b border-white/6">
                <span className="w-6 shrink-0" />
                <div className="flex-1 flex items-center gap-8">
                  <span className="text-xs text-zinc-700 uppercase tracking-widest">Projet</span>
                </div>
                <div className="w-9 shrink-0" />
              </div>

              {filtered.map((projet) => (
                <ProjetRow
                  key={projet.id}
                  projet={projet}
                  index={projets.indexOf(projet)}
                  onClick={() => setSelected(projet)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ajout preuve CTA */}
        <motion.div
          className="mt-10 flex items-center gap-3 text-sm text-zinc-600"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <Plus size={14} />
          <span>
            Les zones marquées <span className="text-blue-500">Ajouter ici</span> sont à compléter avec vos preuves réelles dans <code className="text-xs bg-white/6 px-1.5 py-0.5 rounded">src/data/projets.ts</code>
          </span>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjetModal projet={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjetsSection;
