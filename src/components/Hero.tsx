import { motion } from 'motion/react';
import { Heart, Star, Sparkles } from 'lucide-react';

function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="-10 -10 140 140" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Petals */}
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(0 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(72 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(144 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(216 60 60)" />
      <ellipse cx="60" cy="25" rx="22" ry="28" fill="#ff66cc" transform="rotate(288 60 60)" />
      {/* Center */}
      <circle cx="60" cy="60" r="16" fill="#ffd17a" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden scroll-mt-0"
    >
      {/* Checkerboard background */}
      <div className="absolute inset-0 clueless-checker" />

      {/* Wavy bottom edge overlay */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1440,0 1440,60 L1440,120 L0,120 Z"
          fill="#b9e95e"
          opacity="0.5"
        />
        <path
          d="M0,80 C200,40 400,100 600,70 C800,40 1000,100 1200,70 C1300,55 1380,80 1440,80 L1440,120 L0,120 Z"
          fill="#a4d44c"
          opacity="0.4"
        />
      </svg>

      {/* Left flower */}
      <motion.div
        animate={{ rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-[25%] left-[2%] md:left-[8%] z-20 pointer-events-none"
      >
        <Flower className="w-24 h-24 md:w-36 md:h-36 drop-shadow-lg" />
      </motion.div>

      {/* Right flower */}
      <motion.div
        animate={{ rotate: [0, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-[25%] right-[2%] md:right-[8%] z-20 pointer-events-none"
      >
        <Flower className="w-20 h-20 md:w-32 md:h-32 drop-shadow-lg" />
      </motion.div>

      {/* Floating star — top right */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute top-[12%] right-[10%] md:right-[18%] z-20 pointer-events-none"
      >
        <Star className="w-10 h-10 md:w-14 md:h-14 text-y2k-blue drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Floating star — bottom left */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.8 }}
        className="absolute bottom-[15%] left-[6%] md:left-[14%] z-20 pointer-events-none"
      >
        <Star className="w-8 h-8 md:w-12 md:h-12 text-y2k-purple drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Sparkle — mid left */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.3 }}
        className="absolute top-[40%] left-[4%] md:left-[5%] z-20 pointer-events-none"
      >
        <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-yellow-400 drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Sparkle — top left */}
      <motion.div
        animate={{ y: [0, 8, 0], scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1.2 }}
        className="absolute top-[8%] left-[18%] md:left-[22%] z-20 pointer-events-none"
      >
        <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-y2k-pink-light drop-shadow-md" fill="currentColor" />
      </motion.div>

      {/* Butterfly — right side */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 5, 0], rotate: [0, 10, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-[35%] right-[3%] md:right-[6%] z-20 pointer-events-none"
      >
        <svg viewBox="0 0 80 70" className="w-16 h-14 md:w-24 md:h-20 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          {/* Left top wing */}
          <path d="M40 30 C30 10, 5 5, 5 22 C5 35, 20 40, 40 30Z" fill="#ff66cc" stroke="black" strokeWidth="1.5" />
          {/* Right top wing */}
          <path d="M40 30 C50 10, 75 5, 75 22 C75 35, 60 40, 40 30Z" fill="#ff66cc" stroke="black" strokeWidth="1.5" />
          {/* Left bottom wing */}
          <path d="M40 32 C28 38, 8 45, 12 55 C16 62, 30 55, 40 42Z" fill="#c7a4ff" stroke="black" strokeWidth="1.5" />
          {/* Right bottom wing */}
          <path d="M40 32 C52 38, 72 45, 68 55 C64 62, 50 55, 40 42Z" fill="#c7a4ff" stroke="black" strokeWidth="1.5" />
          {/* Wing spots */}
          <circle cx="18" cy="20" r="5" fill="white" opacity="0.5" />
          <circle cx="62" cy="20" r="5" fill="white" opacity="0.5" />
          <circle cx="20" cy="48" r="3.5" fill="white" opacity="0.4" />
          <circle cx="60" cy="48" r="3.5" fill="white" opacity="0.4" />
          {/* Body */}
          <ellipse cx="40" cy="36" rx="2.5" ry="14" fill="black" />
          {/* Head */}
          <circle cx="40" cy="20" r="3" fill="black" />
          {/* Antennae */}
          <path d="M40 18 C36 10, 30 6, 28 4" fill="none" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M40 18 C44 10, 50 6, 52 4" fill="none" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="28" cy="4" r="1.8" fill="black" />
          <circle cx="52" cy="4" r="1.8" fill="black" />
        </svg>
      </motion.div>

      {/* Floating bubble — mid right */}
      <motion.div
        animate={{ y: [0, -14, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-[55%] right-[8%] md:right-[12%] z-20 pointer-events-none"
      >
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-sm shadow-inner" />
      </motion.div>

      {/* Floating bubble — top center-right */}
      <motion.div
        animate={{ y: [0, 10, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[15%] left-[55%] md:left-[62%] z-20 pointer-events-none"
      >
        <div className="w-6 h-6 md:w-9 md:h-9 rounded-full border-2 border-white/50 bg-y2k-pink/20 backdrop-blur-sm" />
      </motion.div>

      {/* Floating bubble — bottom center */}
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.7 }}
        className="absolute bottom-[20%] left-[40%] md:left-[45%] z-20 pointer-events-none"
      >
        <div className="w-5 h-5 md:w-7 md:h-7 rounded-full border-2 border-white/40 bg-y2k-green/20 backdrop-blur-sm" />
      </motion.div>

      {/* Main oval card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: -2 }}
          transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
          className="relative w-full"
        >
          {/* Pink oval */}
          <div className="bg-y2k-pink rounded-[50%] border-[6px] border-y2k-pink-light px-8 py-10 sm:px-16 sm:py-14 md:px-24 md:py-20 text-center relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)]">
            {/* Brand name — bubbly text */}
            <h1
              className="font-display font-extrabold text-white leading-none tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 10vw, 8rem)',
                textShadow: '3px 4px 0px rgba(0,0,0,0.18)',
              }}
            >
              EONNIE
            </h1>

            {/* Subtitle inside the oval */}
            <div className="mt-2 md:mt-4">
              <span className="inline-block bg-white/90 text-black font-display font-bold text-sm sm:text-lg md:text-2xl px-5 py-1.5 md:px-8 md:py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] rotate-[-2deg]">
                TRINKLETS
              </span>
            </div>
          </div>

          {/* Small floating heart decorations around the oval */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-3 right-[15%] text-white drop-shadow-md pointer-events-none"
          >
            <Heart fill="currentColor" size={28} className="text-y2k-pink" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0], rotate: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-2 left-[12%] text-y2k-pink drop-shadow-md pointer-events-none"
          >
            <Heart fill="currentColor" size={22} />
          </motion.div>
        </motion.div>
      </div>

      {/* Tagline + CTA below the oval */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 text-center mt-8 md:mt-12 px-4"
      >
        <p className="text-lg md:text-xl font-medium text-black/80 mb-6 max-w-md mx-auto drop-shadow-sm">
          Handmade accessory collection featuring cute, unique, collectible trinklets.
        </p>

        <motion.a
          href="#trinklets"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-black text-white font-bold text-base md:text-lg px-7 py-3.5 rounded-full shadow-[4px_4px_0px_0px_var(--color-y2k-pink)] border-2 border-black hover:bg-y2k-pink hover:text-white transition-colors"
        >
          <Heart size={18} className="text-y2k-pink" fill="currentColor" />
          ENTER SHOP
          <Heart size={18} className="text-y2k-pink" fill="currentColor" />
        </motion.a>
      </motion.div>
    </section>
  );
}
