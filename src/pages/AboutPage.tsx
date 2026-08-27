import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen antialiased selection:bg-y2k-pink selection:text-white relative overflow-hidden">
      {/* Floating Decorations */}
      {/* Page Header Banner */}
      <section className="site-default-background relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white mb-4"
          >
            ABOUT <span className="chrome-text">US</span>
          </motion.h1>
        </div>
      </section>

      {/* About Content */}
      <section className="site-default-background py-24 px-4 relative overflow-hidden">
        {/* Decorative background blurs */}
        <div className="absolute top-10 left-0 w-80 h-80 bg-y2k-pink opacity-15 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-y2k-blue opacity-15 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-y2k-purple opacity-10 blur-[140px] rounded-full" />

        {/* Scattered Y2K star shapes */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute top-[10%] right-[8%] pointer-events-none opacity-15"
        >
          <Star fill="currentColor" size={60} className="text-y2k-pink" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="absolute bottom-[15%] left-[5%] pointer-events-none opacity-10"
        >
          <Star fill="currentColor" size={48} className="text-y2k-blue" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="absolute top-[55%] right-[3%] pointer-events-none opacity-10"
        >
          <Star fill="currentColor" size={36} className="text-y2k-green" />
        </motion.div>

        {/* Subtle checkerboard strip at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #ff66cc 25%, transparent 25%, transparent 75%, #ff66cc 75%), linear-gradient(45deg, #ff66cc 25%, transparent 25%, transparent 75%, #ff66cc 75%)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
            backgroundColor: '#ff99dd',
          }}
        />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
          {/* Scrapbook Image Layout — Polaroid style */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="scrapbook-card bg-white rounded-3xl border-4 border-black brutal-shadow p-6 pb-14 relative z-10 rotate-[-1deg] hover:rotate-0 transition-transform duration-300 max-w-lg mx-auto">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-y2k-pink/60 rounded-sm border border-black/10 rotate-[-2deg] z-20" />
              <div className="w-full rounded-xl overflow-hidden border-2 border-black/10 bg-white">
                <img src="/facebook.jpg" alt="Scrapbook vibe" className="w-full h-auto object-cover" />
              </div>
            </div>

            <motion.div
              animate={{ rotate: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-y2k-blue text-black font-display font-bold px-4 py-2 rounded-full border-2 border-black brutal-shadow text-sm z-20"
            >
              since 2024
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-3 -left-3 text-y2k-pink z-20"
            >
              <Star fill="currentColor" size={48} className="drop-shadow-md" />
            </motion.div>

            <div className="absolute -bottom-2 right-8 w-16 h-5 bg-y2k-blue/60 rounded-sm border border-black/10 rotate-[5deg] z-20" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="inline-block px-4 py-1 bg-black text-white text-xs pixel-text rounded-full mb-6">
              // ABOUT US
            </div>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
              CUTE <br />
              <span className="chrome-text text-5xl md:text-7xl">NOSTALGIA</span><br />
              HANDMADE.
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                EONNIE is born from a love of early 2000s internet aesthetics, glossy fashion magazines, and the joy of collecting tiny, beautiful things.
              </p>
              <p>
                Every trinklet is carefully handmade to add a pop of Y2K flavor to your everyday life. We mix chrome textures, pastel brights, and playful shapes to create accessories that feel uniquely yours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
