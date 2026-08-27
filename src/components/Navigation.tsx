import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/trinklets', label: 'TRINKLETS' },
    { to: '/about', label: 'ABOUT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between brutal-shadow">
        
        {/* Logo */}
        <Link to="/" className="nav-wordmark" aria-label="EONNIE home">
          EONNIE<span aria-hidden="true">*</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm tracking-widest">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hover:text-y2k-pink transition-colors ${
                isActive(to) ? 'text-y2k-pink' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-full transition-colors brutal-shadow-pink ${
              isActive('/contact')
                ? 'bg-y2k-pink text-white'
                : 'bg-black text-white hover:bg-y2k-pink'
            }`}
          >
            CONTACT
          </Link>
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
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`hover:text-y2k-pink ${isActive(to) ? 'text-y2k-pink' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`hover:text-y2k-pink ${isActive('/contact') ? 'text-y2k-pink' : ''}`}
          >
            CONTACT
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
