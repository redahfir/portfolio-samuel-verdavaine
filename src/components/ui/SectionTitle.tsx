import type { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../../utils/animations';

interface SectionTitleProps {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: FC<SectionTitleProps> = ({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignClass}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {tag && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400">
          <span className="w-6 h-px bg-blue-500/60" />
          {tag}
          <span className="w-6 h-px bg-blue-500/60" />
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
