import type { FC, ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'blue' | 'emerald' | 'purple' | 'cyan' | 'amber' | 'default';
  size?: 'sm' | 'md';
}

const variantClasses: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  default: 'bg-white/5 text-zinc-400 border-white/10',
};

const sizeClasses: Record<string, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-xs px-3 py-1',
};

const Badge: FC<BadgeProps> = ({ children, variant = 'default', size = 'md' }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
