import React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, Megaphone, Building2, Lightbulb,
  CalendarCheck, Globe, MessageSquare
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Badge from '../components/ui/Badge';
import { fadeInLeft, fadeInRight, fadeInUp, viewportConfig } from '../utils/animations';

const iconMap: Record<string, FC<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  BarChart3, Megaphone, Building2, Lightbulb,
  CalendarCheck, Globe, MessageSquare,
};

const timelineData = [
  {
    annee: 'BUT1',
    couleur: '#3b82f6',
    bg: 'bg-blue-500',
    border: 'border-blue-500/30',
    badgeVariant: 'blue' as const,
    label: '2023 — 2024',
    projets: [
      {
        id: 'sae-marketing-b1',
        titre: 'SAÉ Marketing',
        sousTitre: 'Analyse marché produit',
        icone: 'BarChart3',
        competences: ['Marketing'],
        periode: 'Semestre 1',
        description: 'Première démarche marketing complète : PESTEL, SWOT, analyse concurrentielle et recommandations stratégiques.',
      },
      {
        id: 'com-challenge-b1',
        titre: 'Com Challenge',
        sousTitre: 'Communication fast-food valenciennois',
        icone: 'Megaphone',
        competences: ['Communication', 'Marketing'],
        periode: 'Semestre 2',
        description: 'Conception et présentation d\'une campagne de communication complète pour un fast-food local face à un jury.',
      },
      {
        id: 'sae-business-game-b1',
        titre: 'Business Game',
        sousTitre: 'Gestion d\'entreprise simulée',
        icone: 'Building2',
        competences: ['Business Dev', 'Vente'],
        periode: 'Semestre 2',
        description: 'Simulation de gestion d\'entreprise en équipe avec prises de décisions stratégiques en temps réel.',
      },
    ],
  },
  {
    annee: 'BUT2',
    couleur: '#06b6d4',
    bg: 'bg-cyan-500',
    border: 'border-cyan-500/30',
    badgeVariant: 'cyan' as const,
    label: '2024 — 2025',
    projets: [
      {
        id: 'sae-entrepreneuriat-b2',
        titre: 'SAÉ Entrepreneuriat',
        sousTitre: 'Création d\'entreprise',
        icone: 'Lightbulb',
        competences: ['Business Dev', 'Marketing'],
        periode: 'Semestre 3',
        description: 'Création d\'un projet entrepreneurial complet : étude de marché, Business Model Canvas, business plan et pitch investisseurs.',
      },
      {
        id: 'sae-job-dating-b2',
        titre: 'SAÉ Job Dating',
        sousTitre: 'Organisation événementielle',
        icone: 'CalendarCheck',
        competences: ['Relation Client', 'Communication'],
        periode: 'Semestre 4',
        description: 'Organisation d\'un événement Job Dating professionnel : coordination entreprises, communication et gestion du jour J.',
      },
    ],
  },
  {
    annee: 'BUT3',
    couleur: '#10b981',
    bg: 'bg-emerald-500',
    border: 'border-emerald-500/30',
    badgeVariant: 'emerald' as const,
    label: '2025 — 2026',
    projets: [
      {
        id: 'sae-omnicanalite-b3',
        titre: 'SAÉ Omnicanalité',
        sousTitre: 'Développement omnicanal',
        icone: 'Globe',
        competences: ['Relation Client', 'Marketing'],
        periode: 'Semestre 5',
        description: 'Conception d\'une stratégie omnicanale complète : audit des canaux, Customer Journey Map et recommandations d\'optimisation.',
      },
      {
        id: 'entretien-nego-b3',
        titre: 'Entretien Négociation',
        sousTitre: 'Vente complexe',
        icone: 'MessageSquare',
        competences: ['Vente'],
        periode: 'Semestre 5',
        description: 'Mise en situation de vente complexe face à un acheteur professionnel : préparation, argumentation et négociation.',
      },
    ],
  },
];

const TimelineSection: FC = () => {
  return (
    <section id="timeline" className="py-24 bg-dark-700 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/6 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="Parcours académique"
            title="3 ans de "
            highlight="progression"
            subtitle="Une montée en compétences progressive à travers les SAÉ, les projets tuteurés et les mises en situation professionnelles."
          />
        </div>

        {/* Timeline */}
        <div className="relative space-y-16">
          {timelineData.map((annee, anneeIndex) => (
            <div key={annee.annee} className="relative">
              {/* Année header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${annee.bg} flex items-center justify-center shadow-lg shrink-0`}
                  style={{ boxShadow: `0 0 20px ${annee.couleur}40` }}
                >
                  <span className="text-white font-display font-bold text-sm">{annee.annee}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{annee.annee}</h3>
                  <p className="text-zinc-500 text-sm">{annee.label}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/8 to-transparent ml-2" />
              </motion.div>

              {/* Projets grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:ml-16">
                {annee.projets.map((projet, projetIndex) => {
                  const Icon = iconMap[projet.icone] || BarChart3;
                  const isLeft = (anneeIndex + projetIndex) % 2 === 0;

                  return (
                    <motion.div
                      key={projet.id}
                      variants={isLeft ? fadeInLeft : fadeInRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportConfig}
                      className={`glass-card rounded-2xl p-5 border ${annee.border} hover:bg-white/7 transition-all duration-300 group gradient-border`}
                    >
                      {/* Icon + titre */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          style={{ background: `${annee.couleur}18` }}
                        >
                          <Icon size={18} style={{ color: annee.couleur }} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm leading-tight">{projet.titre}</h4>
                          <p className="text-zinc-500 text-xs mt-0.5">{projet.sousTitre}</p>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs leading-relaxed mb-3">{projet.description}</p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <Badge variant={annee.badgeVariant} size="sm">{projet.periode}</Badge>
                        <div className="flex gap-1">
                          {projet.competences.slice(0, 2).map((c) => (
                            <span key={c} className="text-xs text-zinc-600">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
