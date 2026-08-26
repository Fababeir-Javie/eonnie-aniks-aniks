import { motion } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-4 flex items-center justify-between brutal-shadow">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Sparkles className="text-y2k-pink w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="font-display font-bold text-2xl tracking-tighter">
            EONNIE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm tracking-widest">
          <a href="#hero" className="hover:text-y2k-pink transition-colors">HOME</a>
          <a href="#trinklets" className="hover:text-y2k-pink transition-colors">TRINKLETS</a>
          <a href="#about" className="hover:text-y2k-pink transition-colors">ABOUT</a>
          <a href="#contact" className="px-4 py-2 bg-black text-white rounded-full hover:bg-y2k-pink transition-colors brutal-shadow-pink">
            CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 flex flex-col gap-6 brutal-shadow text-center font-bold tracking-widest"
        >
          <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-y2k-pink">HOME</a>
          <a href="#trinklets" onClick={() => setIsOpen(false)} className="hover:text-y2k-pink">TRINKLETS</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-y2k-pink">ABOUT</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-y2k-pink text-y2k-pink">CONTACT</a>
        </motion.div>
      )}
    </nav>
  );
}
