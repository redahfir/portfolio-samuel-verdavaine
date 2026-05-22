import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
  ChevronDown, ChevronUp, FileText, CheckSquare, Layers, BookOpen
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import PlaceholderZone from '../components/ui/PlaceholderZone';
import { entreesReflexives } from '../data/reflexif';
import { competences } from '../data/competences';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations';
import type { EntreeReflexive } from '../types';

const iconMap: Record<string, FC<{ size?: number; style?: object }>> = {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
};

const compIconMap: Record<string, string> = {
  marketing: 'TrendingUp',
  vente: 'Handshake',
  communication: 'Megaphone',
  'business-dev': 'Rocket',
  'relation-client': 'Heart',
};

const EntreeReflexiveCard: FC<{ entree: EntreeReflexive; index: number }> = ({ entree }) => {
  const [expanded, setExpanded] = useState(false);
  const comp = competences.find((c) => c.id === entree.competenceId);
  if (!comp) return null;
  const Icon = iconMap[compIconMap[entree.competenceId]] || TrendingUp;

  // Detect if content is a TODO placeholder
  const isTodo = (text: string) => text.startsWith('TODO');

  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card rounded-2xl border overflow-hidden"
      style={{ borderColor: `${comp.couleurAccent}20` }}
    >
      {/* Header */}
      <div
        className="p-5 sm:p-6"
        style={{ background: `linear-gradient(135deg, ${comp.couleurAccent}08, transparent)` }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${comp.couleurAccent}15` }}
          >
            <Icon size={20} style={{ color: comp.couleurAccent }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-white font-bold text-base">{comp.titre}</h3>
                <p className="text-xs mt-0.5" style={{ color: `${comp.couleurAccent}cc` }}>
                  {comp.niveauIntitule}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Situation */}
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
            Situation sélectionnée
          </p>
          <p className="text-zinc-200 text-sm font-medium">{entree.situationSelectionnee}</p>
        </div>

        {/* Pertinence du choix */}
        <div className="mt-3">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
            Pertinence du choix
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {isTodo(entree.pertinenceChoix) ? (
              <span className="text-amber-400 italic">{entree.pertinenceChoix}</span>
            ) : entree.pertinenceChoix}
          </p>
        </div>
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-3 border-t text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors"
        style={{ borderColor: `${comp.couleurAccent}12` }}
      >
        <span>Détail du tableau réflexif</span>
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
            <div className="px-5 sm:px-6 pb-6 space-y-5">

              {/* Traces choisies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 text-zinc-500">
                  <FileText size={12} /> Traces choisies
                </h4>
                <div className="space-y-2">
                  {entree.tracesChoisies.map((trace, i) => (
                    <PlaceholderZone key={i} label={trace} type="TRACE" compact />
                  ))}
                </div>
              </div>

              {/* AC travaillés */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 text-zinc-500">
                  <CheckSquare size={12} /> Apprentissages critiques travaillés
                </h4>
                <ul className="space-y-1.5">
                  {entree.apprentissagesCritiques.map((ac, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: comp.couleurAccent }}
                      />
                      {ac}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CE */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 text-zinc-500">
                  <Layers size={12} /> Composantes essentielles
                </h4>
                <ul className="space-y-1.5">
                  {entree.composantesEssentielles.map((ce, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                      {ce}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pertinence des traces */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-zinc-500">
                  Pertinence des traces
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {isTodo(entree.pertinenceTraces) ? (
                    <span className="text-amber-400 italic">{entree.pertinenceTraces}</span>
                  ) : entree.pertinenceTraces}
                </p>
              </div>

              {/* Bilan */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: `${comp.couleurAccent}08`,
                  borderLeft: `3px solid ${comp.couleurAccent}`,
                }}
              >
                <h4
                  className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"
                  style={{ color: comp.couleurAccent }}
                >
                  <BookOpen size={12} /> Bilan des apprentissages
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {isTodo(entree.bilanApprentissages) ? (
                    <span className="text-amber-400 italic">{entree.bilanApprentissages}</span>
                  ) : entree.bilanApprentissages}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ReflexifSection: FC = () => {
  return (
    <section id="reflexif" className="py-24 bg-dark-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="Démarche réflexive"
            title="Analyse "
            highlight="réflexive"
            subtitle="Pour chaque compétence BUT, une situation représentative est analysée : pertinence du choix, traces mobilisées, apprentissages critiques et bilan personnel."
          />
        </div>

        {/* Info banner */}
        <motion.div
          className="mb-10 rounded-2xl p-4 bg-amber-500/8 border border-amber-500/20 flex items-start gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0">
            <FileText size={16} className="text-amber-400" />
          </div>
          <div>
            <p className="text-amber-300 text-sm font-semibold mb-0.5">Tableau réflexif en cours de construction</p>
            <p className="text-amber-400/70 text-xs leading-relaxed">
              Les sections marquées TODO sont à compléter avec les informations personnelles et les preuves réelles.
              Les traces indiquées sont à ajouter en remplaçant les zones de placeholder.
            </p>
          </div>
        </motion.div>

        {/* Entrées réflexives */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {entreesReflexives.map((entree, i) => (
            <EntreeReflexiveCard key={entree.competenceId} entree={entree} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReflexifSection;
