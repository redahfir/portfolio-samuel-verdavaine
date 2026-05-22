// ============================================================
// Données profil — Samuel Verdavaine
// ============================================================

export const profile = {
  prenom: 'Samuel',
  nom: 'Verdavaine',
  age: 21,
  formation: 'BUT Techniques de Commercialisation',
  parcours: 'Business Développement & Management de la Relation Client',
  annee: 'BUT3 — 2025/2026',

  accroche:
    'Étudiant en BUT TC3, je construis chaque jour une vision stratégique du commerce, de la relation client et du développement business — avec rigueur, ambition et envie d\'impact.',

  tagline: 'Business Growth Operating System',

  bio: `Passionné par la stratégie commerciale, le marketing et l'expérience client, je suis en troisième année de BUT Techniques de Commercialisation au parcours Business Développement et Management de la Relation Client.

Ces trois années m'ont permis de développer une vision globale et opérationnelle du commerce moderne : de l'analyse marché à la négociation avancée, de la construction d'une offre à la fidélisation client, en passant par le management d'équipe et la communication omnicanale.

Chaque SAÉ, chaque projet, chaque situation professionnelle a été pour moi une occasion d'apprendre, de me dépasser et de construire une posture de professionnel prêt à l'action.`,

  qualites: [
    { label: 'Esprit d\'analyse', icone: 'Brain', description: 'Capacité à décortiquer un marché, une situation client ou une problématique commerciale pour en tirer des enseignements actionnables.' },
    { label: 'Sens du relationnel', icone: 'Users', description: 'Aisance naturelle dans la relation client, la communication et le travail en équipe.' },
    { label: 'Autonomie', icone: 'Zap', description: 'Initiative, prise de responsabilités et capacité à mener un projet de bout en bout.' },
    { label: 'Adaptabilité', icone: 'Shuffle', description: 'Facilité à évoluer dans des environnements différents, à m\'adapter aux contextes et aux interlocuteurs.' },
    { label: 'Ambition orientée résultats', icone: 'Target', description: 'Fixation d\'objectifs clairs, recherche de performance et souci de l\'impact concret.' },
    { label: 'Travail en équipe', icone: 'UserCheck', description: 'Collaboration constructive, écoute active et contribution à la réussite collective.' },
  ],

  contact: {
    // TODO — Compléter avec vos informations personnelles
    email: 'samuel.verdavaine@etudiant.univ-xxx.fr', // TODO : remplacer
    linkedin: 'https://linkedin.com/in/samuel-verdavaine', // TODO : remplacer
    github: 'https://github.com/samuel-verdavaine', // TODO : remplacer
    telephone: '', // TODO : ajouter si souhaité
    localisation: 'Valenciennes, France',
    cv: '/cv-samuel-verdavaine.pdf', // TODO : ajouter le fichier CV dans public/
  },

  stats: [
    { label: 'SAÉ professionnelles', valeur: '7', icone: 'FolderOpen' },
    { label: 'Compétences BUT maîtrisées', valeur: '5 blocs', icone: 'Award' },
    { label: 'Années de formation', valeur: 'BUT1 → BUT3', icone: 'GraduationCap' },
    { label: 'Disponible pour un stage', valeur: 'Juin 2026', icone: 'Calendar' },
  ],
};

export const navItems = [
  { id: 'hero', label: 'Accueil', href: '#hero' },
  { id: 'about', label: 'Profil', href: '#about' },
  { id: 'formation', label: 'Formation', href: '#formation' },
  { id: 'competences', label: 'Compétences', href: '#competences' },
  { id: 'timeline', label: 'Parcours', href: '#timeline' },
  { id: 'projets', label: 'Projets', href: '#projets' },
  { id: 'reflexif', label: 'Réflexif', href: '#reflexif' },
  { id: 'stage', label: 'Stage', href: '#stage' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
