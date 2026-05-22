// ============================================================
// Données projets / SAÉ — Portfolio Samuel Verdavaine
// ============================================================
import type { Projet } from '../types';

export const projets: Projet[] = [
  // ─────────────────────────────────────────────
  // BUT 1
  // ─────────────────────────────────────────────
  {
    id: 'sae-marketing-b1',
    titre: 'SAÉ Marketing — Analyse Marché Produit',
    annee: 'BUT1',
    categorie: 'Marketing & Stratégie',
    couleur: '#3b82f6',
    icone: 'BarChart3',
    description:
      'Première immersion dans la démarche marketing : analyse d\'un marché, étude de la concurrence et formulation d\'une recommandation stratégique.',
    contexte:
      'Dans le cadre de la première année de BUT TC, nous avons réalisé une analyse marché complète sur un produit/secteur défini. Ce travail avait pour vocation de poser les bases de la pensée marketing structurée.',
    problematique:
      'Comment analyser de manière rigoureuse un marché afin de formuler des recommandations stratégiques pertinentes pour une organisation ?', // TODO : affiner selon réalité
    role: 'Membre de l\'équipe projet — contribution à l\'analyse de l\'environnement, à la synthèse des données et à la présentation des recommandations.',
    objectifs: [
      'Comprendre la structure d\'un marché et ses acteurs',
      'Réaliser une analyse PESTEL et SWOT',
      'Identifier les opportunités et menaces du secteur',
      'Formuler des recommandations marketing argumentées',
    ],
    actionsRealisees: [
      'Collecte et analyse des données marché (sources secondaires)',
      'Réalisation de l\'analyse concurrentielle',
      'Construction de la matrice SWOT',
      'Rédaction du rapport d\'analyse',
      'Présentation orale des résultats',
    ],
    outils: ['PESTEL', 'SWOT', 'Analyse concurrentielle', 'PowerPoint', 'Excel'],
    competencesLiees: ['marketing'],
    preuves: [
      { type: 'document', libelle: 'Ajouter ici : rapport d\'analyse marché (PDF)', fournie: false },
      { type: 'presentation', libelle: 'Ajouter ici : support de présentation (PowerPoint/PDF)', fournie: false },
      { type: 'analyse', libelle: 'Ajouter ici : matrice SWOT et PESTEL (image ou tableau)', fournie: false },
    ],
    resultats:
      'TODO — Décrire les résultats obtenus : note obtenue, retour du jury, recommandations retenues, etc.', // TODO
    apprentissages: [
      'Maîtrise des outils d\'analyse marketing stratégique',
      'Structuration d\'une démarche analytique rigoureuse',
      'Capacité à synthétiser des données complexes en recommandations claires',
    ],
    analyseReflexive:
      'Cette SAÉ m\'a permis de poser les fondations de ma pensée marketing. TODO — approfondir la réflexion sur les apports personnels, les difficultés rencontrées et ce que cette expérience a changé dans votre posture.', // TODO
  },

  {
    id: 'com-challenge-b1',
    titre: 'Communication Challenge — Fast-food Valenciennois',
    annee: 'BUT1',
    categorie: 'Communication & Créativité',
    couleur: '#8b5cf6',
    icone: 'Megaphone',
    description:
      'Conception d\'une campagne de communication complète pour un fast-food local valenciennois dans le cadre d\'un challenge inter-groupes.',
    contexte:
      'Le Communication Challenge de première année nous a mis face à une situation réelle : concevoir une stratégie de communication pour un fast-food valenciennois avec des contraintes de temps, de budget et de positionnement.',
    problematique:
      'Comment construire une communication différenciante pour un fast-food local dans un marché ultra-concurrentiel dominé par les grandes chaînes nationales ?',
    role: 'Membre actif de l\'équipe — contribution à la stratégie éditoriale, à la création des supports et à la présentation finale.',
    objectifs: [
      'Définir une stratégie de communication cohérente avec le positionnement',
      'Créer des supports de communication adaptés à la cible',
      'Présenter et défendre la campagne face à un jury',
    ],
    actionsRealisees: [
      'Diagnostic de la situation de communication de l\'enseigne',
      'Définition de la cible et du message clé',
      'Création des supports visuels (affiche, réseaux sociaux)',
      'Proposition d\'un plan de communication',
      'Pitch et soutenance devant un jury',
    ],
    outils: ['Canva', 'PowerPoint', 'Réseaux sociaux', 'Brief créatif'],
    competencesLiees: ['communication', 'marketing'],
    preuves: [
      { type: 'affiche', libelle: 'Ajouter ici : affiche de la campagne (image)', fournie: false },
      { type: 'presentation', libelle: 'Ajouter ici : présentation du plan de communication (PDF)', fournie: false },
      { type: 'document', libelle: 'Ajouter ici : brief créatif ou dossier de communication (PDF)', fournie: false },
      { type: 'capture', libelle: 'Ajouter ici : capture des créations réseaux sociaux', fournie: false },
    ],
    resultats:
      'TODO — Décrire les résultats : classement dans le challenge, retours du jury, points forts de la campagne.', // TODO
    apprentissages: [
      'Construction d\'une stratégie de communication opérationnelle',
      'Création de supports visuels adaptés à une cible',
      'Défense d\'un projet créatif face à un jury professionnel',
    ],
    analyseReflexive:
      'TODO — Réflexion sur ce que ce challenge a apporté : en termes de créativité, de rigueur stratégique, de travail en équipe sous pression.', // TODO
  },

  {
    id: 'sae-business-game-b1',
    titre: 'SAÉ Business Game — Gestion d\'Entreprise',
    annee: 'BUT1',
    categorie: 'Stratégie & Gestion',
    couleur: '#10b981',
    icone: 'Building2',
    description:
      'Simulation de gestion d\'entreprise en conditions réelles : prise de décisions stratégiques, gestion financière et commerciale dans un environnement concurrentiel simulé.',
    contexte:
      'Le Business Game est une mise en situation globale qui reproduit les conditions d\'une entreprise en compétition avec d\'autres équipes. Chaque groupe gère son entreprise virtuelle et prend des décisions stratégiques chaque tour.',
    problematique:
      'Comment piloter une entreprise de manière rentable et compétitive en articulant les décisions marketing, commerciales et financières ?',
    role: 'Membre de l\'équipe dirigeante virtuelle — participation aux décisions stratégiques, à la gestion commerciale et à l\'analyse des résultats.',
    objectifs: [
      'Comprendre les interactions entre les fonctions de l\'entreprise',
      'Prendre des décisions stratégiques sous contrainte',
      'Analyser les résultats et adapter la stratégie',
    ],
    actionsRealisees: [
      'Analyse de l\'environnement concurrentiel simulé',
      'Définition de la stratégie commerciale et tarifaire',
      'Gestion des investissements et des ressources',
      'Analyse des performances à chaque tour',
      'Adaptation continue de la stratégie',
    ],
    outils: ['Logiciel de simulation de gestion', 'Excel', 'Tableaux de bord'],
    competencesLiees: ['vente', 'marketing', 'business-dev'],
    preuves: [
      { type: 'capture', libelle: 'Ajouter ici : captures d\'écran des résultats du Business Game', fournie: false },
      { type: 'document', libelle: 'Ajouter ici : rapport final de gestion (PDF)', fournie: false },
      { type: 'analyse', libelle: 'Ajouter ici : tableau de bord des décisions et résultats', fournie: false },
    ],
    resultats:
      'TODO — Décrire les résultats : classement de l\'équipe, performances clés (chiffre d\'affaires, rentabilité, part de marché).', // TODO
    apprentissages: [
      'Vision systémique de l\'entreprise',
      'Prise de décision stratégique en équipe',
      'Lecture et interprétation des indicateurs de performance',
    ],
    analyseReflexive:
      'TODO — Réflexion sur les erreurs de gestion, les apprentissages en matière de pilotage et ce que cette simulation a changé dans la compréhension du monde de l\'entreprise.', // TODO
  },

  // ─────────────────────────────────────────────
  // BUT 2
  // ─────────────────────────────────────────────
  {
    id: 'sae-entrepreneuriat-b2',
    titre: 'SAÉ Entrepreneuriat — Création d\'Entreprise',
    annee: 'BUT2',
    categorie: 'Entrepreneuriat & Business Dev',
    couleur: '#06b6d4',
    icone: 'Lightbulb',
    description:
      'Conception et formalisation d\'un projet de création d\'entreprise : étude de marché, business model, stratégie commerciale et pitch investisseurs.',
    contexte:
      'En deuxième année, la SAÉ Entrepreneuriat nous a conduits à créer de A à Z un projet entrepreneurial crédible, avec une étude de faisabilité, un business plan et une présentation devant un jury simulant des investisseurs.',
    problematique:
      'Comment construire un projet entrepreneurial viable, différenciant et convaincant dans un secteur donné ?',
    role: 'TODO — Préciser le rôle exact (porteur de projet, responsable marketing, responsable financier, etc.)', // TODO
    objectifs: [
      'Identifier une opportunité de marché et formuler une idée de business',
      'Construire un business model solide',
      'Définir une stratégie commerciale et marketing',
      'Présenter le projet de manière convaincante',
    ],
    actionsRealisees: [
      'Étude de marché et analyse des tendances',
      'Construction du Business Model Canvas',
      'Rédaction du business plan (partie commerciale)',
      'Définition de la stratégie de go-to-market',
      'Pitch devant le jury',
    ],
    outils: ['Business Model Canvas', 'Étude de marché', 'Business Plan', 'PowerPoint'],
    competencesLiees: ['business-dev', 'marketing', 'vente'],
    preuves: [
      { type: 'document', libelle: 'Ajouter ici : business plan complet (PDF)', fournie: false },
      { type: 'presentation', libelle: 'Ajouter ici : pitch deck (PDF ou PowerPoint)', fournie: false },
      { type: 'analyse', libelle: 'Ajouter ici : Business Model Canvas (image ou PDF)', fournie: false },
      { type: 'document', libelle: 'Ajouter ici : étude de marché (PDF)', fournie: false },
    ],
    resultats:
      'TODO — Décrire les résultats : retours du jury, note obtenue, points forts du projet.', // TODO
    apprentissages: [
      'Construction d\'une vision entrepreneuriale et d\'un business model',
      'Articulation entre analyse marché et stratégie commerciale',
      'Défense d\'un projet face à des décideurs',
    ],
    analyseReflexive:
      'TODO — Réflexion sur le processus de création, les arbitrages réalisés et ce que cette expérience a apporté en termes de posture entrepreneuriale.', // TODO
  },

  {
    id: 'sae-job-dating-b2',
    titre: 'SAÉ Job Dating — Organisation d\'Événement',
    annee: 'BUT2',
    categorie: 'Événementiel & Relation Client',
    couleur: '#f59e0b',
    icone: 'CalendarCheck',
    description:
      'Conception et mise en œuvre d\'un événement de type Job Dating au sein de l\'IUT, impliquant la coordination avec des entreprises partenaires et la gestion de l\'expérience participants.',
    contexte:
      'La SAÉ Job Dating consistait à organiser un véritable événement de mise en relation entre étudiants et entreprises. Ce projet transversal mobilisait des compétences en gestion de projet, communication, relation client et coordination.',
    problematique:
      'Comment organiser un événement professionnel de qualité qui crée de la valeur à la fois pour les entreprises participantes et pour les étudiants candidats ?',
    role: 'TODO — Préciser le rôle exact (chef de projet, responsable communication, responsable relation entreprises, etc.)', // TODO
    objectifs: [
      'Concevoir le concept et le format de l\'événement',
      'Recruter et gérer les relations avec les entreprises partenaires',
      'Assurer la communication et la promotion de l\'événement',
      'Gérer la logistique et l\'expérience le jour J',
    ],
    actionsRealisees: [
      'Définition du concept et du cahier des charges de l\'événement',
      'Prospection et contact des entreprises partenaires',
      'Création des supports de communication',
      'Coordination logistique (espace, timing, accueil)',
      'Animation et gestion du jour J',
      'Bilan post-événement',
    ],
    outils: ['Gestion de projet', 'Communication événementielle', 'Outils CRM', 'Réseaux sociaux'],
    competencesLiees: ['relation-client', 'communication', 'business-dev'],
    preuves: [
      { type: 'document', libelle: 'Ajouter ici : dossier de conception de l\'événement (PDF)', fournie: false },
      { type: 'affiche', libelle: 'Ajouter ici : affiche ou visuel de communication de l\'événement', fournie: false },
      { type: 'capture', libelle: 'Ajouter ici : photos du jour J ou captures de la communication', fournie: false },
      { type: 'document', libelle: 'Ajouter ici : bilan de l\'événement (PDF)', fournie: false },
    ],
    resultats:
      'TODO — Décrire les résultats : nombre d\'entreprises, nombre de participants, retours, satisfaction.', // TODO
    apprentissages: [
      'Gestion de projet événementiel de A à Z',
      'Coordination multi-parties prenantes',
      'Création d\'une expérience client/participant de qualité',
    ],
    analyseReflexive:
      'TODO — Réflexion sur les défis de l\'organisation, la gestion des imprévus et les compétences relationnelles développées.', // TODO
  },

  // ─────────────────────────────────────────────
  // BUT 3
  // ─────────────────────────────────────────────
  {
    id: 'sae-omnicanalite-b3',
    titre: 'SAÉ Omnicanalité — Développement Omnicanal',
    annee: 'BUT3',
    categorie: 'Stratégie Digitale & Relation Client',
    couleur: '#10b981',
    icone: 'Globe',
    description:
      'Conception d\'une stratégie omnicanale complète pour une organisation : intégration des canaux, cohérence de l\'expérience client et recommandations de transformation.',
    contexte:
      'En troisième année, la SAÉ Omnicanalité nous confronte à la réalité des entreprises qui doivent harmoniser leurs canaux de vente et de communication physiques et digitaux pour offrir une expérience client fluide.',
    problematique:
      'Comment concevoir une stratégie omnicanale cohérente qui améliore l\'expérience client tout en optimisant les performances commerciales ?',
    role: 'TODO — Préciser le rôle exact dans le groupe.', // TODO
    objectifs: [
      'Diagnostiquer la situation omnicanale actuelle de l\'organisation',
      'Identifier les points de friction dans le parcours client',
      'Proposer une stratégie omnicanale cohérente',
      'Définir des indicateurs de performance adaptés',
    ],
    actionsRealisees: [
      'Audit des canaux existants (physiques et digitaux)',
      'Cartographie du parcours client (Customer Journey Map)',
      'Identification des points de friction',
      'Construction de la stratégie omnicanale',
      'Définition des KPIs et outils de pilotage',
      'Présentation des recommandations',
    ],
    outils: ['Customer Journey Map', 'Audit omnicanal', 'CRM', 'Analytics', 'PowerPoint'],
    competencesLiees: ['relation-client', 'marketing', 'communication'],
    preuves: [
      { type: 'document', libelle: 'Ajouter ici : rapport de la SAÉ omnicanalité (PDF)', fournie: false },
      { type: 'analyse', libelle: 'Ajouter ici : Customer Journey Map (image ou PDF)', fournie: false },
      { type: 'presentation', libelle: 'Ajouter ici : présentation des recommandations (PDF)', fournie: false },
      { type: 'tableau', libelle: 'Ajouter ici : tableau des KPIs et indicateurs de suivi', fournie: false },
    ],
    resultats:
      'TODO — Résultats en cours (SAÉ de 3e année) — compléter au fur et à mesure.', // TODO
    apprentissages: [
      'Vision globale du parcours client multicanal',
      'Articulation entre stratégie digitale et physique',
      'Pilotage de la performance relationnelle',
    ],
    analyseReflexive:
      'TODO — Réflexion à compléter en fin de SAÉ sur les apports en termes de vision stratégique et de maîtrise des outils omnicanaux.', // TODO
  },

  {
    id: 'entretien-nego-b3',
    titre: 'Entretien de Négociation — Vente Complexe',
    annee: 'BUT3',
    categorie: 'Négociation & Vente',
    couleur: '#3b82f6',
    icone: 'MessageSquare',
    description:
      'Mise en situation d\'entretien de vente complexe : préparation, argumentation avancée, gestion des objections et conclusion face à un acheteur professionnel.',
    contexte:
      'L\'entretien de négociation de 3e année constitue une épreuve de mise en situation réaliste où l\'étudiant doit démontrer sa capacité à conduire une vente complexe face à un acheteur exigeant.',
    problematique:
      'Comment préparer et mener un entretien de vente complexe en maîtrisant les techniques d\'achat, les objections et les leviers de la négociation avancée ?',
    role: 'Vendeur — conduite de l\'entretien de A à Z : préparation, ouverture, découverte, argumentation, traitement des objections, négociation et conclusion.',
    objectifs: [
      'Préparer un argumentaire commercial structuré et personnalisé',
      'Comprendre les enjeux et les techniques d\'achat de l\'interlocuteur',
      'Gérer les objections avec professionnalisme',
      'Négocier et conclure avec création de valeur',
    ],
    actionsRealisees: [
      'Analyse du contexte acheteur et de ses enjeux',
      'Construction de l\'argumentaire (CAB ou méthode adaptée)',
      'Préparation des réponses aux objections attendues',
      'Simulation et entraînement',
      'Conduite de l\'entretien réel',
      'Débrief et analyse post-entretien',
    ],
    outils: ['Méthode CAB', 'Technique SPIN Selling', 'Grille de préparation commerciale', 'Plan de découverte'],
    competencesLiees: ['vente'],
    preuves: [
      { type: 'document', libelle: 'Ajouter ici : grille de préparation commerciale (PDF)', fournie: false },
      { type: 'document', libelle: 'Ajouter ici : argumentaire structuré (PDF)', fournie: false },
      { type: 'analyse', libelle: 'Ajouter ici : bilan d\'entretien et analyse réflexive (PDF)', fournie: false },
    ],
    resultats:
      'TODO — Résultats en cours (épreuve de 3e année) — compléter après la soutenance.', // TODO
    apprentissages: [
      'Maîtrise des techniques de vente complexe',
      'Compréhension des mécanismes achat/vente',
      'Posture professionnelle dans un contexte de négociation',
    ],
    analyseReflexive:
      'TODO — Réflexion à compléter après l\'épreuve sur la maîtrise des techniques, les axes d\'amélioration et la progression dans la posture commerciale.', // TODO
  },
];

export const getProjetById = (id: string): Projet | undefined =>
  projets.find((p) => p.id === id);

export const getProjetsByAnnee = (annee: string): Projet[] =>
  projets.filter((p) => p.annee === annee);

export const getProjetsByCompetence = (competenceId: string): Projet[] =>
  projets.filter((p) => p.competencesLiees.includes(competenceId as never));
