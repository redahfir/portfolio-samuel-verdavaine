import type { FC } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, Image } from 'lucide-react';

const ProofViewer: FC<{
  url: string;
  label: string;
  onClose: () => void;
}> = ({ url, label, onClose }) => {
  const isImage = /\.(png|jpg|jpeg|gif|webp)$/i.test(url);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col"
      style={{ background: 'rgba(0,0,0,0.97)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Barre supérieure */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          {isImage
            ? <Image size={14} className="text-emerald-400 shrink-0" />
            : <FileText size={14} className="text-emerald-400 shrink-0" />
          }
          <p className="text-white text-sm font-medium truncate">{label}</p>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 ml-4 w-8 h-8 rounded-xl border border-white/12 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/25 transition-all"
        >
          <X size={14} />
        </button>
      </div>

      {/* Contenu */}
      <div className="flex-1 overflow-hidden flex items-center justify-center p-4 sm:p-8">
        {isImage ? (
          <motion.img
            src={url}
            alt={label}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <motion.iframe
            src={url}
            title={label}
            className="w-full h-full rounded-xl border border-white/8"
            style={{ maxWidth: '900px' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProofViewer;
