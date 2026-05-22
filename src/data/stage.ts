// ============================================================
// Données Stage 3e année — À COMPLÉTER
// Portfolio Samuel Verdavaine — BUT TC3 2025/2026
// ============================================================
import type { Stage } from '../types';

// TODO — Compléter toutes les informations du stage dès qu'elles sont disponibles
export const stageInfo: Stage = {
  entreprise: 'TODO — Nom de l\'entreprise d\'accueil',
  secteur: 'TODO — Secteur d\'activité',
  lieu: 'TODO — Ville, Région',
  dateDebut: 'TODO — Date de début (ex : 02/06/2026)',
  dateFin: 'TODO — Date de fin (ex : 28/08/2026)',

  mission:
    'TODO — Décrire la mission principale du stage en 2-3 phrases. Quelle était votre feuille de route ? Quels objectifs vous avaient été fixés ?',

  contexte:
    'TODO — Décrire le contexte de l\'entreprise : taille, marché, positionnement, enjeux actuels. Pourquoi ce stage ? Pourquoi cette entreprise ?',

  objectifs: [
    'TODO — Objectif opérationnel 1',
    'TODO — Objectif opérationnel 2',
    'TODO — Objectif opérationnel 3',
    'TODO — Objectif de développement personnel',
  ],

  competencesMobilisees: ['business-dev', 'relation-client', 'vente', 'marketing', 'communication'],

  preuves: [
    { type: 'document', libelle: 'Ajouter ici : rapport de stage complet (PDF)', fournie: false },
    { type: 'document', libelle: 'Ajouter ici : convention de stage signée', fournie: false },
    { type: 'document', libelle: 'Ajouter ici : livrable(s) réalisé(s) pendant le stage', fournie: false },
    { type: 'capture', libelle: 'Ajouter ici : captures d\'écran des outils utilisés', fournie: false },
    { type: 'document', libelle: 'Ajouter ici : attestation ou évaluation de l\'entreprise', fournie: false },
    { type: 'analyse', libelle: 'Ajouter ici : tableau de bord ou indicateurs de performance', fournie: false },
  ],

  bilan:
    'TODO — Bilan du stage à compléter en fin de mission : résultats obtenus, impact pour l\'entreprise, évolution personnelle. Qu\'est-ce que vous avez réellement apporté ? Qu\'avez-vous réellement appris ?',

  analyseReflexive:
    'TODO — Analyse réflexive à compléter : en quoi ce stage a-t-il confirmé ou fait évoluer votre projet professionnel ? Quelles compétences BUT avez-vous mobilisées ? Qu\'est-ce que vous feriez différemment ? Comment vous êtes-vous adapté aux réalités du terrain ?',

  fourni: false, // Passer à true quand toutes les informations sont renseignées
};
