import type { Competence } from '../types';
import type { useTheme } from '../context/ThemeContext';

type Theme = ReturnType<typeof useTheme>['theme'];

/** Retourne la couleur d'accent adaptée au thème courant. */
export function accentColor(comp: Competence, theme: Theme): string {
  return theme === 'light' ? comp.couleurAccentClair : comp.couleurAccent;
}
