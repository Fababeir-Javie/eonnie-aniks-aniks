import type { CSSProperties } from 'react';
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

type Y2KVariant = 'home' | 'trinklets' | 'about' | 'contact';

interface Y2KDecorationsProps {
  variant?: Y2KVariant;
}

export function Y2KDecorations({ variant = 'home' }: Y2KDecorationsProps) {
  const positions: Record<Y2KVariant, {
    flowers: { top: string; left?: string; right?: string; size: string; delay: number }[];
    butterflies: { top: string; left?: string; right?: string; size: string; delay: number }[];
    stars: { top: string; left?: string; right?: string; size: string; color: string; delay: number }[];
    sparkles: { top: string; left?: string; right?: string; size: string; color: string; delay: number }[];
    bubbles: { top: string; left?: string; right?: string; size: string; bg: string; delay: number }[];
  }> = {
    home: {
      flowers: [
        { top: '5%', left: '3%', size: 'w-20 h-20 md:w-32 md:h-32', delay: 0 },
        { top: '35%', right: '2%', size: 'w-16 h-16 md:w-26 md:h-26', delay: 1 },
        { top: '70%', left: '5%', size: 'w-18 h-18 md:w-28 md:h-28', delay: 1.8 },
        { top: '90%', right: '4%', size: 'w-14 h-14 md:w-22 md:h-22', delay: 2.5 },
      ],
      butterflies: [
        { top: '20%', right: '5%', size: 'w-14 h-12 md:w-20 md:h-16', delay: 0.5 },
        { top: '75%', left: '8%', size: 'w-12 h-10 md:w-16 md:h-13', delay: 2 },
      ],
      stars: [
        { top: '8%', right: '12%', size: 'w-8 h-8 md:w-12 md:h-12', color: 'text-y2k-blue', delay: 0 },
        { top: '45%', left: '4%', size: 'w-7 h-7 md:w-10 md:h-10', color: 'text-y2k-purple', delay: 0.8 },
        { top: '60%', right: '8%', size: 'w-6 h-6 md:w-9 md:h-9', color: 'text-y2k-pink', delay: 1.5 },
        { top: '82%', left: '15%', size: 'w-8 h-8 md:w-10 md:h-10', color: 'text-y2k-blue', delay: 2.2 },
        { top: '15%', left: '55%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-yellow-300', delay: 3 },
      ],
      sparkles: [
        { top: '12%', left: '20%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-y2k-pink-light', delay: 1.2 },
        { top: '50%', left: '2%', size: 'w-6 h-6 md:w-9 md:h-9', color: 'text-yellow-400', delay: 0.3 },
        { top: '30%', right: '15%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-y2k-green', delay: 2.5 },
        { top: '68%', right: '3%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-yellow-400', delay: 1.8 },
        { top: '88%', left: '35%', size: 'w-4 h-4 md:w-6 md:h-6', color: 'text-y2k-pink', delay: 3.2 },
      ],
      bubbles: [
        { top: '18%', left: '50%', size: 'w-5 h-5 md:w-8 md:h-8', bg: 'bg-y2k-pink/20', delay: 2 },
        { top: '55%', right: '10%', size: 'w-6 h-6 md:w-10 md:h-10', bg: 'bg-white/20', delay: 1.5 },
        { top: '78%', left: '45%', size: 'w-4 h-4 md:w-6 md:h-6', bg: 'bg-y2k-green/20', delay: 0.7 },
        { top: '40%', left: '30%', size: 'w-3 h-3 md:w-5 md:h-5', bg: 'bg-y2k-blue/15', delay: 2.8 },
      ],
    },
    trinklets: {
      flowers: [
        { top: '3%', right: '3%', size: 'w-18 h-18 md:w-28 md:h-28', delay: 0 },
        { top: '40%', left: '2%', size: 'w-14 h-14 md:w-24 md:h-24', delay: 1.2 },
        { top: '72%', right: '5%', size: 'w-16 h-16 md:w-26 md:h-26', delay: 2 },
        { top: '92%', left: '4%', size: 'w-12 h-12 md:w-20 md:h-20', delay: 2.8 },
      ],
      butterflies: [
        { top: '25%', left: '6%', size: 'w-12 h-10 md:w-18 md:h-14', delay: 0.4 },
        { top: '60%', right: '4%', size: 'w-13 h-11 md:w-18 md:h-15', delay: 1.8 },
      ],
      stars: [
        { top: '10%', left: '8%', size: 'w-8 h-8 md:w-11 md:h-11', color: 'text-y2k-purple', delay: 0 },
        { top: '50%', right: '6%', size: 'w-9 h-9 md:w-12 md:h-12', color: 'text-y2k-blue', delay: 0.6 },
        { top: '65%', left: '12%', size: 'w-7 h-7 md:w-9 md:h-9', color: 'text-y2k-pink', delay: 1.4 },
        { top: '85%', right: '15%', size: 'w-6 h-6 md:w-8 md:h-8', color: 'text-y2k-green', delay: 2.1 },
        { top: '30%', left: '40%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-yellow-300', delay: 3.5 },
      ],
      sparkles: [
        { top: '15%', right: '10%', size: 'w-6 h-6 md:w-8 md:h-8', color: 'text-yellow-400', delay: 1 },
        { top: '55%', left: '5%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-y2k-pink', delay: 2.2 },
        { top: '78%', right: '8%', size: 'w-5 h-5 md:w-6 md:h-6', color: 'text-y2k-blue', delay: 0.8 },
        { top: '35%', left: '45%', size: 'w-4 h-4 md:w-6 md:h-6', color: 'text-yellow-400', delay: 3 },
      ],
      bubbles: [
        { top: '20%', left: '42%', size: 'w-5 h-5 md:w-8 md:h-8', bg: 'bg-y2k-blue/20', delay: 0.8 },
        { top: '62%', right: '15%', size: 'w-4 h-4 md:w-7 md:h-7', bg: 'bg-y2k-pink/20', delay: 2 },
        { top: '80%', left: '55%', size: 'w-3 h-3 md:w-5 md:h-5', bg: 'bg-yellow-200/20', delay: 1.5 },
      ],
    },
    about: {
      flowers: [
        { top: '8%', right: '4%', size: 'w-14 h-14 md:w-24 md:h-24', delay: 0.8 },
        { top: '50%', left: '2%', size: 'w-16 h-16 md:w-26 md:h-26', delay: 0 },
        { top: '80%', right: '3%', size: 'w-14 h-14 md:w-22 md:h-22', delay: 2 },
        { top: '95%', left: '6%', size: 'w-12 h-12 md:w-18 md:h-18', delay: 2.5 },
      ],
      butterflies: [
        { top: '22%', left: '8%', size: 'w-12 h-10 md:w-16 md:h-13', delay: 0.3 },
        { top: '65%', right: '6%', size: 'w-11 h-9 md:w-15 md:h-12', delay: 1.8 },
      ],
      stars: [
        { top: '15%', left: '5%', size: 'w-8 h-8 md:w-10 md:h-10', color: 'text-y2k-blue', delay: 0 },
        { top: '55%', right: '8%', size: 'w-7 h-7 md:w-9 md:h-9', color: 'text-y2k-pink', delay: 1.4 },
        { top: '72%', left: '10%', size: 'w-6 h-6 md:w-8 md:h-8', color: 'text-y2k-purple', delay: 2.5 },
        { top: '30%', right: '20%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-yellow-300', delay: 3 },
        { top: '88%', right: '12%', size: 'w-6 h-6 md:w-8 md:h-8', color: 'text-y2k-green', delay: 1.8 },
      ],
      sparkles: [
        { top: '10%', left: '30%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-yellow-400', delay: 0.6 },
        { top: '38%', left: '15%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-y2k-pink', delay: 2.2 },
        { top: '60%', right: '3%', size: 'w-5 h-5 md:w-6 md:h-6', color: 'text-y2k-green', delay: 1.5 },
        { top: '82%', left: '20%', size: 'w-4 h-4 md:w-6 md:h-6', color: 'text-yellow-400', delay: 3 },
      ],
      bubbles: [
        { top: '18%', left: '50%', size: 'w-5 h-5 md:w-9 md:h-9', bg: 'bg-white/15', delay: 1.2 },
        { top: '45%', right: '12%', size: 'w-4 h-4 md:w-6 md:h-6', bg: 'bg-y2k-purple/15', delay: 2.5 },
        { top: '75%', left: '35%', size: 'w-4 h-4 md:w-7 md:h-7', bg: 'bg-y2k-pink/15', delay: 0.4 },
        { top: '92%', right: '25%', size: 'w-3 h-3 md:w-5 md:h-5', bg: 'bg-y2k-blue/15', delay: 1.8 },
      ],
    },
    contact: {
      flowers: [
        { top: '6%', left: '3%', size: 'w-16 h-16 md:w-24 md:h-24', delay: 0 },
        { top: '45%', right: '3%', size: 'w-14 h-14 md:w-22 md:h-22', delay: 1 },
        { top: '78%', left: '5%', size: 'w-16 h-16 md:w-24 md:h-24', delay: 2 },
        { top: '93%', right: '6%', size: 'w-12 h-12 md:w-18 md:h-18', delay: 2.5 },
      ],
      butterflies: [
        { top: '20%', right: '5%', size: 'w-13 h-11 md:w-18 md:h-15', delay: 0.5 },
        { top: '68%', left: '6%', size: 'w-11 h-9 md:w-15 md:h-12', delay: 2 },
      ],
      stars: [
        { top: '12%', right: '10%', size: 'w-7 h-7 md:w-10 md:h-10', color: 'text-y2k-green', delay: 0 },
        { top: '35%', left: '8%', size: 'w-8 h-8 md:w-10 md:h-10', color: 'text-y2k-pink', delay: 0.7 },
        { top: '58%', right: '10%', size: 'w-6 h-6 md:w-8 md:h-8', color: 'text-y2k-blue', delay: 1.5 },
        { top: '82%', left: '12%', size: 'w-6 h-6 md:w-8 md:h-8', color: 'text-y2k-purple', delay: 2.2 },
        { top: '28%', left: '35%', size: 'w-4 h-4 md:w-6 md:h-6', color: 'text-yellow-300', delay: 3 },
      ],
      sparkles: [
        { top: '8%', left: '25%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-y2k-pink-light', delay: 1.6 },
        { top: '42%', left: '3%', size: 'w-5 h-5 md:w-7 md:h-7', color: 'text-yellow-400', delay: 0.9 },
        { top: '65%', right: '5%', size: 'w-5 h-5 md:w-6 md:h-6', color: 'text-y2k-green', delay: 2.5 },
        { top: '88%', left: '30%', size: 'w-4 h-4 md:w-6 md:h-6', color: 'text-yellow-400', delay: 1.2 },
      ],
      bubbles: [
        { top: '15%', right: '15%', size: 'w-5 h-5 md:w-8 md:h-8', bg: 'bg-y2k-pink/15', delay: 1.3 },
        { top: '50%', left: '40%', size: 'w-4 h-4 md:w-6 md:h-6', bg: 'bg-y2k-green/15', delay: 2.1 },
        { top: '75%', right: '20%', size: 'w-3 h-3 md:w-5 md:h-5', bg: 'bg-y2k-blue/15', delay: 0.6 },
      ],
    },
  };

  const p = positions[variant];

  return (
    <div className="absolute inset-0 z-[20] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Flowers */}
      {p.flowers.map((f, i) => (
        <div
          key={`flower-${i}`}
          className={`absolute decoration-float decoration-float--flower decoration-float--${i % 3}`}
          style={{ top: f.top, left: f.left, right: f.right, '--decoration-delay': `${f.delay}s` } as CSSProperties}
        >
          <FlowerSVG className={`${f.size} drop-shadow-lg`} />
        </div>
      ))}

      {/* Butterflies */}
      {p.butterflies.map((b, i) => (
        <div
          key={`butterfly-${i}`}
          className={`absolute decoration-float decoration-float--butterfly decoration-float--${i % 3}`}
          style={{ top: b.top, left: b.left, right: b.right, '--decoration-delay': `${b.delay}s` } as CSSProperties}
        >
          <ButterflySVG className={`${b.size} drop-shadow-md`} />
        </div>
      ))}

      {/* Stars */}
      {p.stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className={`absolute decoration-float decoration-float--star decoration-float--${i % 3} ${s.color}`}
          style={{ top: s.top, left: s.left, right: s.right, '--decoration-delay': `${s.delay}s` } as CSSProperties}
        >
          <Star className={`${s.size} drop-shadow-md`} fill="currentColor" />
        </div>
      ))}

      {/* Sparkles */}
      {p.sparkles.map((sp, i) => (
        <div
          key={`sparkle-${i}`}
          className={`absolute decoration-float decoration-float--sparkle decoration-float--${i % 3} ${sp.color}`}
          style={{ top: sp.top, left: sp.left, right: sp.right, '--decoration-delay': `${sp.delay}s` } as CSSProperties}
        >
          <Sparkles className={`${sp.size} drop-shadow-md`} fill="currentColor" />
        </div>
      ))}

      {/* Bubbles */}
      {p.bubbles.map((bu, i) => (
        <div
          key={`bubble-${i}`}
          className={`absolute decoration-float decoration-float--bubble decoration-float--${i % 3} ${bu.bg} rounded-full border-2 border-white/40`}
          style={{ top: bu.top, left: bu.left, right: bu.right, width: 'fit-content', height: 'fit-content', '--decoration-delay': `${bu.delay}s` } as CSSProperties}
        >
          <div className={bu.size} />
        </div>
      ))}
    </div>
  );
}
