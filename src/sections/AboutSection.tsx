import type { FC } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from '../utils/animations';

const qualiteIcons: Record<string, string> = {
  'Esprit d\'analyse': '◎',
  'Sens du relationnel': '◉',
  'Autonomie': '◈',
  'Adaptabilité': '◐',
  'Ambition orientée résultats': '◑',
  'Travail en équipe': '◒',
};

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#07070f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/7 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Label section */}
        <motion.p
          className="text-xs text-zinc-600 tracking-[0.2em] uppercase font-medium mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          01 — Profil
        </motion.p>

        {/* Layout 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Colonne gauche — Bio */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Grande citation */}
            <blockquote className="text-2xl sm:text-3xl font-light text-white leading-[1.35] mb-10 text-balance">
              "Étudiant en BUT TC3, je conjugue analyse de marché, développement commercial et management de la relation client pour créer de la valeur là où ça compte."
            </blockquote>

            <div className="space-y-4 text-zinc-400 text-[15px] leading-relaxed mb-10">
              {profile.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Infos clés */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: GraduationCap, label: 'Formation', value: 'BUT TC Valenciennes' },
                { icon: Calendar, label: 'Promotion', value: '2023 → 2026' },
                { icon: MapPin, label: 'Localisation', value: 'Valenciennes, Nord' },
                { icon: Calendar, label: 'Stage', value: 'Disponible juin 2026' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="p-4 rounded-xl border border-white/7 bg-white/2">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon size={12} className="text-zinc-600" />
                    <span className="text-xs text-zinc-600 uppercase tracking-wider">{label}</span>
                  </div>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA contact */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={`mailto:${profile.contact.email}`}
                className="group inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                {profile.contact.email}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                LinkedIn
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Colonne droite — Compétences comportementales + parcours */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-10"
          >
            {/* Soft skills */}
            <div>
              <p className="text-xs text-zinc-600 tracking-[0.2em] uppercase font-medium mb-6">
                Compétences comportementales
              </p>
              <div className="space-y-1">
                {profile.qualites.map((qual) => (
                  <div
                    key={qual.label}
                    className="group flex items-start gap-4 py-4 border-b border-white/5 last:border-0 hover:border-white/12 transition-colors cursor-default"
                  >
                    <span className="text-lg text-zinc-700 group-hover:text-zinc-400 transition-colors mt-0.5 w-5 shrink-0">
                      {qualiteIcons[qual.label] || '◌'}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-zinc-100 transition-colors">
                        {qual.label}
                      </p>
                      <p className="text-zinc-600 text-xs mt-0.5 leading-relaxed group-hover:text-zinc-500 transition-colors">
                        {qual.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parcours formation */}
            <div>
              <p className="text-xs text-zinc-600 tracking-[0.2em] uppercase font-medium mb-6">
                Parcours de formation
              </p>
              <div className="space-y-0">
                {[
                  { annee: 'BUT1 — 2023/24', label: 'Fondamentaux', desc: 'Marketing, communication, gestion, premiers projets professionnels.' },
                  { annee: 'BUT2 — 2024/25', label: 'Approfondissement', desc: 'Entrepreneuriat, management, événementiel, posture commerciale.' },
                  { annee: 'BUT3 — 2025/26', label: 'Spécialisation P3', desc: 'Business Développement & Management de la Relation Client — vente complexe, omnicanalité, stage.' },
                ].map((p, i) => (
                  <div key={p.annee} className="flex gap-4 py-5 border-b border-white/5 last:border-0">
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${i === 2 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-zinc-700'}`} />
                      {i < 2 && <div className="w-px flex-1 bg-white/6" />}
                    </div>
                    <div className="pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-zinc-500 font-medium">{p.annee}</span>
                        {i === 2 && (
                          <span className="text-xs bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded-full px-2 py-0.5">En cours</span>
                        )}
                      </div>
                      <p className="text-white text-sm font-semibold">{p.label}</p>
                      <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
