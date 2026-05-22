import type { FC } from 'react';
import { Upload, PlusCircle } from 'lucide-react';

interface PlaceholderZoneProps {
  label: string;
  type?: string;
  compact?: boolean;
}

const PlaceholderZone: FC<PlaceholderZoneProps> = ({ label, type, compact = false }) => {
  return (
    <div className={`placeholder-zone flex items-center gap-3 ${compact ? 'p-3' : 'p-4'}`}>
      <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Upload size={16} className="text-blue-400" />
      </div>
      <div className="min-w-0">
        {type && (
          <span className="text-xs text-blue-500/70 uppercase tracking-wider font-semibold block mb-0.5">
            {type}
          </span>
        )}
        <p className={`text-zinc-400 ${compact ? 'text-xs' : 'text-sm'} leading-snug`}>{label}</p>
      </div>
      <div className="ml-auto shrink-0">
        <PlusCircle size={16} className="text-blue-500/40" />
      </div>
    </div>
  );
};

export default PlaceholderZone;
