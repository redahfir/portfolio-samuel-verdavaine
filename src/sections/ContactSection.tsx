import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Briefcase, MapPin,
  ExternalLink, Send, ArrowRight
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { profile } from '../data/profile';
import { fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '../utils/animations';

const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="mb-14 flex justify-center">
          <SectionTitle
            tag="Prise de contact"
            title="Parlons de votre "
            highlight="projet"
            subtitle="Une question, une opportunité ou un échange professionnel ? N'hésitez pas à me contacter."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left — Infos contact */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInLeft}>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Samuel Verdavaine
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Étudiant en BUT TC3 parcours Business Développement & Management de la Relation Client.
                Disponible pour tout échange professionnel ou opportunité.
              </p>
            </motion.div>

            {/* Contact links */}
            <motion.div variants={fadeInLeft} className="space-y-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0 group-hover:bg-blue-500/25 transition-colors">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-500 text-xs">Email</p>
                  <p className="text-white text-sm font-medium truncate">{profile.contact.email}</p>
                </div>
                <ArrowRight size={16} className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0 group-hover:bg-blue-500/25 transition-colors">
                  <Briefcase size={18} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-500 text-xs">LinkedIn</p>
                  <p className="text-white text-sm font-medium truncate">Samuel Verdavaine</p>
                </div>
                <ExternalLink size={16} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/8">
                <div className="w-10 h-10 rounded-xl bg-zinc-500/15 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-zinc-400" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs">Localisation</p>
                  <p className="text-white text-sm font-medium">{profile.contact.localisation}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Formulaire */}
          <motion.div
            className="space-y-4"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="glass-card rounded-2xl p-6 border border-white/8">
              <h3 className="font-display text-lg font-bold text-white mb-1">Envoyer un message</h3>
              <p className="text-zinc-500 text-xs mb-5">Ce formulaire ouvre votre client mail.</p>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-zinc-400 text-xs font-medium">Votre nom</label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:bg-white/7 transition-all"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-400 text-xs font-medium">Votre email</label>
                  <input
                    type="email"
                    placeholder="votre@email.fr"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:bg-white/7 transition-all"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-400 text-xs font-medium">Objet</label>
                  <input
                    type="text"
                    placeholder="Opportunité / Échange professionnel / Question"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:bg-white/7 transition-all"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-400 text-xs font-medium">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Bonjour Samuel, je souhaite..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:bg-white/7 transition-all resize-none"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute('readonly')}
                  />
                </div>

                <a
                  href={`mailto:${profile.contact.email}?subject=Contact portfolio`}
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/20"
                >
                  <Send size={16} />
                  Envoyer via email
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="rounded-2xl p-4 bg-emerald-500/8 border border-emerald-500/20 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              <div>
                <p className="text-blue-300 text-sm font-semibold">Ouvert aux opportunités</p>
                <p className="text-blue-400/70 text-xs">Valenciennes et alentours · BUT TC3 2025/2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
