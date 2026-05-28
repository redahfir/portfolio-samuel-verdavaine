import type { FC } from 'react';
import { Upload, PlusCircle, FileText, ExternalLink } from 'lucide-react';

interface PlaceholderZoneProps {
  label: string;
  type?: string;
  compact?: boolean;
  fournie?: boolean;
  url?: string;
}

const PlaceholderZone: FC<PlaceholderZoneProps> = ({ label, type, compact = false, fournie = false, url }) => {
  if (fournie && url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-3 ${compact ? 'p-3' : 'p-4'} rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/35 transition-all duration-200 group`}
      >
        <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
          <FileText size={16} className="text-emerald-400" />
        </div>
        <div className="min-w-0 flex-1">
          {type && (
            <span className="text-xs text-emerald-500 uppercase tracking-wider font-semibold block mb-0.5">
              {type}
            </span>
          )}
          <p className={`text-emerald-300 ${compact ? 'text-xs' : 'text-sm'} leading-snug font-medium`}>{label}</p>
        </div>
        <div className="ml-auto shrink-0">
          <ExternalLink size={14} className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors" />
        </div>
      </a>
    );
  }

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
