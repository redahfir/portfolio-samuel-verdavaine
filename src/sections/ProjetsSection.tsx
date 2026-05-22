import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Megaphone, Building2, Lightbulb,
  CalendarCheck, Globe, MessageSquare,
  X, ChevronRight, Wrench, Target, Eye, BookOpen, AlertCircle
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Badge from '../components/ui/Badge';
import PlaceholderZone from '../components/ui/PlaceholderZone';
import { projets } from '../data/projets';
import { competences } from '../data/competences';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations';
import type { Projet } from '../types';

const iconMap: Record<string, FC<{ size?: number; style?: object }>> = {
  BarChart3, Megaphone, Building2, Lightbulb,
  CalendarCheck, Globe, MessageSquare,
};

const anneeColors: Record<string, string> = {
  BUT1: '#3b82f6',
  BUT2: '#06b6d4',
  BUT3: '#10b981',
};

const anneeVariants: Record<string, 'blue' | 'cyan' | 'emerald'> = {
  BUT1: 'blue',
  BUT2: 'cyan',
  BUT3: 'emerald',
};

// ── Modal de détail projet ───────────────────────────────────
const ProjetModal: FC<{ projet: Projet; onClose: () => void }> = ({ projet, onClose }) => {
  const Icon = iconMap[projet.icone] || Globe;
  const color = anneeColors[projet.annee];
  const compLiees = projet.competencesLiees.map(
    (id) => competences.find((c) => c.id === id)
  ).filter(Boolean);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl" onClick={onClose} />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/10 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header */}
        <div
          className="p-6 border-b border-white/8"
          style={{ background: `linear-gradient(135deg, ${color}12, transparent)` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${color}20` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={anneeVariants[projet.annee]} size="sm">{projet.annee}</Badge>
                  <Badge variant="default" size="sm">{projet.categorie}</Badge>
                </div>
                <h2 className="font-display text-xl font-bold text-white leading-tight">{projet.titre}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-zinc-300 leading-relaxed">{projet.description}</p>

          {/* Grid 2col */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Contexte */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <Eye size={12} /> Contexte
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{projet.contexte}</p>
            </div>

            {/* Problématique */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <AlertCircle size={12} /> Problématique
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed italic">{projet.problematique}</p>
            </div>
          </div>

          {/* Rôle */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
              <Target size={12} /> Mon rôle
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{projet.role}</p>
          </div>

          {/* Objectifs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
              <Target size={12} /> Objectifs
            </h4>
            <ul className="space-y-1.5">
              {projet.objectifs.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                  <ChevronRight size={13} className="mt-0.5 shrink-0" style={{ color }} />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions réalisées */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
              <BookOpen size={12} /> Actions réalisées
            </h4>
            <ul className="space-y-1.5">
              {projet.actionsRealisees.map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
                  {action}
                </li>
              ))}
            </ul>
          </div>

          {/* Outils */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
              <Wrench size={12} /> Outils & méthodes
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {projet.outils.map((outil) => (
                <Badge key={outil} variant="default" size="sm">{outil}</Badge>
              ))}
            </div>
          </div>

          {/* Compétences BUT liées */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
              Compétences BUT mobilisées
            </h4>
            <div className="flex flex-wrap gap-2">
              {compLiees.map((comp) => comp && (
                <div
                  key={comp.id}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    color: comp.couleurAccent,
                    borderColor: `${comp.couleurAccent}30`,
                    background: `${comp.couleurAccent}10`,
                  }}
                >
                  {comp.titre}
                </div>
              ))}
            </div>
          </div>

          {/* Preuves / Traces */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
              Preuves & Traces
            </h4>
            <div className="space-y-2">
              {projet.preuves.map((preuve, i) => (
                <PlaceholderZone
                  key={i}
                  label={preuve.libelle}
                  type={preuve.type.toUpperCase()}
                  compact
                />
              ))}
            </div>
          </div>

          {/* Résultats */}
          <div
            className="rounded-xl p-4"
            style={{ background: `${color}08`, borderLeft: `3px solid ${color}` }}
          >
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color }}>
              Résultats
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{projet.resultats}</p>
          </div>

          {/* Apprentissages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
              Ce que j'ai appris
            </h4>
            <ul className="space-y-1.5">
              {projet.apprentissages.map((app, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          {/* Analyse réflexive */}
          <div className="rounded-xl p-4 bg-white/4 border border-white/8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Analyse réflexive
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{projet.analyseReflexive}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Carte projet (résumé) ────────────────────────────────────
const ProjetCard: FC<{ projet: Projet; onClick: () => void }> = ({ projet, onClick }) => {
  const Icon = iconMap[projet.icone] || Globe;
  const color = anneeColors[projet.annee];

  return (
    <motion.button
      variants={fadeInUp}
      onClick={onClick}
      className="glass-card rounded-2xl p-5 text-left w-full group hover:bg-white/7 transition-all duration-300 gradient-border border border-transparent hover:border-white/10"
      style={{ borderColor: `${color}15` }}
    >
      {/* Header card */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
          style={{ background: `${color}15` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={anneeVariants[projet.annee]} size="sm">{projet.annee}</Badge>
        </div>
      </div>

      <h3 className="font-display text-white font-bold text-sm mb-1 leading-tight group-hover:text-blue-100 transition-colors">
        {projet.titre}
      </h3>
      <p className="text-xs mb-3" style={{ color: `${color}cc` }}>{projet.categorie}</p>
      <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3 mb-4">{projet.description}</p>

      {/* Compétences */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {projet.competencesLiees.map((compId) => {
          const comp = competences.find((c) => c.id === compId);
          if (!comp) return null;
          return (
            <span
              key={compId}
              className="text-xs px-2 py-0.5 rounded-full border"
              style={{
                color: comp.couleurAccent,
                borderColor: `${comp.couleurAccent}25`,
                background: `${comp.couleurAccent}10`,
              }}
            >
              {comp.titre}
            </span>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-1 text-xs font-semibold" style={{ color }}>
        Voir l'étude de cas <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.button>
  );
};

// ── Section principale ───────────────────────────────────────
const ProjetsSection: FC = () => {
  const [selectedProjet, setSelectedProjet] = useState<Projet | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'BUT1', label: 'BUT1' },
    { id: 'BUT2', label: 'BUT2' },
    { id: 'BUT3', label: 'BUT3' },
  ];

  const filtered = filter === 'all' ? projets : projets.filter((p) => p.annee === filter);

  return (
    <section id="projets" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="SAÉ & Projets"
            title="Études de cas "
            highlight="professionnels"
            subtitle="7 projets détaillés, de BUT1 à BUT3 — contexte, problématique, rôle, actions, preuves, résultats et analyse réflexive."
          />
        </div>

        {/* Filtres */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === f.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/8'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid projets */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          key={filter}
        >
          {filtered.map((projet) => (
            <ProjetCard
              key={projet.id}
              projet={projet}
              onClick={() => setSelectedProjet(projet)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProjet && (
          <ProjetModal
            projet={selectedProjet}
            onClose={() => setSelectedProjet(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjetsSection;
