import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Handshake, Megaphone, Rocket, Heart,
  ChevronDown, ChevronUp, FileText, CheckSquare, Layers, BookOpen, ZoomIn
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ProofViewer from '../components/ui/ProofViewer';
import { entreesReflexives } from '../data/reflexif';
import { competences } from '../data/competences';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations';
import { accentColor } from '../utils/colors';
import { useTheme } from '../context/ThemeContext';
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

const EntreeReflexiveCard: FC<{
  entree: EntreeReflexive;
  index: number;
  onOpenViewer: (url: string, label: string) => void;
}> = ({ entree, onOpenViewer }) => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const comp = competences.find((c) => c.id === entree.competenceId);
  if (!comp) return null;
  const accent = accentColor(comp, theme);
  const Icon = iconMap[compIconMap[entree.competenceId]] || TrendingUp;
  const displayTitle = entree.titre || comp.titre;

  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card rounded-2xl border overflow-hidden"
      style={{ borderColor: `${accent}22` }}
    >
      {/* Header */}
      <div
        className="p-5 sm:p-6"
        style={{ background: `linear-gradient(135deg, ${accent}08, transparent)` }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${accent}15` }}
          >
            <Icon size={20} style={{ color: accent }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-white font-bold text-base">{displayTitle}</h3>
            <p className="text-xs mt-0.5" style={{ color: accent }}>
              {comp.niveauIntitule}
            </p>
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
          <p className="text-zinc-400 text-sm leading-relaxed">{entree.pertinenceChoix}</p>
        </div>

        {/* Bouton Voir la preuve */}
        {entree.preuveUrl && (
          <button
            onClick={() => onOpenViewer(entree.preuveUrl!, entree.tracesChoisies[0] || displayTitle)}
            className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border"
            style={{
              background: `${accent}12`,
              borderColor: `${accent}35`,
              color: accent,
            }}
          >
            <ZoomIn size={13} />
            Voir la preuve
          </button>
        )}
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 sm:px-6 py-3 border-t text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors"
        style={{ borderColor: `${accent}15` }}
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
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl border"
                      style={{ borderColor: `${accent}20`, background: `${accent}06` }}
                    >
                      <FileText size={13} style={{ color: accent }} className="shrink-0" />
                      <span className="text-zinc-300 text-xs">{trace}</span>
                    </div>
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
                <p className="text-zinc-400 text-sm leading-relaxed">{entree.pertinenceTraces}</p>
              </div>

              {/* Bilan */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: `${accent}08`,
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <h4
                  className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"
                  style={{ color: accent }}
                >
                  <BookOpen size={12} /> Bilan des apprentissages
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{entree.bilanApprentissages}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ReflexifSection: FC = () => {
  const [viewer, setViewer] = useState<{ url: string; label: string } | null>(null);

  return (
    <>
      <section id="reflexif" className="py-24 bg-dark-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-14 flex justify-center">
            <SectionTitle
              tag="Démarche réflexive"
              title="Analyse "
              highlight="réflexive"
              subtitle="Pour chaque SAÉ, une analyse de la situation choisie : pertinence du choix, traces mobilisées, apprentissages critiques et bilan personnel."
            />
          </div>

          {/* Entrées réflexives */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {entreesReflexives.map((entree, i) => (
              <EntreeReflexiveCard
                key={`${entree.competenceId}-${i}`}
                entree={entree}
                index={i}
                onOpenViewer={(url, label) => setViewer({ url, label })}
              />
            ))}
          </motion.div>

          {/* Conclusion réflexive */}
          <motion.div
            className="mt-14 rounded-2xl p-8 border border-white/8"
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(16,185,129,0.04))' }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} className="text-blue-400" />
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400">Conclusion réflexive</p>
            </div>
            <h3 className="font-display text-white font-bold text-xl mb-4">
              Bilan de trois ans de formation
            </h3>
            <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <p>
                L'ensemble de ces SAÉ m'a permis de mettre en pratique les compétences étudiées en BUT Techniques de Commercialisation. Chaque projet m'a apporté une expérience concrète dans un domaine différent : marketing, communication, gestion, entrepreneuriat, événementiel, omnicanalité et négociation.
              </p>
              <p>
                Ces réalisations montrent ma progression, ma capacité à travailler en équipe et mon évolution vers une posture plus professionnelle. Elles me permettent aussi de mieux valoriser mes compétences à travers des preuves concrètes et visibles dans mon portfolio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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

export default ReflexifSection;
