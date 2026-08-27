import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

function FlowerSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="-10 -10 140 140" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(0 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(72 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(144 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(216 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(288 60 60)" />
      <circle cx="60" cy="60" r="16" fill="#ffd17a" />
    </svg>
  );
}

function ButterflySVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 70" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M40 30 C30 10, 5 5, 5 22 C5 35, 20 40, 40 30Z" fill="#ff66cc" stroke="black" strokeWidth="1.5" />
      <path d="M40 30 C50 10, 75 5, 75 22 C75 35, 60 40, 40 30Z" fill="#ff66cc" stroke="black" strokeWidth="1.5" />
      <path d="M40 32 C28 38, 8 45, 12 55 C16 62, 30 55, 40 42Z" fill="#c7a4ff" stroke="black" strokeWidth="1.5" />
      <path d="M40 32 C52 38, 72 45, 68 55 C64 62, 50 55, 40 42Z" fill="#c7a4ff" stroke="black" strokeWidth="1.5" />
      <circle cx="18" cy="20" r="5" fill="white" opacity="0.5" />
      <circle cx="62" cy="20" r="5" fill="white" opacity="0.5" />
      <circle cx="20" cy="48" r="3.5" fill="white" opacity="0.4" />
      <circle cx="60" cy="48" r="3.5" fill="white" opacity="0.4" />
      <ellipse cx="40" cy="36" rx="2.5" ry="14" fill="black" />
      <circle cx="40" cy="20" r="3" fill="black" />
      <path d="M40 18 C36 10, 30 6, 28 4" fill="none" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M40 18 C44 10, 50 6, 52 4" fill="none" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="28" cy="4" r="1.8" fill="black" />
      <circle cx="52" cy="4" r="1.8" fill="black" />
    </svg>
  );
}

export function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {/* Left flower */}
      <motion.div
        className="absolute top-[18%] left-[7%] decoration-float decoration-float--flower decoration-float--0"
        animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      >
        <FlowerSVG className="w-24 h-24 md:w-36 md:h-36 drop-shadow-lg" />
      </motion.div>

      {/* Right flower */}
      <motion.div
        className="absolute top-[65%] right-[7%] decoration-float decoration-float--flower decoration-float--1"
        animate={{ rotate: [0, -8, 0], scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
      >
        <FlowerSVG className="w-20 h-20 md:w-32 md:h-32 drop-shadow-lg" />
      </motion.div>

      {/* Top right star */}
      <motion.div
        className="absolute top-[11%] right-[16%] text-y2k-blue decoration-float decoration-float--star decoration-float--2"
        animate={{ y: [0, -12, 0], rotate: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <Star className="w-10 h-10 md:w-14 md:h-14 drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Bottom left star */}
      <motion.div
        className="absolute top-[78%] left-[14%] text-y2k-purple decoration-float decoration-float--star decoration-float--0"
        animate={{ y: [0, 10, 0], rotate: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.8 }}
      >
        <Star className="w-8 h-8 md:w-12 md:h-12 drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Left sparkle */}
      <motion.div
        className="absolute top-[39%] left-[4%] text-yellow-400 decoration-float decoration-float--sparkle decoration-float--1"
        animate={{ y: [0, -10, 0], scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.3 }}
      >
        <Sparkles className="w-7 h-7 md:w-10 md:h-10 drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Right sparkle */}
      <motion.div
        className="absolute top-[8%] left-[22%] text-y2k-pink-light decoration-float decoration-float--sparkle decoration-float--2"
        animate={{ y: [0, 8, 0], scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1.2 }}
      >
        <Sparkles className="w-5 h-5 md:w-8 md:h-8 drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Butterfly */}
      <motion.div
        className="absolute top-[35%] right-[6%] decoration-float decoration-float--butterfly decoration-float--0"
        animate={{ y: [0, -15, 0], x: [0, 5, 0], rotate: [0, 10, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
      >
        <ButterflySVG className="w-16 h-14 md:w-24 md:h-20 drop-shadow-md" />
      </motion.div>

      {/* Bubble right */}
      <motion.div
        className="absolute top-[52%] right-[11%] w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white/60 bg-white/20 shadow-inner decoration-float decoration-float--bubble decoration-float--1"
        animate={{ y: [0, -14, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Bubble top */}
      <motion.div
        className="absolute top-[15%] left-[58%] w-6 h-6 md:w-9 md:h-9 rounded-full border-2 border-white/50 bg-y2k-pink/20 decoration-float decoration-float--bubble decoration-float--2"
        animate={{ y: [0, 10, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 2 }}
      />

      {/* Bubble bottom */}
      <motion.div
        className="absolute bottom-[20%] left-[42%] w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-white/40 bg-y2k-green/20 decoration-float decoration-float--bubble decoration-float--0"
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.7 }}
      />
    </div>
  );
}
