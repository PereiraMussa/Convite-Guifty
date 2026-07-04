import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass text-champagne shadow-lg shadow-black/30 transition-transform hover:scale-110"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      aria-label={isPlaying ? "Pausar música" : "Tocar música"}
    >
      <motion.span
        animate={isPlaying ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ repeat: isPlaying ? Infinity : 0, duration: 1.8 }}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.span>
    </motion.button>
  );
}
