import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Handshake, Megaphone, Rocket, Heart, BookOpen, Award } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { fadeInUp, staggerContainer, viewportConfig } from '../utils/animations';

const blocksCompetences = [
  {
    id: 'marketing',
    titre: 'Marketing',
    niveau: 'Niveau 3',
    icone: TrendingUp,
    couleur: '#3b82f6',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    description: 'Construire une solution client étendue à tous les secteurs d\'activités en intégrant les évolutions du marché, la RSE et les nouvelles tendances.',
  },
  {
    id: 'vente',
    titre: 'Vente',
    niveau: 'Niveau 3',
    icone: Handshake,
    couleur: '#10b981',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    description: 'Mener une vente complexe, maîtriser les techniques d\'achat, argumenter, négocier et conclure face à des acheteurs professionnels exigeants.',
  },
  {
    id: 'communication',
    titre: 'Communication',
    niveau: 'Niveau 2',
    icone: Megaphone,
    couleur: '#8b5cf6',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    description: 'Élaborer un plan de communication 360° intégrant digital, réseaux sociaux, e-réputation et mesure de performance.',
  },
  {
    id: 'business-dev',
    titre: 'Business Dev',
    niveau: 'Niveau 2',
    icone: Rocket,
    couleur: '#06b6d4',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    description: 'Agir en responsable d\'équipe commerciale : identifier les opportunités, manager les équipes et co-construire des offres avec les parties prenantes.',
  },
  {
    id: 'relation-client',
    titre: 'Relation Client',
    niveau: 'Niveau 2',
    icone: Heart,
    couleur: '#f59e0b',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    description: 'Manager la relation client, piloter la satisfaction, diffuser la culture client et valoriser le portefeuille via l\'exploitation des données.',
  },
];

const parcoursBUT = [
  { annee: 'BUT1', label: '1re année', description: 'Fondamentaux du TC — marketing, communication, gestion, premiers projets professionnels.', color: 'bg-blue-500' },
  { annee: 'BUT2', label: '2e année', description: 'Approfondissement — entrepreneuriat, management, événementiel, posture professionnelle.', color: 'bg-cyan-500' },
  { annee: 'BUT3', label: '3e année', description: 'Spécialisation Business Dev & RC — stratégie avancée, vente complexe, omnicanalité, stage.', color: 'bg-emerald-500' },
];

const FormationSection: FC = () => {
  return (
    <section id="formation" className="py-24 bg-dark-700 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Title */}
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="Formation"
            title="BUT Techniques de "
            highlight="Commercialisation"
            subtitle="Un diplôme bac+3 orienté pratique, qui forme des professionnels polyvalents du commerce, du marketing et du développement d'affaires."
          />
        </div>

        {/* BUT Explanation */}
        <motion.div
          className="glass-card rounded-2xl p-6 sm:p-8 mb-12 border border-white/6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
              <BookOpen size={22} className="text-blue-400" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">Qu'est-ce que le BUT TC ?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Le BUT Techniques de Commercialisation est un diplôme national de niveau 6 (bac+3) délivré par l'IUT.
                Il forme des professionnels opérationnels capables d'intervenir dans toutes les dimensions du commerce :
                marketing, vente, communication, relation client et développement business.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {parcoursBUT.map((p) => (
              <div key={p.annee} className="flex items-start gap-3 p-4 rounded-xl bg-white/4 border border-white/6">
                <div className={`w-2 h-2 rounded-full ${p.color} mt-2 shrink-0`} />
                <div>
                  <p className="text-white font-semibold text-sm">{p.annee} — {p.label}</p>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Parcours P3 */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Award size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">
              Parcours P3 — Business Développement & Management de la Relation Client
            </span>
          </div>
          <p className="text-zinc-400 text-sm mt-3 max-w-2xl mx-auto">
            Le parcours P3 forme des professionnels capables de piloter le développement commercial et de manager des équipes orientées client, avec une vision stratégique intégrée.
          </p>
        </motion.div>

        {/* 5 blocs de compétences */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {blocksCompetences.map((bloc) => {
            const Icon = bloc.icone;
            return (
              <motion.div
                key={bloc.id}
                variants={fadeInUp}
                className={`glass-card rounded-2xl p-5 border ${bloc.border} hover:bg-white/7 transition-all duration-300 group gradient-border`}
              >
                <div className={`w-10 h-10 rounded-xl ${bloc.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} style={{ color: bloc.couleur }} />
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wider mb-1`} style={{ color: bloc.couleur }}>
                  {bloc.niveau}
                </div>
                <h4 className="font-display text-white font-bold text-base mb-2">{bloc.titre}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{bloc.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FormationSection;
