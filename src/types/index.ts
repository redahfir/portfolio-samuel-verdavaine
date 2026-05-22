// ============================================================
// Types TypeScript — Portfolio Samuel Verdavaine
// ============================================================

export type CompetenceId = 'marketing' | 'vente' | 'communication' | 'business-dev' | 'relation-client';

export type ButAnnee = 'BUT1' | 'BUT2' | 'BUT3';

export type NiveauProgression = 1 | 2 | 3;

// --- Compétence BUT ---
export interface ApprentissageCritique {
  id: string;
  libelle: string;
}

export interface ComposanteEssentielle {
  id: string;
  libelle: string;
}

export interface Competence {
  id: CompetenceId;
  titre: string;
  niveauIntitule: string;
  niveau: NiveauProgression;
  couleur: string;         // Classe Tailwind couleur principale
  couleurAccent: string;   // Hex ou classe pour l'accent visuel
  icone: string;           // Nom d'icône Lucide React
  objectif: string;
  description: string;
  apprentissagesCritiques: ApprentissageCritique[];
  composantesEssentielles: ComposanteEssentielle[];
  projetsAssocies: string[]; // IDs des projets liés
  progression: number;       // 0-100
}

// --- Projet / SAÉ ---
export interface Preuve {
  type: 'document' | 'presentation' | 'affiche' | 'analyse' | 'capture' | 'tableau' | 'autre';
  libelle: string;   // Descriptif de la preuve attendue
  fournie: boolean;  // false = placeholder à compléter
  url?: string;      // Lien si disponible
}

export interface Projet {
  id: string;
  titre: string;
  annee: ButAnnee;
  categorie: string;
  description: string;
  contexte: string;
  problematique: string;
  role: string;
  objectifs: string[];
  actionsRealisees: string[];
  outils: string[];
  competencesLiees: CompetenceId[];
  preuves: Preuve[];
  resultats: string;
  apprentissages: string[];
  analyseReflexive: string;
  couleur: string;
  icone: string;
}

// --- Entrée Timeline ---
export interface TimelineEntry {
  id: string;
  annee: ButAnnee;
  titre: string;
  sous_titre: string;
  description: string;
  competences: CompetenceId[];
  periode: string;
  couleur: string;
}

// --- Tableau réflexif ---
export interface EntreeReflexive {
  competenceId: CompetenceId;
  situationSelectionnee: string;
  pertinenceChoix: string;
  tracesChoisies: string[];
  apprentissagesCritiques: string[];
  composantesEssentielles: string[];
  pertinenceTraces: string;
  bilanApprentissages: string;
  projetId?: string;
}

// --- Stage ---
export interface Stage {
  entreprise: string;
  secteur: string;
  lieu: string;
  dateDebut: string;
  dateFin: string;
  mission: string;
  contexte: string;
  objectifs: string[];
  competencesMobilisees: CompetenceId[];
  preuves: Preuve[];
  bilan: string;
  analyseReflexive: string;
  fourni: boolean; // false = section à compléter
}

// --- Navigation ---
export interface NavItem {
  id: string;
  label: string;
  href: string;
}
