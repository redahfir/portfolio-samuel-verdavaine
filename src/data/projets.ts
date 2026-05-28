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
    titre: 'SAÉ Marketing — Analyse du Marché du Vin',
    annee: 'BUT1',
    categorie: 'Marketing & Stratégie',
    couleur: '#3b82f6',
    icone: 'BarChart3',
    description:
      'Analyse complète du marché français et mondial du vin : production, consommation, exports, tendances et formulation de 6 recommandations stratégiques pour maintenir l\'attractivité de la filière.',
    contexte:
      'Dans le cadre de la première année de BUT TC à l\'IUT de Valenciennes, nous avons réalisé une analyse marché approfondie sur la filière viticole française. Ce travail s\'appuyait sur des sources officielles (FranceAgriMer, OIV, Douanes françaises) pour dresser un état des lieux rigoureux du secteur.',
    problematique:
      'Comment le marché du vin peut-il rester attractif et compétitif face aux mutations de la consommation, à la concurrence internationale et aux nouvelles attentes des consommateurs ?',
    role: 'Membre de l\'équipe projet — contribution à la collecte des données, à l\'analyse statistique, à la construction des recommandations et à la présentation finale.',
    objectifs: [
      'Dresser un état des lieux chiffré du marché viticole français et mondial',
      'Identifier les dynamiques de consommation et les tendances émergentes',
      'Analyser le positionnement concurrentiel de la France à l\'export',
      'Formuler 6 recommandations stratégiques argumentées pour la filière',
    ],
    actionsRealisees: [
      'Collecte et traitement des données : 36,1 Mhl de production, 22,2 Mhl de consommation, 11,69 Md€ d\'exports',
      'Analyse de l\'évolution de la consommation par segment (tranquilles, effervescents, bio)',
      'Étude des marchés export prioritaires (États-Unis, Royaume-Uni, Allemagne)',
      'Identification des menaces : nouveaux pays producteurs, baisse de consommation des 18-35 ans',
      'Construction de la matrice SWOT de la filière',
      'Formulation et présentation de 6 recommandations stratégiques',
    ],
    outils: ['FranceAgriMer', 'OIV', 'Douanes françaises', 'PESTEL', 'SWOT', 'Excel', 'PowerPoint'],
    competencesLiees: ['marketing'],
    preuves: [
      {
        type: 'document',
        libelle: 'Rapport d\'analyse du marché du vin — SAÉ BUT1',
        fournie: true,
        url: '/preuves/Preuve_SAE_Marketing_Analyse_Marche_Vin.pdf',
      },
    ],
    resultats:
      'Analyse marché complète produite avec des données chiffrées précises (production 36,1 Mhl, consommation 22,2 Mhl, exports 11,69 Md€). Six recommandations stratégiques formulées couvrant l\'innovation produit, le marketing digital, l\'éco-responsabilité et le développement à l\'international.',
    apprentissages: [
      'Maîtrise de la démarche d\'analyse de marché avec sources institutionnelles',
      'Structuration d\'une argumentation stratégique à partir de données quantitatives',
      'Capacité à formuler des recommandations actionnables pour une filière complexe',
    ],
    analyseReflexive:
      'Cette première SAÉ m\'a appris à aller chercher des données fiables et à les transformer en insights exploitables. J\'ai compris que l\'analyse marketing ne se limite pas à lire des chiffres, mais à identifier les tensions entre forces et faiblesses du marché pour proposer des leviers d\'action concrets. La rigueur méthodologique acquise ici est devenue un réflexe dans tous mes travaux suivants.',
  },

  {
    id: 'com-challenge-b1',
    titre: 'Communication Challenge — Valen\'Burger',
    annee: 'BUT1',
    categorie: 'Communication & Créativité',
    couleur: '#8b5cf6',
    icone: 'Megaphone',
    description:
      'Conception d\'une campagne de communication complète pour Valen\'Burger, fast-food local valenciennois : identité visuelle, slogan, affiche, mockup Instagram et plan de communication 4 semaines.',
    contexte:
      'Le Communication Challenge de première année nous a mis face à une situation réelle : concevoir et défendre une stratégie de communication pour Valen\'Burger, un fast-food valenciennois qui cherchait à se différencier des grandes chaînes nationales en jouant la carte du local et de la convivialité.',
    problematique:
      'Comment construire une communication différenciante pour un fast-food local dans un marché ultra-concurrentiel dominé par les grandes chaînes nationales ?',
    role: 'Membre actif de l\'équipe — contribution à la stratégie créative, à la production des supports visuels (logo, affiche, mockup réseaux sociaux) et à la présentation finale.',
    objectifs: [
      'Définir un positionnement clair et différenciant pour Valen\'Burger',
      'Créer une identité visuelle cohérente : logo, charte graphique, slogan',
      'Produire les supports de communication : affiche menu, mockup Instagram',
      'Proposer un plan de communication opérationnel sur 4 semaines',
    ],
    actionsRealisees: [
      'Définition du positionnement : local, savoureux, convivial',
      'Création du logo et du slogan "Local, Savoureux, Convivial"',
      'Conception de l\'affiche menu mettant en avant le burger à 8,90€',
      'Réalisation du mockup de post Instagram pour les réseaux sociaux',
      'Construction du plan de communication sur 4 semaines (lancement, activation, fidélisation)',
      'Pitch et soutenance de la campagne devant le jury',
    ],
    outils: ['Canva', 'PowerPoint', 'Instagram', 'Brief créatif', 'Plan de communication'],
    competencesLiees: ['communication', 'marketing'],
    preuves: [
      {
        type: 'affiche',
        libelle: 'Supports de communication Valen\'Burger — logo, affiche, mockup Instagram',
        fournie: true,
        url: '/preuves/Preuve_SAE2_Com_Challenge.jpg',
      },
    ],
    resultats:
      'Campagne complète livrée : identité visuelle (logo + slogan "Local, Savoureux, Convivial"), affiche menu (burger à 8,90€), mockup Instagram et plan de communication 4 semaines. Présentation soutenue devant jury avec retours positifs sur la cohérence du positionnement local.',
    apprentissages: [
      'Construction d\'une identité de marque cohérente du slogan aux supports visuels',
      'Adaptation du message à une cible locale avec des contraintes de différenciation',
      'Maîtrise des outils de création graphique (Canva) pour la communication commerciale',
    ],
    analyseReflexive:
      'Ce challenge m\'a révélé l\'importance de la cohérence entre positionnement et expression visuelle. Partir d\'un insight local (Valenciennes, convivialité) pour construire un univers de marque homogène a été un apprentissage fondamental. J\'ai aussi compris que défendre un projet créatif nécessite de savoir en expliquer chaque choix stratégique, pas seulement le résultat esthétique.',
  },

  {
    id: 'sae-business-game-b1',
    titre: 'SAÉ Business Game — Team Vision',
    annee: 'BUT1',
    categorie: 'Stratégie & Gestion',
    couleur: '#10b981',
    icone: 'Building2',
    description:
      'Simulation de gestion d\'entreprise sur 6 périodes avec l\'équipe Team Vision : +48% de chiffre d\'affaires, +6,2 pts de part de marché, +76% de résultat net et satisfaction client à 84/100.',
    contexte:
      'Le Business Game est une mise en situation globale reproduisant les conditions d\'une entreprise en compétition avec d\'autres équipes. Notre équipe Team Vision a géré son entreprise virtuelle sur 6 périodes, prenant des décisions stratégiques à chaque tour en analysant les résultats de la période précédente.',
    problematique:
      'Comment piloter une entreprise de manière rentable et compétitive en articulant les décisions marketing, commerciales et financières sur plusieurs périodes consécutives ?',
    role: 'Membre de l\'équipe dirigeante virtuelle Team Vision — participation aux décisions stratégiques, à l\'analyse des indicateurs de performance et à l\'adaptation de la stratégie tour après tour.',
    objectifs: [
      'Comprendre les interactions entre les fonctions de l\'entreprise',
      'Prendre des décisions stratégiques cohérentes sous contrainte temporelle',
      'Analyser les KPIs et ajuster la stratégie en temps réel',
      'Améliorer la compétitivité de l\'entreprise sur l\'ensemble des périodes',
    ],
    actionsRealisees: [
      'Analyse de l\'environnement concurrentiel à chaque période',
      'Définition de la stratégie commerciale et tarifaire (6 périodes)',
      'Pilotage des investissements marketing et des ressources humaines',
      'Lecture et interprétation des tableaux de bord de résultats',
      'Adaptation continue de la stratégie face aux mouvements concurrentiels',
      'Présentation du bilan final de l\'entreprise virtuelle',
    ],
    outils: ['Logiciel de simulation Business Game', 'Excel', 'Tableaux de bord KPIs'],
    competencesLiees: ['vente', 'marketing', 'business-dev'],
    preuves: [
      {
        type: 'document',
        libelle: 'Rapport Business Game Team Vision — résultats et stratégie sur 6 périodes',
        fournie: true,
        url: '/preuves/Preuve_SAE3_Business_Game.pdf',
      },
    ],
    resultats:
      'Performances Team Vision sur 6 périodes : CA de 72k€ à 107k€ (+48%), part de marché de 18,5% à 24,7% (+6,2 pts), résultat net de 12k€ à 21,1k€ (+76%), satisfaction client de 72 à 84/100 (+12 pts). Classement parmi les équipes les plus performantes du groupe.',
    apprentissages: [
      'Vision systémique de l\'entreprise : comprendre que chaque décision a des répercussions sur toutes les autres fonctions',
      'Prise de décision stratégique en équipe sous contrainte de temps et d\'information incomplète',
      'Lecture et interprétation des indicateurs de performance pour ajuster la stratégie',
    ],
    analyseReflexive:
      'Le Business Game a été une révélation sur la complexité de la gestion d\'entreprise. Chaque décision prise sans vision systémique pouvait dégrader un indicateur qu\'on pensait maîtriser. Nos erreurs des premières périodes — notamment sur la politique tarifaire — nous ont forcés à développer une logique d\'analyse plus rigoureuse. La progression des résultats sur 6 périodes reflète cet apprentissage collectif.',
  },

  // ─────────────────────────────────────────────
  // BUT 2
  // ─────────────────────────────────────────────
  {
    id: 'sae-entrepreneuriat-b2',
    titre: 'SAÉ Entrepreneuriat — Campus Box',
    annee: 'BUT2',
    categorie: 'Entrepreneuriat & Business Dev',
    couleur: '#06b6d4',
    icone: 'Lightbulb',
    description:
      'Conception d\'un service de box repas pour étudiants sous le concept Campus Box : "Bien manger, même entre deux cours." Positionnement sur 4 axes de valeur — Prix, Temps, Local, Responsable.',
    contexte:
      'En deuxième année, la SAÉ Entrepreneuriat nous a conduits à créer de A à Z un projet entrepreneurial crédible ciblant les étudiants. Campus Box répond à un problème concret : manger sainement, rapidement et à petit budget quand on est étudiant entre deux cours.',
    problematique:
      'Comment concevoir un service de restauration accessible pour les étudiants qui allie praticité, qualité nutritionnelle, ancrage local et prix abordable ?',
    role: 'Porteur de projet — conception du concept, définition du positionnement, construction de la proposition de valeur sur 4 axes, création des supports visuels et pitch.',
    objectifs: [
      'Identifier une opportunité de marché à partir d\'un besoin étudiant non satisfait',
      'Construire une proposition de valeur différenciante sur 4 axes clés',
      'Définir le modèle économique et la stratégie commerciale',
      'Présenter le projet de manière convaincante devant un jury investisseur simulé',
    ],
    actionsRealisees: [
      'Étude du besoin étudiant : budget contraint, temps limité, qualité alimentaire insuffisante',
      'Définition des 4 axes de valeur : Prix (accessible), Temps (rapide), Local (producteurs régionaux), Responsable (zéro déchet, circuit court)',
      'Construction du concept Campus Box avec le slogan "Bien manger, même entre deux cours"',
      'Élaboration du business model et du plan de lancement',
      'Création des supports visuels et du pitch deck',
      'Présentation et défense devant jury simulant des investisseurs',
    ],
    outils: ['Business Model Canvas', 'Étude de marché', 'Lean Canvas', 'Canva', 'PowerPoint'],
    competencesLiees: ['business-dev', 'marketing', 'vente'],
    preuves: [
      {
        type: 'presentation',
        libelle: 'Pitch deck Campus Box — concept, valeur et modèle économique',
        fournie: true,
        url: '/preuves/Preuve_SAE4_Entrepreneuriat.jpg',
      },
    ],
    resultats:
      'Projet Campus Box formalisé avec un positionnement clair (4 axes : Prix, Temps, Local, Responsable), un concept visuel cohérent et un pitch convaincant. Retours positifs du jury sur la pertinence de l\'identification du besoin étudiant et la différenciation par rapport aux offres existantes.',
    apprentissages: [
      'Capacité à transformer une observation de terrain (problème étudiant) en opportunité entrepreneuriale structurée',
      'Construction d\'une proposition de valeur multi-axes cohérente et différenciante',
      'Maîtrise du pitch entrepreneurial : convaincre en peu de temps avec des arguments solides',
    ],
    analyseReflexive:
      'Campus Box m\'a appris que l\'entrepreneuriat commence par une vraie écoute des problèmes quotidiens. Partir du vécu étudiant (manger mal par manque de temps et d\'argent) pour construire une solution structurée a été un exercice de pensée design très formateur. La challenge de cette SAÉ était de rester ancré dans la réalité tout en construisant un modèle économique viable.',
  },

  {
    id: 'sae-job-dating-b2',
    titre: 'SAÉ Job Dating — Organisation Événementielle',
    annee: 'BUT2',
    categorie: 'Événementiel & Relation Client',
    couleur: '#f59e0b',
    icone: 'CalendarCheck',
    description:
      'Organisation d\'un Job Dating à l\'IUT : 12 entreprises contactées, 8 recruteurs présents, 45 candidats inscrits, 30 entretiens réalisés — gestion complète de S-4 à J+1.',
    contexte:
      'La SAÉ Job Dating consistait à organiser un véritable événement de mise en relation entre étudiants et entreprises au sein de l\'IUT de Valenciennes. Ce projet transversal mobilisait des compétences en gestion de projet, communication B2B et relation client sur l\'ensemble du cycle de l\'événement, du rétroplanning initial au bilan post-événement.',
    problematique:
      'Comment organiser un événement professionnel de qualité qui crée de la valeur à la fois pour les entreprises participantes et pour les étudiants candidats, dans un délai contraint ?',
    role: 'Membre de l\'équipe organisatrice — contribution à la prospection des entreprises, à la communication événementielle et à la coordination logistique le jour J.',
    objectifs: [
      'Recruter des entreprises partenaires et gérer la relation B2B',
      'Assurer la communication et la promotion de l\'événement auprès des étudiants',
      'Gérer la logistique complète de l\'événement (espace, planning, accueil)',
      'Garantir une expérience de qualité pour recruteurs et candidats',
    ],
    actionsRealisees: [
      'Construction du rétroplanning S-4 à J+1 (4 semaines avant au 1 jour après)',
      'Prospection et contact de 12 entreprises partenaires potentielles',
      'Négociation et confirmation de la participation de 8 recruteurs',
      'Communication événementielle : affiche, publications réseaux, mails candidats',
      'Gestion des inscriptions : 45 candidats inscrits',
      'Coordination logistique le jour J : 30 entretiens réalisés dans les temps',
      'Bilan post-événement et restitution',
    ],
    outils: ['Gestion de projet (rétroplanning)', 'Communication événementielle', 'Mailing', 'Réseaux sociaux', 'Logistique événementielle'],
    competencesLiees: ['relation-client', 'communication', 'business-dev'],
    preuves: [
      {
        type: 'document',
        libelle: 'Dossier Job Dating — organisation, rétroplanning et bilan de l\'événement',
        fournie: true,
        url: '/preuves/Preuve_SAE5_Job_Dating.pdf',
      },
    ],
    resultats:
      '12 entreprises contactées, 8 recruteurs présents le jour J. 45 candidats inscrits, 30 entretiens effectivement réalisés. Rétroplanning S-4 à J+1 respecté. Événement réalisé dans les délais et objectifs atteints en termes de participation des deux côtés.',
    apprentissages: [
      'Gestion de projet événementiel complet : du cadrage à la clôture',
      'Relation B2B : prospecter, convaincre et fidéliser des partenaires entreprises',
      'Coordination multi-parties prenantes sous contrainte de temps et d\'imprévu',
    ],
    analyseReflexive:
      'Organiser un Job Dating m\'a confronté à la réalité du management événementiel : tout ne se passe jamais comme prévu, et la capacité d\'adaptation est aussi importante que la planification initiale. Gérer simultanément la relation avec les entreprises, la communication auprès des étudiants et la logistique le jour J a été exigeant mais très formateur. C\'est cette SAÉ qui m\'a donné le goût de la coordination et de la gestion de projet.',
  },

  // ─────────────────────────────────────────────
  // BUT 3
  // ─────────────────────────────────────────────
  {
    id: 'sae-omnicanalite-b3',
    titre: 'SAÉ Omnicanalité — Stratégie Multicanale',
    annee: 'BUT3',
    categorie: 'Stratégie Digitale & Relation Client',
    couleur: '#10b981',
    icone: 'Globe',
    description:
      'Conception d\'une stratégie omnicanale sur 6 canaux (magasin, web, Instagram, e-mailing, fidélité, SAV) avec 4 recommandations concrètes : click & collect, QR codes, carte fidélité digitale et réponses réseaux.',
    contexte:
      'En troisième année, la SAÉ Omnicanalité nous confronte à la réalité des enseignes qui doivent harmoniser leurs canaux physiques et digitaux. Après un audit complet des 6 canaux de l\'organisation, nous avons identifié les points de friction dans le parcours client et formulé des recommandations de transformation.',
    problematique:
      'Comment concevoir une stratégie omnicanale cohérente qui améliore l\'expérience client sur l\'ensemble des points de contact tout en optimisant les performances commerciales de l\'enseigne ?',
    role: 'Analyste et co-auteur des recommandations — audit des canaux, cartographie du parcours client, formulation des 4 axes de recommandation et présentation.',
    objectifs: [
      'Auditer les 6 canaux de l\'organisation (magasin, web, Instagram, e-mailing, programme fidélité, SAV)',
      'Cartographier le parcours client et identifier les points de friction',
      'Proposer 4 recommandations omnicanales concrètes et actionables',
      'Définir les indicateurs de suivi de la transformation',
    ],
    actionsRealisees: [
      'Audit des 6 canaux : magasin physique, site web, Instagram, e-mailing, carte fidélité, SAV',
      'Cartographie du parcours client multicanal (Customer Journey Map)',
      'Identification des points de friction et des ruptures de cohérence entre canaux',
      'Formulation de 4 recommandations : mise en place du click & collect, QR codes en magasin, digitalisation de la carte fidélité, stratégie de réponse sur les réseaux sociaux',
      'Définition des KPIs de suivi pour chaque recommandation',
      'Présentation et soutenance devant jury',
    ],
    outils: ['Customer Journey Map', 'Audit omnicanal', 'PowerPoint', 'Analytics', 'CRM'],
    competencesLiees: ['relation-client', 'marketing', 'communication'],
    preuves: [
      {
        type: 'document',
        libelle: 'Rapport omnicanalité — audit des 6 canaux et 4 recommandations stratégiques',
        fournie: true,
        url: '/preuves/Preuve_SAE6_Omnicanalite.pdf',
      },
    ],
    resultats:
      'Audit complet des 6 canaux réalisé avec identification précise des points de friction. 4 recommandations formulées et présentées : click & collect, QR codes en magasin vers contenu digital, carte fidélité digitale, protocole de réponse réseaux sociaux. Plan d\'action avec KPIs de suivi défini pour chaque recommandation.',
    apprentissages: [
      'Vision globale du parcours client multicanal et des interdépendances entre points de contact',
      'Capacité à diagnostiquer des ruptures d\'expérience et à proposer des solutions concrètes',
      'Articulation entre stratégie digitale et physique dans une logique d\'amélioration de l\'expérience client',
    ],
    analyseReflexive:
      'L\'omnicanalité m\'a appris que la transformation digitale n\'est pas une question de technologie mais d\'expérience client. Les canaux les plus sophistiqués n\'ont aucune valeur si le parcours global est incohérent. Cette SAÉ a renforcé ma capacité à prendre de la hauteur et à analyser une organisation dans sa globalité avant de proposer des solutions locales.',
  },

  {
    id: 'entretien-nego-b3',
    titre: 'Entretien de Négociation — Vente Complexe',
    annee: 'BUT3',
    categorie: 'Négociation & Vente',
    couleur: '#3b82f6',
    icone: 'MessageSquare',
    description:
      'Mise en situation d\'entretien de vente complexe avec la méthode CAP : déroulé en 6 étapes et traitement de 3 objections majeures (prix, réflexion, concurrence) face à un acheteur professionnel.',
    contexte:
      'L\'entretien de négociation de 3e année constitue une épreuve de mise en situation réaliste où l\'étudiant doit démontrer sa capacité à conduire une vente complexe face à un acheteur professionnel exigeant. La préparation mobilise les techniques de vente avancées et la connaissance des mécanismes d\'achat.',
    problematique:
      'Comment préparer et mener un entretien de vente complexe en maîtrisant la méthode CAP, en anticipant les objections et en créant de la valeur pour les deux parties dans la négociation ?',
    role: 'Vendeur — conduite de l\'entretien de A à Z : préparation de l\'argumentaire CAP, déroulé en 6 étapes, traitement des objections prix/réflexion/concurrence, et conclusion.',
    objectifs: [
      'Maîtriser la méthode CAP (Caractéristique, Avantage, Preuve) pour structurer l\'argumentation',
      'Conduire un entretien en 6 étapes : prise de contact, découverte, reformulation, argumentation, objections, conclusion',
      'Traiter professionnellement les 3 objections les plus fréquentes : prix, besoin de réflexion, concurrence',
      'Créer de la valeur pour l\'acheteur tout en préservant la marge',
    ],
    actionsRealisees: [
      'Analyse du profil acheteur et préparation personnalisée de l\'argumentaire',
      'Construction de l\'argumentaire avec la méthode CAP pour chaque caractéristique produit',
      'Préparation des réponses aux 3 objections : prix ("c\'est trop cher"), réflexion ("je dois y réfléchir"), concurrence ("j\'ai une autre offre")',
      'Entraînement à la conduite de l\'entretien en 6 étapes',
      'Conduite de l\'entretien réel face à l\'acheteur professionnel',
      'Débrief et analyse post-entretien avec le formateur',
    ],
    outils: ['Méthode CAP', 'Plan de découverte', 'Grille de préparation commerciale', 'Techniques de traitement des objections'],
    competencesLiees: ['vente'],
    preuves: [
      {
        type: 'document',
        libelle: 'Dossier de préparation — méthode CAP, argumentaire et traitement des objections',
        fournie: true,
        url: '/preuves/Preuve_SAE7_Entretien_Nego.pdf',
      },
    ],
    resultats:
      'Entretien conduit en 6 étapes avec maîtrise de la méthode CAP. Trois objections traitées avec les techniques appropriées : décomposition pour l\'objection prix, relance sur les enjeux pour le besoin de réflexion, différenciation valeur pour la concurrence. Posture professionnelle et aisance relationnelle validées.',
    apprentissages: [
      'Maîtrise opérationnelle de la méthode CAP et de la structure d\'un entretien de vente complexe',
      'Compréhension des mécanismes psychologiques de l\'achat et des techniques de négociation',
      'Posture commerciale professionnelle : écoute active, reformulation, gestion des silences',
    ],
    analyseReflexive:
      'L\'entretien de négociation m\'a confronté à la partie la plus exigeante de la vente : maintenir une posture professionnelle face à la pression d\'un acheteur aguerri. La préparation est clé, mais ce qui fait la différence c\'est l\'écoute en temps réel et la capacité à adapter son argumentation selon les signaux de l\'interlocuteur. Cette épreuve a solidifié ma confiance en situation de vente complexe.',
  },
];

export const getProjetById = (id: string): Projet | undefined =>
  projets.find((p) => p.id === id);

export const getProjetsByAnnee = (annee: string): Projet[] =>
  projets.filter((p) => p.annee === annee);

export const getProjetsByCompetence = (competenceId: string): Projet[] =>
  projets.filter((p) => p.competencesLiees.includes(competenceId as never));
