import type { FC } from 'react';
import { Zap, Code2, Briefcase, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-dark-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-display font-semibold text-sm">Samuel Verdavaine</p>
              <p className="text-zinc-500 text-xs">Portfolio BUT TC3 — 2025/2026</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
              aria-label="GitHub"
            >
              <Code2 size={16} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Briefcase size={16} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-xs text-center">
            © {year} Samuel Verdavaine — BUT TC3 Valenciennes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
