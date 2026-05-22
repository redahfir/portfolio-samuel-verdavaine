// ============================================================
// Données compétences BUT TC — Parcours P3 (Business Dev & RC)
// Source : Référentiel TC_BUT~Parcours 3 + Cartes identités P3_N2
// ============================================================
import type { Competence } from '../types';

export const competences: Competence[] = [
  {
    id: 'marketing',
    titre: 'Marketing',
    niveauIntitule: 'Niveau 3 — Construire une solution client étendue',
    niveau: 3,
    couleur: 'brand-blue',
    couleurAccent: '#3b82f6',
    icone: 'TrendingUp',
    objectif:
      'Construire une solution client étendue à tous les secteurs d\'activités, en intégrant les évolutions du marché, les enjeux RSE et les tendances marketing avancées.',
    description:
      'À ce niveau, il ne s\'agit plus seulement de comprendre le marché, mais d\'être capable de concevoir et faire évoluer une offre globale en tenant compte des mutations sectorielles, des comportements clients et des impératifs de durabilité.',
    apprentissagesCritiques: [
      { id: 'ac-mkt-1', libelle: 'Analyser et surveiller l\'environnement commercial et concurrentiel' },
      { id: 'ac-mkt-2', libelle: 'Faire évoluer une offre en intégrant les nouvelles tendances marché' },
      { id: 'ac-mkt-3', libelle: 'Intégrer les dimensions RSE et développement durable dans la stratégie marketing' },
      { id: 'ac-mkt-4', libelle: 'Construire une proposition de valeur différenciante' },
      { id: 'ac-mkt-5', libelle: 'Conduire une veille stratégique et concurrentielle' },
    ],
    composantesEssentielles: [
      { id: 'ce-mkt-1', libelle: 'Comprendre les enjeux du marché et des acteurs sectoriels' },
      { id: 'ce-mkt-2', libelle: 'Analyser l\'environnement et formuler des recommandations stratégiques' },
      { id: 'ce-mkt-3', libelle: 'Intégrer la démarche RSE et les valeurs durables dans l\'offre' },
      { id: 'ce-mkt-4', libelle: 'Créer de la valeur à travers une offre pertinente et différenciante' },
    ],
    projetsAssocies: ['sae-marketing-b1', 'sae-omnicanalite-b3'],
    progression: 78,
  },

  {
    id: 'vente',
    titre: 'Vente',
    niveauIntitule: 'Niveau 3 — Mener une vente complexe',
    niveau: 3,
    couleur: 'brand-emerald',
    couleurAccent: '#10b981',
    icone: 'Handshake',
    objectif:
      'Préparer et conduire des ventes complexes en maîtrisant les techniques d\'achat, les outils commerciaux avancés, la négociation et l\'argumentation face à des interlocuteurs exigeants.',
    description:
      'La vente complexe exige de comprendre les enjeux côté acheteur, de construire un argumentaire solide et personnalisé, et de savoir gérer toutes les étapes d\'un cycle de vente avancé avec professionnalisme.',
    apprentissagesCritiques: [
      { id: 'ac-vte-1', libelle: 'Préparer et structurer une vente complexe' },
      { id: 'ac-vte-2', libelle: 'Comprendre et intégrer les techniques d\'achat dans la démarche commerciale' },
      { id: 'ac-vte-3', libelle: 'Construire des outils commerciaux adaptés au contexte' },
      { id: 'ac-vte-4', libelle: 'Argumenter, traiter les objections et négocier efficacement' },
      { id: 'ac-vte-5', libelle: 'Adapter son discours et sa posture selon l\'interlocuteur' },
    ],
    composantesEssentielles: [
      { id: 'ce-vte-1', libelle: 'Maîtriser le processus commercial de bout en bout' },
      { id: 'ce-vte-2', libelle: 'Mettre en valeur l\'offre avec des arguments différenciants' },
      { id: 'ce-vte-3', libelle: 'Gérer une relation acheteur-vendeur complexe avec professionnalisme' },
      { id: 'ce-vte-4', libelle: 'Conclure une vente en créant de la valeur pour toutes les parties' },
    ],
    projetsAssocies: ['entretien-nego-b3', 'sae-business-game-b1'],
    progression: 82,
  },

  {
    id: 'communication',
    titre: 'Communication commerciale',
    niveauIntitule: 'Niveau 2 — Élaborer un plan de communication',
    niveau: 2,
    couleur: 'brand-purple',
    couleurAccent: '#8b5cf6',
    icone: 'Megaphone',
    objectif:
      'Construire et déployer un plan de communication 360° intégrant les outils digitaux, les réseaux sociaux, l\'e-réputation et les indicateurs de performance.',
    description:
      'À ce niveau, il s\'agit de passer de la simple réalisation de supports à la construction d\'une véritable stratégie de communication multicanale, cohérente, mesurable et orientée objectifs business.',
    apprentissagesCritiques: [
      { id: 'ac-com-1', libelle: 'Construire une stratégie de communication alignée avec les objectifs commerciaux' },
      { id: 'ac-com-2', libelle: 'Sélectionner et exploiter les supports de communication adaptés' },
      { id: 'ac-com-3', libelle: 'Proposer un plan de communication 360° cohérent' },
      { id: 'ac-com-4', libelle: 'Intégrer les outils digitaux et les réseaux sociaux' },
      { id: 'ac-com-5', libelle: 'Mesurer la performance des actions de communication' },
      { id: 'ac-com-6', libelle: 'Gérer l\'e-réputation de l\'organisation' },
    ],
    composantesEssentielles: [
      { id: 'ce-com-1', libelle: 'Définir une ligne éditoriale et une identité de communication' },
      { id: 'ce-com-2', libelle: 'Choisir les canaux de diffusion selon les cibles' },
      { id: 'ce-com-3', libelle: 'Produire des contenus pertinents et adaptés' },
      { id: 'ce-com-4', libelle: 'Mesurer et analyser les résultats des campagnes' },
    ],
    projetsAssocies: ['com-challenge-b1', 'sae-omnicanalite-b3'],
    progression: 72,
  },

  {
    id: 'business-dev',
    titre: 'Business Développement',
    niveauIntitule: 'Niveau 2 — Agir en tant que responsable de l\'équipe commerciale',
    niveau: 2,
    couleur: 'brand-cyan',
    couleurAccent: '#06b6d4',
    icone: 'Rocket',
    objectif:
      'Mettre en œuvre la stratégie marketing et commerciale au sein d\'une équipe, fédérer les collaborateurs autour des objectifs et co-construire une offre avec les parties prenantes.',
    description:
      'Le business développement à ce niveau requiert de maîtriser la dimension managériale et stratégique : identifier les opportunités, piloter une équipe commerciale et construire des offres en lien avec le terrain et les partenaires.',
    apprentissagesCritiques: [
      { id: 'ac-bd-1', libelle: 'Mettre en œuvre la stratégie marketing et commerciale au sein de l\'équipe' },
      { id: 'ac-bd-2', libelle: 'Fédérer les équipes autour de la réussite des objectifs marketing et commerciaux' },
      { id: 'ac-bd-3', libelle: 'Co-construire une offre en collaboration avec les parties prenantes internes et externes' },
    ],
    composantesEssentielles: [
      { id: 'ce-bd-1', libelle: 'Identifier les opportunités de développement les plus porteuses' },
      { id: 'ce-bd-2', libelle: 'Manager efficacement les équipes commerciales' },
      { id: 'ce-bd-3', libelle: 'Élaborer une offre adaptée au contexte sectoriel du client' },
    ],
    projetsAssocies: ['sae-entrepreneuriat-b2', 'sae-job-dating-b2'],
    progression: 68,
  },

  {
    id: 'relation-client',
    titre: 'Relation Client',
    niveauIntitule: 'Niveau 2 — Agir en tant que responsable de l\'équipe relation client',
    niveau: 2,
    couleur: 'brand-amber',
    couleurAccent: '#f59e0b',
    icone: 'Heart',
    objectif:
      'Manager la relation client en assurant la cohérence globale de l\'organisation, en optimisant l\'expérience client et en diffusant une culture client au sein de l\'équipe.',
    description:
      'À ce niveau, la relation client dépasse le simple contact avec le client : elle implique de piloter la satisfaction, de valoriser le portefeuille client via les données et de mettre en place une dynamique d\'amélioration continue.',
    apprentissagesCritiques: [
      { id: 'ac-rc-1', libelle: 'Asseoir la réussite de la relation client sur la cohérence globale de l\'organisation : outils, processus, communication, structure organisationnelle' },
      { id: 'ac-rc-2', libelle: 'Optimiser l\'expérience client grâce à un processus d\'amélioration continue' },
      { id: 'ac-rc-3', libelle: 'Contribuer à la diffusion de la culture client au sein de l\'organisation' },
      { id: 'ac-rc-4', libelle: 'Faire évoluer les outils de la relation client' },
    ],
    composantesEssentielles: [
      { id: 'ce-rc-1', libelle: 'Développer une culture partagée du service client' },
      { id: 'ce-rc-2', libelle: 'Piloter la satisfaction et l\'expérience client tout au long du parcours dans une perspective durable' },
      { id: 'ce-rc-3', libelle: 'Valoriser le portefeuille client grâce à l\'exploitation des données client dans le respect de la réglementation' },
    ],
    projetsAssocies: ['sae-omnicanalite-b3', 'sae-job-dating-b2'],
    progression: 70,
  },
];

export const getCompetenceById = (id: string): Competence | undefined =>
  competences.find((c) => c.id === id);
