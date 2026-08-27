import { motion } from 'motion/react';
import { Mail, Instagram, MessageCircleHeart } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen antialiased selection:bg-y2k-pink selection:text-white relative overflow-hidden">
      {/* Floating Decorations */}
      {/* Page Header Banner */}
      <section className="bg-transparent relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-4"
          >
            <span className="y2k-white-text">CONTACT</span> <span className="chrome-text">US</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-transparent py-24 px-4 relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[3rem] brutal-shadow border-4 border-black"
          >
            <div className="inline-flex items-center justify-center bg-y2k-pink text-white rounded-full p-4 mb-6 brutal-shadow-pink rotate-12">
              <MessageCircleHeart size={40} />
            </div>

            <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-6 tracking-tight">
              WANT A TRINKLET?
            </h2>

            <p className="text-xl mb-10 max-w-lg mx-auto font-medium">
              Have a question or want to order? Come say hi on our socials or drop us a message.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center gap-3 w-full md:w-auto bg-black text-white px-8 py-4 rounded-full font-bold brutal-shadow border-2 border-black hover:bg-y2k-pink transition-colors"
              >
                <Instagram />
                @eonnie.trinklets
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center gap-3 w-full md:w-auto bg-white text-black px-8 py-4 rounded-full font-bold brutal-shadow border-2 border-black hover:bg-y2k-green transition-colors"
              >
                <Mail />
                hello@eonnietrinklets.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
