import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImage, setCurrentImage] = useState<string>('');

  // Update current image when product changes
  useEffect(() => {
    if (product) {
      setCurrentImage(product.mainImage);
    }
  }, [product]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!product) return null;

  const displayImage = currentImage || product.mainImage;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] brutal-shadow border-4 border-black relative overflow-hidden z-[101]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-y2k-pink text-white p-2 rounded-full border-2 border-black brutal-shadow-pink hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 p-6 border-b-4 md:border-b-0 md:border-r-4 border-black border-dashed flex flex-col gap-4 bg-gradient-to-br from-y2k-pink-light to-[#d1e3ff]">
                  <div className="aspect-square bg-y2k-blue/20 rounded-2xl border-4 border-black overflow-hidden brutal-shadow relative group">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={displayImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        src={displayImage} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </AnimatePresence>
                    {product.label && (
                      <div className="absolute top-4 left-4 z-10 bg-y2k-pink text-white font-bold pixel-text text-sm px-4 py-2 rounded-full border-2 border-black brutal-shadow rotate-[-5deg]">
                        {product.label}
                      </div>
                    )}
                  </div>
                  
                  {/* Gallery */}
                  {product.gallery.length > 0 && (
                    <div className="flex gap-4 overflow-x-auto pb-2 px-1">
                      <div 
                        onClick={() => setCurrentImage(product.mainImage)}
                        className={`w-20 h-20 shrink-0 rounded-xl border-2 border-black overflow-hidden cursor-pointer transition-all ${currentImage === product.mainImage ? 'brutal-shadow border-4 scale-105' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}
                      >
                        <img src={product.mainImage} alt="Thumbnail 1" className="w-full h-full object-cover" />
                      </div>
                      {product.gallery.map((img, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setCurrentImage(img)}
                          className={`w-20 h-20 shrink-0 rounded-xl border-2 border-black overflow-hidden cursor-pointer transition-all ${currentImage === img ? 'brutal-shadow border-4 scale-105' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 2}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden bg-y2k-green-light">
                  
                  {/* Decorative background sparkle */}
                  <motion.div
                    animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-12 text-y2k-green/30"
                  >
                    <Sparkles className="w-32 h-32" />
                  </motion.div>

                  <div className="inline-block bg-black text-white font-bold pixel-text text-xs px-3 py-1 rounded-full w-fit mb-4 relative z-10">
                    // {product.category.toUpperCase()}
                  </div>
                  
                  <h3 className="font-display font-extrabold text-3xl md:text-5xl mb-4 leading-tight relative z-10 text-black">
                    {product.name}
                  </h3>
                  
                  <div className="font-display font-bold text-2xl text-y2k-pink mb-6 relative z-10 bg-black px-6 py-2 rounded-xl border-2 border-black brutal-shadow w-fit">
                    {product.price}
                  </div>

                  <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className={`w-3 h-3 rounded-full border border-black ${product.status === 'sold-out' ? 'bg-red-500' : 'bg-y2k-green'}`}></div>
                    <span className="font-bold uppercase tracking-wider text-sm bg-white/50 px-2 py-1 rounded-md border border-black/10">
                      {product.status.replace('-', ' ')}
                    </span>
                  </div>

                  {product.description && (
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed relative z-10 font-medium">
                      {product.description}
                    </p>
                  )}

                  <motion.button 
                    whileHover={product.status !== 'sold-out' ? { scale: 1.02 } : {}}
                    whileTap={product.status !== 'sold-out' ? { scale: 0.98 } : {}}
                    disabled={product.status === 'sold-out'}
                    className={`relative z-10 flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-lg border-2 border-black transition-all ${
                      product.status === 'sold-out' 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-y2k-green text-black brutal-shadow hover:bg-black hover:text-y2k-green'
                    }`}
                  >
                    <Heart fill={product.status === 'sold-out' ? 'none' : 'currentColor'} size={20} />
                    {product.status === 'sold-out' ? 'SOLD OUT' : 'ORDER TRINKLET'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
