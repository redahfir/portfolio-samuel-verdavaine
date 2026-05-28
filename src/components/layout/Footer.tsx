import type { FC } from 'react';
import { Briefcase, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-[#07070f]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-baseline gap-0.5">
              <span className="font-display font-bold text-white text-sm tracking-tight">Samuel</span>
              <span className="font-display font-light text-zinc-500 text-sm tracking-tight">&nbsp;Verdavaine</span>
            </div>
            <p className="text-zinc-700 text-xs">Portfolio BUT TC3 — 2025/2026</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-zinc-500 hover:text-blue-400 hover:border-blue-500/25 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Briefcase size={15} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="w-9 h-9 rounded-xl border border-white/8 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>

          <p className="text-zinc-700 text-xs text-center sm:text-right">
            © {year} — BUT TC Valenciennes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
