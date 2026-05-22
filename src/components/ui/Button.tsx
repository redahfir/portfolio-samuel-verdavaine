import type { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  as?: 'button' | 'a';
  href?: string;
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30',
  secondary:
    'bg-white/8 hover:bg-white/12 text-white border border-white/10 hover:border-white/20',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/6',
  outline:
    'border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/70',
};

const sizeClasses: Record<string, string> = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-7 py-3.5 gap-2.5',
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  as = 'button',
  href,
  className = '',
  ...props
}) => {
  const classes = `inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      {...(props as object)}
    >
      {content}
    </motion.button>
  );
};

export default Button;
