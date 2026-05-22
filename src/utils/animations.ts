// ============================================================
// Variantes d'animations Framer Motion
// ============================================================
import type { Variants, Transition } from 'framer-motion';

// Cubic bezier "apple-like" — typed as const tuple for Framer Motion v12
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const baseTransition: Transition = {
  duration: 0.6,
  ease: EASE_OUT,
};

const fastTransition: Transition = {
  duration: 0.5,
  ease: 'easeOut',
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: fastTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

// Progress bar — returns inline style width; used with style prop instead of variants
export const progressBar = (width: number) => ({
  hidden: { width: 0 },
  visible: {
    width: `${width}%`,
    transition: { duration: 1.2, ease: EASE_OUT, delay: 0.3 } as Transition,
  },
});

export const viewportConfig = {
  once: true,
  margin: '-80px',
} as const;
