// ============================================================
// Types TypeScript — Portfolio Samuel Verdavaine
// ============================================================

export type CompetenceId = 'marketing' | 'vente' | 'communication' | 'business-dev' | 'relation-client';

export type ButAnnee = 'BUT1' | 'BUT2' | 'BUT3';

export type NiveauProgression = 1 | 2 | 3;

// Niveau de maîtrise concret — pas de pourcentage
export type NiveauMaitrise = 'en-acquisition' | 'acquis' | 'maitrise';

// --- Compétence BUT ---
export interface ApprentissageCritique {
  id: string;
  libelle: string;
  maitrise: NiveauMaitrise;
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
  couleur: string;
  couleurAccent: string;
  icone: string;
  objectif: string;
  description: string;
  // Ce que je sais faire concrètement
  savoirFaire: string[];
  apprentissagesCritiques: ApprentissageCritique[];
  composantesEssentielles: ComposanteEssentielle[];
  projetsAssocies: string[];
  maitrise: NiveauMaitrise;
}

// --- Projet / SAÉ ---
export interface Preuve {
  type: 'document' | 'presentation' | 'affiche' | 'analyse' | 'capture' | 'tableau' | 'autre';
  libelle: string;
  fournie: boolean;
  url?: string;
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
  fourni: boolean;
}

// --- Navigation ---
export interface NavItem {
  id: string;
  label: string;
  href: string;
}
