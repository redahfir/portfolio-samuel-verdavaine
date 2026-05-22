import type { FC } from 'react';
import { motion } from 'framer-motion';
import { progressBar, viewportConfig } from '../../utils/animations';

interface ProgressBarProps {
  value: number;       // 0-100
  color?: string;      // Hex color
  label?: string;
  showValue?: boolean;
  height?: 'sm' | 'md';
}

const ProgressBar: FC<ProgressBarProps> = ({
  value,
  color = '#3b82f6',
  label,
  showValue = true,
  height = 'md',
}) => {
  const heightClass = height === 'sm' ? 'h-1.5' : 'h-2';

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-xs text-zinc-400">{label}</span>}
          {showValue && (
            <span className="text-xs font-semibold" style={{ color }}>
              {value}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full ${heightClass} bg-white/8 rounded-full overflow-hidden`}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
          variants={progressBar(value)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
