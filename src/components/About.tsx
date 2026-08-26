import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden scroll-mt-24">
      
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-y2k-pink opacity-20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-y2k-blue opacity-20 blur-[100px] rounded-full"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
        
        {/* Scrapbook Image Layout */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-square bg-y2k-green-light rounded-3xl border-4 border-black brutal-shadow overflow-hidden flex items-center justify-center p-8 relative">
            {/* Inner frame */}
            <div className="w-full h-full border-4 border-black/20 rounded-xl flex items-center justify-center text-black/40 font-bold pixel-text text-center overflow-hidden">
              <img src="/clueless_magazine_template.jpg" alt="Scrapbook vibe" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating Stickers */}
            <motion.div 
              animate={{ rotate: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 bg-y2k-blue text-black font-display font-bold px-4 py-2 rounded-full border-2 border-black brutal-shadow text-sm"
            >
              since 2024
            </motion.div>
            
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-4 -left-4 text-y2k-pink"
            >
              <Star fill="currentColor" size={48} className="drop-shadow-md" />
            </motion.div>
          </div>
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
            CUTE <br/>
            <span className="chrome-text text-5xl md:text-7xl">NOSTALGIA</span><br/>
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
  );
}
