import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import ProjetModal, { anneeColors } from '../components/ui/ProjetModal';
import { projets } from '../data/projets';
import { competences } from '../data/competences';
import { fadeInUp, viewportConfig } from '../utils/animations';
import { accentColor } from '../utils/colors';
import { useTheme } from '../context/ThemeContext';
import type { Projet } from '../types';

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
        <span className="sae-number pt-1 w-6 shrink-0 group-hover:text-zinc-500 transition-colors">{num}</span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`tag ${ac.text} ${ac.bg} ${ac.border}`}>{projet.annee}</span>
            <span className="text-xs text-zinc-600">{projet.categorie}</span>
          </div>

          <h3 className="font-display text-white font-semibold text-base sm:text-xl leading-tight mb-2 group-hover:text-blue-100 transition-colors">
            {projet.titre}
          </h3>

          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-1 sm:line-clamp-2 mb-3">{projet.description}</p>

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

          <div className="flex items-center gap-2 bg-white/4 border border-white/8 rounded-full p-1 shrink-0 overflow-x-auto">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === f.id ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
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

      <AnimatePresence>
        {selected && <ProjetModal projet={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjetsSection;
